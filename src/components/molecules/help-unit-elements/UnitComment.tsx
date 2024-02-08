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
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { MyProfileType } from '@/types/user';
import USER from '@/apis/user';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';
import HELP from '@/apis/help';
import { useRouter } from 'next/router';
import { rankList } from '@/components/common/rank/rankList';

const UnitComment = ({ id }: BoardIdType) => {
  //페이지네이션 state
  const [totalPage, setTotalPage] = useState(1); //페이지 수
  const [page, setPage] = useState(1);
  const obsRef = useRef<HTMLDivElement>(null); //옵저버 state
  const [load, setLoad] = useState(false);
  const preventRef = useRef(true); //옵저버 중복 방지
  const router = useRouter();

  const [commentDel, setCommentDel] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [commentData, setCommentData] = useState<
    HelpCommentListApiType['helpYouCommentWithUserAndUserImagesItemDto']
  >([]);
  const [myProfile, setMyProfile] = useState<MyProfileType>();
  const isLogin = useRecoilValue(LoginStateAtom);

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
    if (page !== 1) {
      loadPost();
    }
  }, [page]);

  //스크롤 시 로드 함수
  const loadPost = useCallback(async () => {
    const temp: HelpCommentParamsType = {
      helpBoardId: id,
      page: 1,
      pageSize: 5,
      orderField: 'id',
      sortOrder: 'ASC',
    };
    setLoad(true); //로딩 시작
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

  /**도와줄게요 댓글 생성 */
  const handleCreateCommentApi = async () => {
    if (confirm('도움을 줄까요?')) {
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
              shortIntro: response.content,
              career: '경력',
            },
          },
        };
      if (response === 409) {
        alert('이미 등록된 아이디 입니다.');
      } else {
        setCommentData((prev) => [...prev, temp]);
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

  /**도와줄게요 댓글 호출 */
  const getCommentApi = async () => {
    const temp: HelpCommentParamsType = {
      helpBoardId: id,
      page: 1,
      pageSize: 5,
      orderField: 'id',
      sortOrder: 'DESC',
    };
    const response = await HELP.helpCommentPagination(temp);
    setCommentData((prev) => [
      ...prev,
      ...response.helpYouCommentWithUserAndUserImagesItemDto,
    ]);
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
            <img src={temp?.image}></img>
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
            <div>{category}</div>
            <div>{career}</div>
            <div>{short}</div>
          </S.CategoryBox>
        )}
      </>
    );
  };

  useEffect(() => {
    getCommentApi();
    isLogin && getMyProfileApi();
  }, []);

  return (
    <div>
      <FlexBox type="flex">
        <TextBox color="#FF772B">
          도와줄게요({commentCount ? commentCount : commentData.length}개)
        </TextBox>
        <img
          src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/board/createIcon.svg"
          style={{ marginLeft: 'auto' }}
          onClick={handleCreateCommentApi}></img>
      </FlexBox>
      <S.CommentContainer>
        {commentData.map((data) => {
          return (
            <S.CommentBorder>
              <S.CommentContentBox>
                <img src={data.user.userImage.imageUrl} alt="유저이미지" />
                <>{getRankInfo(data.user.rank)}</>
                <>
                  {getCategoryInfo(
                    data.user.name,
                    data.user.activityCategoryId,
                    data.user.userIntro.career,
                    data.user.userIntro.shortIntro,
                  )}
                </>

                {/* 채팅창 모달 켜질 부분*/}
                {data.isAuthor ? (
                  <S.HelpCommentButtonBox>
                    <img src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/ChatIcon-orange.svg"></img>
                    <img
                      src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/board/trashcan.svg"
                      onClick={() => handleDeleteCommentApi(data.id)}></img>
                  </S.HelpCommentButtonBox>
                ) : (
                  <S.HelpCommentButtonBox>
                    <img src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/ChatIcon-orange.svg"></img>
                  </S.HelpCommentButtonBox>
                )}
              </S.CommentContentBox>
            </S.CommentBorder>
          );
        })}
        <div>
          {load && <div>Loading...</div>}
          <div ref={obsRef}></div>
        </div>
      </S.CommentContainer>
    </div>
  );
};

export default UnitComment;
