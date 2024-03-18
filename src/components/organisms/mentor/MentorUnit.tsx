import USER from '@/apis/user';
import { MentorUnitPropsType, MentorUnitType } from '@/types/user';
import { useEffect, useState } from 'react';
import * as S from './styled';
import { rankList } from '@/components/common/rank/rankList';
import Image from 'next/image';
import MentorBadgeElement from '@/components/molecules/mentor-elements/MentorBadgeElements';
import { categoryList } from '@/components/common/category/categoryList';
import MENTOR from '@/apis/mentor';
import { MentorBoardCardType, MentorBoardListType } from '@/types/mentor';
import MentorOtherBoardCard from '@/components/molecules/mentor-board-elements/MentorOtherBoardCard';
import SkeletonUI from '@/components/common/skeletonUI/SkeletonUI';
import { handleChatIconClickType } from '@/types/chat';
import CHAT from '@/apis/chat';
import useChatRoomCreate from '@/hooks/useCreateRoom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ChatRoomListAtom } from '@/recoil/atoms/ChatRoomListAtom';
import { useRouter } from 'next/router';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';

const MentorUnit = ({ id }: MentorUnitPropsType) => {
  const [getUserInfo, setGetUserInfo] = useState<MentorUnitType>();
  const [getRank, setRank] = useState({
    name: '',
    image: '',
  });
  const [getCategory, setCategory] = useState('');
  const [getOtherBoards, setOtherBoards] = useState<
    MentorBoardListType['mentorBoardWithUserAndImageDtos']
  >([]);
  const [load, setLoad] = useState(false);
  const { handleCreateChatRoom, isLoading, error } = useChatRoomCreate();
  const [chatRoomList, setChatRoomList] = useRecoilState(ChatRoomListAtom);
  const router = useRouter();
  const isLogin = useRecoilValue(LoginStateAtom);

  const getUserInfoApi = async () => {
    const response = await USER.getUserInfo(id);
    setGetUserInfo(response);
    setLoad(true);
  };

  const getRankInfo = () => {
    if (getUserInfo) {
      const rankImage = rankList.find(
        (data) =>
          data.range[0] < getUserInfo.rank && data.range[1] > getUserInfo.rank,
      );
      rankImage &&
        setRank((prev) => {
          return {
            ...prev,
            name: rankImage.rank,
            image: rankImage.image,
          };
        });
    }
  };

  const getUnitOtherBoards = async () => {
    const response = await MENTOR.MentorOtherBoards(id);
    setOtherBoards(response.mentorBoardWithUserAndImageDtos);
  };

  const findCategory = () => {
    if (getUserInfo) {
      const category = categoryList.find(
        (data) => data.id === getUserInfo?.activityCategoryId,
      )?.category;
      category && setCategory(category);
    }
  };

  const handleChatIconClick = async () => {
    if (isLogin) {
      alert('로그인이 필요합니다.');
    } else if (getUserInfo) {
      const confirmed = window.confirm(
        `${getUserInfo?.name}님과 채팅을 시작하시겠습니까?`,
      );
      if (confirmed) {
        await handleCreateChatRoom(getUserInfo?.id);
        router.push('/chat/home');
        updateChatRoomListApi();
      }
    }
  };

  const updateChatRoomListApi = async () => {
    const page = 1;
    const pageSize = 100;
    const res = await CHAT.getChatRoomList(page, pageSize);
    setChatRoomList(res.chatRooms);
  };

  useEffect(() => {
    getUnitOtherBoards();
    getUserInfoApi();
  }, [id]);

  useEffect(() => {
    getRankInfo();
    findCategory();
  }, [getUserInfo]);

  //refactor molecules component divide
  return (
    <>
      {load ? (
        <div>
          <S.HeaderContentsBox>
            <S.RankBox>
              <Image
                width={126}
                height={126}
                src={getRank.image}
                alt="랭크이미지"
              />
              <div>
                <div>{getRank.name}</div>
                <div>{getUserInfo?.rank}점</div>
              </div>
            </S.RankBox>
            <S.MentorInfoBox>
              <img src={getUserInfo?.userImage.imageUrl} alt="유저이미지"></img>
              <div>
                <div>{getUserInfo?.name}</div>
              </div>
            </S.MentorInfoBox>
            <div>
              <img
                src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/ChatIcon-orange.svg"
                alt="채팅이모지"
                onClick={handleChatIconClick}
                style={{ cursor: 'pointer' }}
              />
              <img
                src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/board/report.svg"
                alt="신고이모지"
                onClick={() => {
                  alert('아직 구현되지 않은 기능입니다.');
                }}
              />
            </div>
          </S.HeaderContentsBox>
          <S.MentorInfoContainer>
            <S.ContentContainer>
              <S.BodyContentsBox>
                <div>소개</div>
                <div>{getUserInfo?.userIntro.shortIntro}</div>
              </S.BodyContentsBox>
              <S.BodyContentsBox>
                <div>주요경력</div>
                <div>{getUserInfo?.userIntro.career}</div>
              </S.BodyContentsBox>
              <S.BodyContentsBox>
                <div>관심카테고리</div>
                <div>{getUserInfo?.userIntro.customCategory}</div>
              </S.BodyContentsBox>
            </S.ContentContainer>
            <S.ContentContainer>
              <S.DetailBox>
                <div>세부사항</div>
                <div>{getUserInfo?.userIntro.detail}</div>
              </S.DetailBox>
            </S.ContentContainer>
            <S.ContentContainer>
              <S.ShareBox>
                <div>포트폴리오</div>
                <div>{getUserInfo?.userIntro.portfolio}</div>
              </S.ShareBox>
              <S.ShareBox>
                <div>SNS</div>
                <div>{getUserInfo?.userIntro.sns}</div>
              </S.ShareBox>
            </S.ContentContainer>
          </S.MentorInfoContainer>
          <S.BadgeContainer>
            <div>칭호</div>
            <div>
              {getUserInfo && getUserInfo.userBadges.length !== 0 ? (
                getUserInfo.userBadges
                  .filter((_, idx) => idx < 3)
                  .map((data) => {
                    return (
                      <MentorBadgeElement
                        key={data.badgeId}
                        badgeId={data.badgeId}
                        createdAt={data.createdAt}
                      />
                    );
                  })
              ) : (
                <div>칭호가 존재하지 않습니다.</div>
              )}
            </div>
          </S.BadgeContainer>
          <S.MentorOtherBoardContainer>
            <div>이 멘토의 다른 게시글</div>
            <div>
              <S.MentorOtherBoardsWrapper>
                {getOtherBoards.length !== 0 ? (
                  getOtherBoards
                    .filter((data, idx) => {
                      if (idx < 3) {
                        return data;
                      }
                    })
                    .map((data) => {
                      const temp: MentorBoardCardType = {
                        id: data.id,
                        head: data.head,
                        body: data.body,
                        category: data.categoryId,
                        createdAt: data.createdAt,
                        updatedAt: data.updatedAt,
                        userId: data.userId,
                        userName: data.user.name,
                        userImage: data.user.userImage.imageUrl,
                        likes: data.likeCount,
                        mentorBoardImage: data.imageUrl,
                      };
                      return (
                        <div key={data.id}>
                          <MentorOtherBoardCard {...temp} />
                        </div>
                      );
                    })
                ) : (
                  <>{load && <div>게시글이 존재하지 않습니다.</div>}</>
                )}
              </S.MentorOtherBoardsWrapper>
            </div>
          </S.MentorOtherBoardContainer>
        </div>
      ) : (
        <div>
          <S.HeaderContentsBox>
            <S.RankBox>
              <Image
                width={150}
                height={150}
                src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/rank/rank1.svg"
                alt="랭크이미지"
              />
              <div>
                <SkeletonUI width="40%" height="15px" count={1} />
              </div>
            </S.RankBox>
            <S.MentorInfoBox>
              <SkeletonUI width="280px" height="380px" count={1} />
              <div>
                <SkeletonUI width="40%" height="30px" count={1} />
              </div>
            </S.MentorInfoBox>
            <div>
              {/** 채팅쪽 추가 이쪽에 하시면 됩니다.*/}
              <img
                src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/ChatIcon-orange.svg"
                alt="채팅이모지"
                onClick={handleChatIconClick}
              />
              <img
                src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/board/report.svg"
                alt="신고이모지"
              />
            </div>
          </S.HeaderContentsBox>
          <S.MentorInfoContainer>
            <S.ContentContainer>
              <S.BodyContentsBox>
                <div>소개</div>
                <SkeletonUI width="50%" height="1px" count={1} />
              </S.BodyContentsBox>
              <S.BodyContentsBox>
                <div>주요경력</div>
                <SkeletonUI width="50%" height="1px" count={1} />
              </S.BodyContentsBox>
              <S.BodyContentsBox>
                <div>관심카테고리</div>
                <SkeletonUI width="50%" height="1px" count={1} />
              </S.BodyContentsBox>
            </S.ContentContainer>
            <S.ContentContainer>
              <S.DetailBox>
                <div>세부사항</div>
                <SkeletonUI width="50%" height="1px" count={1} />
              </S.DetailBox>
            </S.ContentContainer>
            <S.ContentContainer>
              <S.ShareBox>
                <div>포트폴리오</div>
                <SkeletonUI width="50%" height="1px" count={1} />
              </S.ShareBox>
              <S.ShareBox>
                <div>SNS</div>
                <SkeletonUI width="50%" height="1px" count={1} />
              </S.ShareBox>
            </S.ContentContainer>
          </S.MentorInfoContainer>
          <S.BadgeContainer>
            <div>칭호</div>
            <div>
              <SkeletonUI width="30%" height="166px" count={3} />
            </div>
          </S.BadgeContainer>
          <S.MentorOtherBoardContainer>
            <div>이 멘토의 다른 게시글</div>
            <div>
              <S.MentorOtherBoardsWrapper>
                {getOtherBoards.length !== 0 ? (
                  <SkeletonUI width="100%" height="290px" count={3} />
                ) : (
                  <>{load && <div>게시글이 존재하지 않습니다.</div>}</>
                )}
              </S.MentorOtherBoardsWrapper>
            </div>
          </S.MentorOtherBoardContainer>
        </div>
      )}
    </>
  );
};

export default MentorUnit;
