import USER from '@/apis/user';
import { FlexBox, ImageBox } from '@/components/common/globalStyled/styled';
import { MentorType, MentorUnitPropsType, MentorUnitType } from '@/types/user';
import { useEffect, useState } from 'react';
import * as S from './styled';
import { rankList } from '@/components/common/rank/rankList';
import Image from 'next/image';
import MentorBadgeElement from '@/components/molecules/mentor-elements/MentorBadgeElements';
import { categoryList } from '@/components/common/category/categoryList';
import { userInfo } from 'os';

const MentorUnit = ({ id }: MentorUnitPropsType) => {
  const [getUserInfo, setUserInfo] = useState<MentorUnitType>();
  const [getRank, setRank] = useState({
    name: '',
    image: '',
  });
  const [getCategory, setCategory] = useState('');

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

  const findCategory = () => {
    if (getUserInfo) {
      const category = categoryList.find(
        (data) => data.id === getUserInfo?.activityCategoryId,
      )?.category;
      category && setCategory(category);
    }
  };

  useEffect(() => {
    getUserInfoApi();
  }, []);

  useEffect(() => {
    getRankInfo();
    findCategory();
  }, [getUserInfo]);

  return (
    <div>
      <S.ContentContainer>
        <S.HeaderContentsBox>
          <S.CustomImageBox
            width="280px"
            height="370px"
            src={getUserInfo?.image}
            alt="유저이미지"></S.CustomImageBox>
          <FlexBox type="flex">
            <div>
              <FlexBox type="flex">
                <div>{getUserInfo?.name}</div>
                <div>{}</div>
              </FlexBox>
              {getUserInfo?.isMentor ? <div>멘토</div> : <div>멘토아님</div>}
            </div>
          </FlexBox>
        </S.HeaderContentsBox>
        <div>
          <Image
            width={150}
            height={150}
            src={getRank.image}
            alt="랭크이미지"
          />
          <div>{getRank.name}</div>
          <div>{getUserInfo?.rank}점</div>
        </div>
      </S.ContentContainer>
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
      <S.DetailBox>
        <div>세부사항</div>
        <div>{getUserInfo?.intro.detail}</div>
      </S.DetailBox>
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
      <div style={{ textAlign: 'center' }}>칭호</div>
      <S.BadgeContainer>
        {getUserInfo &&
          getUserInfo.badge.map((data) => {
            return (
              <MentorBadgeElement
                badgeId={data.badgeId}
                createdAt={data.createdAt}
              />
            );
          })}
      </S.BadgeContainer>
      <div>이 멘토의 다른 게시글</div>
    </div>
  );
};

export default MentorUnit;
