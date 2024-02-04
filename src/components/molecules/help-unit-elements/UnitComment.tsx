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
import Image from 'next/image';
import { categoryList } from '@/components/common/category/categoryList';
import Link from 'next/link';
import { useRecoilState, useRecoilValue } from 'recoil';
import { MyProfileType } from '@/types/user';
import USER from '@/apis/user';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';
import HELP from '@/apis/help';
import { useRouter } from 'next/router';

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
      setTotalPage((prev) => prev + 1); //페이지 값 증가
    }
  };

  //무한스크롤 로드
  useEffect(() => {
    loadPost();
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
            activityCategory: myProfile?.activityCategoryId as number,
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
        <div style={{ marginLeft: 'auto' }} onClick={handleCreateCommentApi}>
          생성
        </div>
      </FlexBox>
      <S.CommentContainer>
        {commentData.map((data) => {
          return (
            <S.CommentBorder>
              <S.CommentContentBox>
                <img src={data.user.userImage.imageUrl} alt="유저이미지" />
                <div>
                  <div>랭크</div>
                  <div>{data.user.rank}</div>
                </div>
                <div>
                  <TextBox size={20}>{data.user.name}</TextBox>
                  <TextBox size={12}>
                    {
                      categoryList.find(
                        (list) => list.id === data.user.activityCategory,
                      )?.category
                    }
                  </TextBox>
                </div>
                <div>
                  {/* 채팅창 모달 켜질 부분*/}
                  {data.isAuthor ? (
                    <div>
                      <TextBox size={12}>채팅창</TextBox>
                      <TextBox
                        size={12}
                        onClick={() => handleDeleteCommentApi(data.id)}>
                        철회
                      </TextBox>
                    </div>
                  ) : (
                    <TextBox size={12}>채팅창</TextBox>
                  )}
                </div>
              </S.CommentContentBox>
            </S.CommentBorder>
          );
        })}
      </S.CommentContainer>
    </div>
  );
};

export default UnitComment;
