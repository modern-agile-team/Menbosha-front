import HELPCOMMENT from '@/apis/helpComment';
import { FlexBox, TextBox } from '@/components/common/globalStyled/styled';
import { BoardIdType, HelpCommentType } from '@/types/help';
import { useEffect, useState } from 'react';
import * as S from './styled';
import Image from 'next/image';
import { categoryList } from '@/components/common/category/categoryList';
import Link from 'next/link';
import { useRecoilState, useRecoilValue } from 'recoil';
import { MyProfileType } from '@/types/user';
import USER from '@/apis/user';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';

const UnitComment = ({ id }: BoardIdType) => {
  const [commentDel, setCommentDel] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [commentData, setCommentData] = useState<HelpCommentType[]>([]);
  const [myProfile, setMyProfile] = useState<MyProfileType>();
  const isLogin = useRecoilValue(LoginStateAtom);

  /**도와줄게요 댓글 생성 */
  const handleCreateCommentApi = async () => {
    if (confirm('도움을 줄까요?')) {
      const response = await HELPCOMMENT.createHelpComment(id);
      const temp = {
        id: response.id,
        commentOwner: true,
        content: 'test',
        user: {
          categoryId: myProfile?.activityCategoryId as number,
          imageUrl: myProfile?.image as string,
          name: myProfile?.name as string,
          userId: myProfile?.id as number,
          rank: myProfile?.rank as number,
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
    const response = await HELPCOMMENT.getHelpComment(id);
    setCommentData(response);
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
                <img src={data.user.imageUrl} alt="유저이미지" />
                <div>
                  <div>랭크</div>
                  <div>{data.user.rank}</div>
                </div>
                <div>
                  <TextBox size={20}>{data.user.name}</TextBox>
                  <TextBox size={12}>
                    {
                      categoryList.find(
                        (list) => list.id === data.user.categoryId,
                      )?.category
                    }
                  </TextBox>
                </div>
                <div>
                  {/* 채팅창 모달 켜질 부분*/}
                  {data.commentOwner ? (
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
