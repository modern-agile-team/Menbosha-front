import { ContainerWrapper } from '@/components/common/globalStyled/styled';
import * as S from './styled';
import { useRouter } from 'next/router';
import MyReviewContents from '@/components/organisms/my-review/MyReviewContents';

const MyReviewTemplate = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/mypage');
  };
  return (
    <div>
      <S.MyReviewBack>
        <ContainerWrapper>
          <S.ContentContainer>
            <img
              src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mypage/prevBtnWhite3.svg"
              onClick={handleBack}></img>
            <MyReviewContents />
          </S.ContentContainer>
        </ContainerWrapper>
      </S.MyReviewBack>
      <S.BackgroundContainer src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mypage/background3.svg" />
    </div>
  );
};

export default MyReviewTemplate;
