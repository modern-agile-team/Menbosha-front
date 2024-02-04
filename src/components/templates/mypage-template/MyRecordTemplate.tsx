import { ContainerWrapper } from '@/components/common/globalStyled/styled';
import * as S from './styled';

const MyRecordTemplate = () => {
  return (
    <ContainerWrapper>
      <div>기록</div>
      <S.MyRecordBack>
        <div></div>
        <div></div>
      </S.MyRecordBack>
    </ContainerWrapper>
  );
};

export default MyRecordTemplate;
