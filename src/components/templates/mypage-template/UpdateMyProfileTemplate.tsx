import {
  ContainerWrapper,
  TextBox,
} from '@/components/common/globalStyled/styled';
import UpdateMyProfile from '@/components/organisms/my-profile/UpdateMyProfile';
import * as S from './styled';
import MainPageHeader from '@/components/common/header/MainPageHeader';

const UpdateMyProfileTemplate = () => {
  return (
    <div>
      <MainPageHeader />
      <ContainerWrapper>
        <S.ContentContainer>
          <UpdateMyProfile />
        </S.ContentContainer>
      </ContainerWrapper>
    </div>
  );
};

export default UpdateMyProfileTemplate;
