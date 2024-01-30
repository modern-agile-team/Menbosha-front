import USER from '@/apis/user';
import { FlexBox, ImageBox } from '@/components/common/globalStyled/styled';
import { useEffect, useState } from 'react';
import * as S from './styled';
import { UserProfileType } from '@/types/user';
import Link from 'next/link';

const MyProfileContents = () => {
  const [getInfo, setInfo] = useState<UserProfileType>();

  const getMyInfoApi = async () => {
    const response = await USER.getMyInfo();
    setInfo(response);
  };

  useEffect(() => {
    getMyInfoApi();
  }, []);
  return (
    <div>
      <S.ContentContainer>
        <S.HeaderContentsBox>개인프로필</S.HeaderContentsBox>
        <S.HeaderContentsBox>
          <ImageBox
            src={getInfo?.image}
            width="280px"
            height="350px"
            size="contain"></ImageBox>
          <FlexBox type="flex">
            <div>
              <div>{getInfo?.name}</div>
              {getInfo?.isMentor ? <div>멘토</div> : <div>멘토아님</div>}
            </div>
            <div>{getInfo?.rank}</div>
          </FlexBox>
        </S.HeaderContentsBox>
        <Link
          href={{
            pathname: `/mypage/info/update`,
          }}>
          설정
        </Link>
      </S.ContentContainer>
      <S.ContentContainer>
        <S.BodyContentsBox>
          <div>소개</div>
          <div>{getInfo?.intro.shortIntro}</div>
        </S.BodyContentsBox>
        <S.BodyContentsBox>
          <div>주요경력</div>
          <div>{getInfo?.intro.career}</div>
        </S.BodyContentsBox>
        <S.BodyContentsBox>
          <div>관심카테고리</div>
          <div>{getInfo?.intro.customCategory}</div>
        </S.BodyContentsBox>
      </S.ContentContainer>
      <S.DetailBox>
        <div>세부사항</div>
        <div>{getInfo?.intro.detail}</div>
      </S.DetailBox>
      <S.ContentContainer>
        <S.ShareBox>
          <div>포트폴리오</div>
          <div>{getInfo?.intro.portfolio}</div>
        </S.ShareBox>
        <S.ShareBox>
          <div>SNS</div>
          <div>{getInfo?.intro.sns}</div>
        </S.ShareBox>
      </S.ContentContainer>
    </div>
  );
};

export default MyProfileContents;
