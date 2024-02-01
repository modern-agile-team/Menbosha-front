import { ContainerWrapper } from '@/components/common/globalStyled/styled';
import * as S from './styled';

const MyReviewTemplate = () => {
  return (
    <ContainerWrapper>
      <div>리뷰</div>
      <S.MyReviewBack>
        <div></div>
        <div></div>
      </S.MyReviewBack>
    </ContainerWrapper>
  );
};

export default MyReviewTemplate;
