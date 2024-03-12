import USER from '@/apis/user';
import { FlexBox, ImageBox } from '@/components/common/globalStyled/styled';
import { useEffect, useState } from 'react';
import * as S from './styled';
import { MyProfileType, UserProfileType } from '@/types/user';
import Link from 'next/link';

const MyProfileContents = () => {
  const [getInfo, setInfo] = useState<MyProfileType>();
  const [showEmail, setShowEmail] = useState(false);

  const getMyInfoApi = async () => {
    const response = await USER.getMyInfo();
    setInfo(response);
  };

  useEffect(() => {
    getMyInfoApi();
  }, []);
  return (
    <S.MyInfoGridContainer>
      <div>프로필</div>
      <img src={getInfo?.image}></img>
      <Link
        href={{
          pathname: `/mypage/info/update`,
        }}>
        <img
          src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mypage/profileSettingBtn.svg"
          alt="프로필설정"
        />
      </Link>
      <div></div>
      <div>
        <FlexBox type="flex">
          <div>{getInfo?.name}</div>
          <S.iIcon
            onMouseOver={() => setShowEmail(true)}
            onMouseOut={() => setShowEmail(false)}>
            ⓘ
          </S.iIcon>
          {showEmail && (
            <S.EmailBox
              onMouseOver={() => setShowEmail(true)}
              onMouseOut={() => setShowEmail(false)}>
              이메일 : {getInfo?.email}
            </S.EmailBox>
          )}
        </FlexBox>
        {getInfo?.isMentor ? <div>멘토</div> : <div>멘티</div>}
      </div>
      <div>
        <div>소개</div>
        <div>{getInfo?.intro.shortIntro}</div>
      </div>
      <div>
        <div>주요경력</div>
        <div>{getInfo?.intro.career}</div>
      </div>
      <div>
        <div>관심카테고리</div>
        <div>{getInfo?.intro.customCategory}</div>
      </div>
      <div>
        <div>세부사항</div>
        <div>{getInfo?.intro.detail}</div>
      </div>
      <div>
        <div>포트폴리오</div>
        <div>{getInfo?.intro.portfolio}</div>
      </div>
      <div>
        <div>SNS</div>
        <div>{getInfo?.intro.sns}</div>
      </div>
    </S.MyInfoGridContainer>
  );
};

export default MyProfileContents;
