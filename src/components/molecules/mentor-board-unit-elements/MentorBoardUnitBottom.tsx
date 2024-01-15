import USER from '@/apis/user';
import { FlexBox, ImageBox } from '@/components/common/globalStyled/styled';
import { MentorBoardUnitPropsType } from '@/types/mentor';
import { MentorType } from '@/types/user';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const MentorBoardUnitBottom = (props: MentorBoardUnitPropsType) => {
  const [userInfo, setUserInfo] = useState<any>();

  const getUserInfoApi = async () => {
    const response = await USER.getUserInfo(props.id);
    setUserInfo(response);
  };

  console.log(userInfo);

  useEffect(() => {
    getUserInfoApi();
  }, []);
  return (
    <FlexBox type="flex">
      <div>
        <Image
          src={userInfo?.image as string}
          alt="33"
          width={232}
          height={232}
        />
        <div>
          <div>랭크</div>
          <div>이름</div>
        </div>
      </div>
    </FlexBox>
  );
};

export default MentorBoardUnitBottom;
