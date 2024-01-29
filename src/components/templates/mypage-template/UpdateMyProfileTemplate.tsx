import { ContainerWrapper } from '@/components/common/globalStyled/styled';
import UpdateMyProfile from '@/components/organisms/my-profile/UpdateMyProfile';
import * as S from './styled';

const UpdateMyProfileTemplate = () => {
  return (
    <ContainerWrapper>
      <S.ContentContainer>
        <UpdateMyProfile />
      </S.ContentContainer>
    </ContainerWrapper>
  );
};

export default UpdateMyProfileTemplate;
