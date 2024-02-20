import {
  ContainerWrapper,
  TextBox,
} from '@/components/common/globalStyled/styled';
import UpdateMyProfile from '@/components/organisms/my-profile/UpdateMyProfile';
import * as S from './styled';

const UpdateMyProfileTemplate = () => {
  return (
    <div>
      <ContainerWrapper>
        <S.ContentContainer>
          <TextBox size={64} color="#ff772b" style={{ fontWeight: 'bold' }}>
            프로필 수정
          </TextBox>
          <UpdateMyProfile />
        </S.ContentContainer>
      </ContainerWrapper>
    </div>
  );
};

export default UpdateMyProfileTemplate;
