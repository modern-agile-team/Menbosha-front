import HELPCOMMENT from '@/apis/helpComment';
import { FlexBox, TextBox } from '@/components/common/globalStyled/styled';
import {
  BoardIdType,
  HelpCommentListApiType,
  HelpCommentParamsType,
  HelpCommentType,
} from '@/types/help';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './styled';
import { categoryList } from '@/components/common/category/categoryList';
import { useRecoilValue } from 'recoil';
import { MyProfileType } from '@/types/user';
import USER from '@/apis/user';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';
import HELP from '@/apis/help';
import { rankList } from '@/components/common/rank/rankList';
import SkeletonUI from '@/components/common/skeletonUI/SkeletonUI';
import { Router, useRouter } from 'next/router';
import axios from 'axios';

const UnitComment = ({ id }: BoardIdType) => {
  //페이지네이션 state
  const [totalPage, setTotalPage] = useState(1); //페이지 수
  const [page, setPage] = useState(1);
  const obsRef = useRef<HTMLDivElement>(null); //옵저버 state
  const [load, setLoad] = useState(false);
  const preventRef = useRef(true); //옵저버 중복 방지
  const [commentData, setCommentData] = useState<
    HelpCommentListApiType['helpYouCommentWithUserAndUserImagesItemDto']
  >([]);
  const [myProfile, setMyProfile] = useState<MyProfileType>();
  const isLogin = useRecoilValue(LoginStateAtom);
  const router = useRouter();

  //옵저버 생성
  useEffect(() => {
    const observer = new IntersectionObserver(handleObs, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, [obsRef, commentData]);

  const handleObs = (entries: any) => {
    const target = entries[0];
    if (target.isIntersecting) {
      //옵저버 중복 실행 방지
      preventRef.current = false; //옵저버 중복 실행 방지
      setPage((prev) => prev + 1); //페이지 값 증가
    }
  };

  //무한스크롤 로드
  useEffect(() => {
    loadPost();
  }, [page]);

  //스크롤 시 로드 함수
  const loadPost = useCallback(async () => {
    setLoad(true); //로딩 시작
    const temp: HelpCommentParamsType = {
      helpBoardId: id,
      page: page,
      pageSize: 4,
      orderField: 'id',
      sortOrder: 'ASC',
    };
    if (page <= totalPage) {
      const response = await HELP.helpCommentPagination(temp);
      setCommentData((prev) => [
        ...prev,
        ...response.helpYouCommentWithUserAndUserImagesItemDto,
      ]);
      setTotalPage(response.lastPage);
    }
    setLoad(false);
  }, [page]);

  console.log(myProfile);

  /**도와줄게요 댓글 생성 */
  const handleCreateCommentApi = async () => {
    if (confirm('도움을 줄까요?')) {
      try {
        const response = await HELPCOMMENT.createHelpComment(id);
        const temp: HelpCommentType['helpYouCommentWithUserAndUserImagesItemDto'] =
          {
            id: response.id,
            userId: myProfile?.id as number,
            isAuthor: true,
            createdAt: response.createdAt,
            helpMeBoardId: id,
            user: {
              name: myProfile?.name as string,
              userImage: {
                imageUrl: myProfile?.image as string,
              },
              rank: myProfile?.rank as number,
              activityCategoryId: myProfile?.activityCategoryId as number,
              userIntro: {
                shortIntro: myProfile?.intro.shortIntro as string,
                career: myProfile?.intro.career as string,
              },
            },
          };
        setCommentData((prev) => [...prev, temp]);
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          if (err.response.data.statusCode === 409) {
            alert('이미 등록된 아이디 입니다.');
          } else if (err.response.data.statusCode === 403) {
            alert('본인 게시글은 도와줄 수 없습니다.');
          }
        }
      }
    }
  };

  /**도와줄게요 댓글 삭제 */
  const handleDeleteCommentApi = async (commentId: number) => {
    if (confirm('도움을 철회하시겠습니까?')) {
      const temp = commentData.filter((data) => data.id !== commentId);
      setCommentData([...temp]);
      await HELPCOMMENT.deleteHelpComment(commentId);
    }
  };

  /**내 정보 조회 */
  const getMyProfileApi = async () => {
    const response = await USER.getMyInfo();
    setMyProfile(response);
  };

  /**랭크 불러오기 */
  const getRankInfo = (rank: number) => {
    const temp = rankList.find(
      (data) => data.range[0] < rank && data.range[1] > rank,
    );
    return (
      <>
        {temp && (
          <S.RankBox>
            <img src={temp?.image} alt={`${rank}점 랭크`}></img>
            <div>{temp?.rank}</div>
            <div>{rank}점</div>
          </S.RankBox>
        )}
      </>
    );
  };

  const getCategoryInfo = (
    name: string,
    categoryId: number,
    career: string,
    short: string,
  ) => {
    const category = categoryList.find(
      (data) => data.id === categoryId,
    )?.category;
    return (
      <>
        {category && (
          <S.CategoryBox>
            <div>{name}</div>
            <div>{category.slice(0, 20)}</div>
            <div>{career.slice(0, 20)}</div>
            <div>{short}</div>
          </S.CategoryBox>
        )}
      </>
    );
  };

  const handleRouteUserLink = (path: string, id?: number) => {
    id !== undefined
      ? router.push({
          pathname: `${path}/${id}`,
          query: {
            id: id,
          },
        })
      : router.push({
          pathname: `${path}`,
        });
  };
  console.log(page);

  useEffect(() => {
    isLogin && getMyProfileApi();
  }, []);

  return (
    <div>
      <FlexBox type="flex">
        <S.HelpCommentCountBox>
          도와줄게요({0 || commentData.length}개)
        </S.HelpCommentCountBox>
        <S.HelpYouCommentButton>
          <img
            src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/board/createIcon.svg"
            onClick={handleCreateCommentApi}></img>
        </S.HelpYouCommentButton>
      </FlexBox>
      <S.CommentContainer>
        {commentData.length !== 0 ? (
          commentData.map((data) => {
            return (
              <S.CommentContentBox key={data.id}>
                <img src={data.user.userImage.imageUrl} alt="유저이미지" />
                <div
                  onClick={() => handleRouteUserLink('/userpage', data.userId)}>
                  {getRankInfo(data.user.rank)}
                </div>
                <div
                  onClick={() => handleRouteUserLink('/userpage', data.userId)}>
                  {data.user.userIntro ? (
                    <>
                      {getCategoryInfo(
                        data.user.name,
                        data.user.activityCategoryId,
                        data.user.userIntro.career,
                        data.user.userIntro.shortIntro,
                      )}
                    </>
                  ) : (
                    <div>데이터없음</div>
                  )}
                </div>

                {/* 채팅창 모달 켜질 부분*/}
                {data.isAuthor ? (
                  <S.HelpCommentButtonBox>
                    <img
                      onClick={() => handleRouteUserLink('/chat/home')}
                      src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/ChatIcon-orange.svg"
                      alt="채팅아이콘"
                    />
                    <img
                      src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/board/trashcan.svg"
                      alt="도와주세요 철회 아이콘"
                      onClick={() => handleDeleteCommentApi(data.id)}
                    />
                  </S.HelpCommentButtonBox>
                ) : (
                  <S.HelpCommentButtonBox>
                    <img
                      onClick={() => handleRouteUserLink('/chat/home')}
                      src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/ChatIcon-orange.svg"
                      alt="채팅아이콘"
                    />
                  </S.HelpCommentButtonBox>
                )}
              </S.CommentContentBox>
            );
          })
        ) : (
          <>{!load && <div>댓글이 존재하지 않습니다.</div>}</>
        )}
      </S.CommentContainer>
      {load && (
        <>
          <S.HelpCommentSkeletonBox>
            <SkeletonUI width="48.5%" height="150px" count={4} />
          </S.HelpCommentSkeletonBox>
        </>
      )}
      <div ref={obsRef}>&nbsp;</div>
    </div>
  );
};

export default UnitComment;
