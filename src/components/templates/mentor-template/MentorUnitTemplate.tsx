import {
  ButtonBox,
  ContainerWrapper,
  TextBox,
} from '@/components/common/globalStyled/styled';
import MainPageHeader from '@/components/common/header/MainPageHeader';
import MentorUnit from '@/components/organisms/mentor/MentorUnit';
import { useRouter } from 'next/router';
import * as S from './styled';
import Image from 'next/image';
import MentorReview from '@/components/organisms/mentor/MentorReveiw';

const MentorUnitTemplate = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <ContainerWrapper>
      <MainPageHeader />
      <S.ContentContainer>
        <div>
          <div>멘토 프로필</div>
          <ButtonBox onClick={handleBack}>이전</ButtonBox>
        </div>
        <div>
          {router.isReady && <MentorUnit id={Number(router.query.id)} />}
        </div>
      </S.ContentContainer>
      {router.isReady && <MentorReview id={Number(router.query.id)} />}
    </ContainerWrapper>
  );
};

export default MentorUnitTemplate;
