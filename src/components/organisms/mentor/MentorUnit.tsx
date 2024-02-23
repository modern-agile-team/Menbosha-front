import USER from '@/apis/user';
import {
  FlexBox,
  ImageBox,
  TextBox,
} from '@/components/common/globalStyled/styled';
import { MentorType, MentorUnitPropsType, MentorUnitType } from '@/types/user';
import { useEffect, useState } from 'react';
import * as S from './styled';
import { rankList } from '@/components/common/rank/rankList';
import Image from 'next/image';
import MentorBadgeElement from '@/components/molecules/mentor-elements/MentorBadgeElements';
import { categoryList } from '@/components/common/category/categoryList';
import MENTOR from '@/apis/mentor';
import { MentorBoardCardType, MentorBoardListType } from '@/types/mentor';
import MentorOtherBoardCard from '@/components/molecules/mentor-board-elements/MentorOtherBoardCard';

const MentorUnit = ({ id }: MentorUnitPropsType) => {
  const [getUserInfo, setUserInfo] = useState<MentorUnitType>();
  const [getRank, setRank] = useState({
    name: '',
    image: '',
  });
  const [getCategory, setCategory] = useState('');
  const [getOtherBoards, setOtherBoards] = useState<
    MentorBoardListType['mentorBoardWithUserAndImageDtos']
  >([]);

  const getUserInfoApi = async () => {
    const response = await USER.getUserInfo(id);
    setUserInfo(response);
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

  useEffect(() => {
    getUnitOtherBoards();
    getUserInfoApi();
  }, []);

  useEffect(() => {
    getRankInfo();
    findCategory();
  }, [getUserInfo]);

  return (
    <div>
      <S.HeaderContentsBox>
        <S.RankBox>
          <Image
            width={150}
            height={150}
            src={getRank.image}
            alt="랭크이미지"
          />
          <div>
            <div>{getRank.name}</div>
            <div>{getUserInfo?.rank}점</div>
          </div>
        </S.RankBox>
        <S.MentorInfoBox>
          <img src={getUserInfo?.image} alt="유저이미지"></img>
          <div>
            <div>{getUserInfo?.name}</div>
          </div>
        </S.MentorInfoBox>
        <div>
          {/** 채팅쪽 추가 이쪽에 하시면 됩니다.*/}
          <img
            src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/ChatIcon-orange.svg"
            alt="채팅이모지"
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
            <div>{getUserInfo?.intro.shortIntro}</div>
          </S.BodyContentsBox>
          <S.BodyContentsBox>
            <div>주요경력</div>
            <div>{getUserInfo?.intro.career}</div>
          </S.BodyContentsBox>
          <S.BodyContentsBox>
            <div>관심카테고리</div>
            <div>{getUserInfo?.intro.customCategory}</div>
          </S.BodyContentsBox>
        </S.ContentContainer>
        <S.ContentContainer>
          <S.DetailBox>
            <div>세부사항</div>
            <div>{getUserInfo?.intro.detail}</div>
          </S.DetailBox>
        </S.ContentContainer>
        <S.ContentContainer>
          <S.ShareBox>
            <div>포트폴리오</div>
            <div>{getUserInfo?.intro.portfolio}</div>
          </S.ShareBox>
          <S.ShareBox>
            <div>SNS</div>
            <div>{getUserInfo?.intro.sns}</div>
          </S.ShareBox>
        </S.ContentContainer>
      </S.MentorInfoContainer>
      <S.BadgeContainer>
        <div>칭호</div>
        <div>
          {getUserInfo &&
            getUserInfo.badge
              .filter((_, idx) => idx < 3)
              .map((data) => {
                return (
                  <MentorBadgeElement
                    key={data.badgeId}
                    badgeId={data.badgeId}
                    createdAt={data.createdAt}
                  />
                );
              })}
        </div>
      </S.BadgeContainer>
      <S.MentorOtherBoardContainer>
        <div>이 멘토의 다른 게시글</div>
        <div>
          <S.MentorOtherBoardsWrapper>
            {getOtherBoards &&
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
                })}
          </S.MentorOtherBoardsWrapper>
        </div>
      </S.MentorOtherBoardContainer>
    </div>
  );
};

export default MentorUnit;
