import { ContainerWrapper } from '@/components/common/globalStyled/styled';
import MainPageHeader from '@/components/common/header/MainPageHeader';
import MentorUnit from '@/components/organisms/mentor/MentorUnit';
import { useRouter } from 'next/router';
import * as S from './styled';
import MentorReview from '@/components/organisms/mentor/MentorReview';

const MentorUnitTemplate = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <ContainerWrapper>
      <MainPageHeader />
      <S.ContentContainer>
        <S.MentorPageTitleContainer>
          <div>멘토 프로필</div>
          <img
            src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/prevBtn.svg"
            alt="이전버튼"
            onClick={handleBack}
          />
        </S.MentorPageTitleContainer>
        <div>
          {router.isReady && <MentorUnit id={Number(router.query.id)} />}
        </div>
      </S.ContentContainer>
      <S.MentorReviewWrapper>
        <div></div>
        <S.MentorReviewContainer>
          <div>후기</div>
          {router.isReady && <MentorReview id={Number(router.query.id)} />}
        </S.MentorReviewContainer>
      </S.MentorReviewWrapper>
    </ContainerWrapper>
  );
};

export default MentorUnitTemplate;
