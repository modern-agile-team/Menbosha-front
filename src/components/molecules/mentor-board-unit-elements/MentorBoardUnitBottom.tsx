import USER from '@/apis/user';
import { FlexBox, ImageBox } from '@/components/common/globalStyled/styled';
import {
  MentorBoardCardType,
  MentorBoardListType,
  MentorBoardUnitPropsType,
} from '@/types/mentor';
import { MentorUnitType } from '@/types/user';
import { useEffect, useState } from 'react';
import * as S from './style';
import { rankList } from '@/components/common/rank/rankList';
import MENTOR from '@/apis/mentor';
import MentorBoardCard from '../mentor-board-elements/MentorBoardCard';
import MentorOtherBoardCard from '../mentor-board-elements/MentorOtherBoardCard';
import { useRouter } from 'next/router';

const MentorBoardUnitBottom = (props: MentorBoardUnitPropsType) => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<MentorUnitType>();
  const [rankInfo, setRankInfo] = useState({
    image: '',
    name: '',
  });
  const [otherBoards, setOtherBoards] = useState<
    MentorBoardListType['mentorBoardForHotPostsItemDto']
  >([]);

  const getRankList = () => {
    const temp =
      userInfo &&
      rankList.find((data) => {
        data.range[0] < userInfo?.rank && data.range[1] > userInfo?.rank;
      });
    temp &&
      setRankInfo((prev) => {
        return {
          ...prev,
          image: temp?.image,
          name: temp?.rank,
        };
      });
  };

  /**유저 정보 가져오는 api */
  const getUserInfoApi = async () => {
    const response = await USER.getUserInfo(props.id);
    setUserInfo(response);
  };

  /**해당 유저의 게시글 가져오는 api */
  const getUserOtherBoardsApi = async () => {
    const response = await MENTOR.MentorOtherBoards(props.id);
    setOtherBoards(response.mentorBoardForHotPostsItemDto);
  };

  /**유저 정보로 route */
  const handleRouteUserInfo = () => {
    router.push(
      {
        pathname: `/userpage/${props.id}`,
        query: {
          id: props.id,
        },
      },
      `/userpage/${props.id}`,
    );
  };

  useEffect(() => {
    getUserInfoApi();
    getUserOtherBoardsApi();
    if (userInfo) {
      getRankList();
    }
  }, []);

  return (
    <FlexBox type="flex">
      {userInfo && (
        <S.MentorInfoCardContainer onClick={handleRouteUserInfo}>
          <img src={userInfo?.image as string} alt="유저이미지" />
          <div>
            <S.MentorRankInfo>
              <img src={rankInfo.image} alt="랭크이미지"></img>
              <div>{rankInfo.name}</div>
              <div>{userInfo.rank}점</div>
            </S.MentorRankInfo>
            <S.MentorInfoBox>
              <div>{userInfo.name}</div>
              <div>{userInfo.intro.customCategory}</div>
              <div>{userInfo.intro.career}</div>
              <div>{userInfo.intro.shortIntro}</div>
            </S.MentorInfoBox>
          </div>
        </S.MentorInfoCardContainer>
      )}
      <S.MentorOtherBoardsContainer>
        <div>이 멘토의 다른 게시글</div>
        <div>
          {otherBoards &&
            otherBoards
              .filter((data, idx) => idx < 2)
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
                  <S.MentorBoardCardWrapper>
                    <MentorOtherBoardCard {...temp} />
                  </S.MentorBoardCardWrapper>
                );
              })}
        </div>
      </S.MentorOtherBoardsContainer>
    </FlexBox>
  );
};

export default MentorBoardUnitBottom;
