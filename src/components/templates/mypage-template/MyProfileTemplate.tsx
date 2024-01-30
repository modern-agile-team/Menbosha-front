import {
  ButtonBox,
  ContainerWrapper,
} from '@/components/common/globalStyled/styled';
import * as S from './styled';
import MyProfileContents from '@/components/organisms/my-profile/MyProfileConetents';
import { useRouter } from 'next/router';

const MyProfileTemplate = () => {
  const router = useRouter();
  const handleBack = () => {
    router.push(`/mypage/info`);
  };
  return (
    <ContainerWrapper>
      <S.ContentContainer>
        <ButtonBox onClick={handleBack}>이전</ButtonBox>
        <MyProfileContents />
      </S.ContentContainer>
    </ContainerWrapper>
  );
};

export default MyProfileTemplate;
