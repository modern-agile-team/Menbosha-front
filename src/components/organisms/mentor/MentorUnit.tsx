import USER from '@/apis/user';
import { FlexBox, ImageBox } from '@/components/common/globalStyled/styled';
import MainPageHeader from '@/components/common/header/MainPageHeader';
import { MentorType, MentorUnitPropsType, MentorUnitType } from '@/types/user';
import { useEffect, useState } from 'react';

const MentorUnit = ({ id }: MentorUnitPropsType) => {
  const [getUserInfo, setUserInfo] = useState<MentorUnitType>();

  const getUserInfoApi = async () => {
    const response = await USER.getUserInfo(id);
    setUserInfo(response);
  };

  console.log(getUserInfo);

  useEffect(() => {
    getUserInfoApi();
  }, []);

  return (
    <div>
      <FlexBox type="flex">
        <div>
          <ImageBox src={getUserInfo?.image as string} size="cover" />
          <div>{getUserInfo?.name}</div>
        </div>
        <div>
          <div>랭크이미지</div>
          <div>랭크들어올자리</div>
        </div>
      </FlexBox>
      <FlexBox type="flex">
        <div>
          <div>소개</div>
          <div>{getUserInfo?.intro.introduce}</div>
        </div>
        <div>
          <div>주요경력</div>
          <div>{getUserInfo?.intro.career}</div>
        </div>
        <div>
          <div>주요 카테고리</div>
          <div>{getUserInfo?.intro.mainField}</div>
        </div>
      </FlexBox>
      <div>
        <div>설명들어올자리</div>
      </div>
      <FlexBox type="flex">
        <div>
          <div>포트폴리오</div>
          <div>포트폴리오 들어올자리</div>
        </div>
        <div>
          <div>SNS</div>
          <div>SNS들어올 자리</div>
        </div>
      </FlexBox>
    </div>
  );
};

export default MentorUnit;
