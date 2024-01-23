import { ButtonBox, TextBox } from '@/components/common/globalStyled/styled';
import MainPageHeader from '@/components/common/header/MainPageHeader';
import MentorUnit from '@/components/organisms/mentor/MentorUnit';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const MentorUnitTemplate = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <div>
      <MainPageHeader />
      <div
        style={{ display: 'flex', justifyContent: 'center', height: '70vh' }}>
        <div>
          <TextBox color="#FF772B" size={64}>
            멘토
            <br />
            프로필
          </TextBox>
          <ButtonBox onClick={handleBack}>이전버튼</ButtonBox>
        </div>
        {router.isReady && <MentorUnit id={Number(router.query.id)} />}
      </div>
    </div>
  );
};

export default MentorUnitTemplate;
