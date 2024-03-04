import {
  ButtonBox,
  ContainerWrapper,
} from '@/components/common/globalStyled/styled';
import * as S from './styled';
import MyProfileContents from '@/components/organisms/my-profile/MyProfileConetents';
import { useRouter } from 'next/router';
import MainPageFooter from '@/components/common/footer/Footer';

const MyProfileTemplate = () => {
  const router = useRouter();
  const handleBack = () => {
    router.push(`/mypage`);
  };
  return (
    <div>
      <S.MyProfileBack>
        <ContainerWrapper>
          <S.ContentContainer>
            <img
              src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mypage/prevBtnWhite.svg"
              onClick={handleBack}></img>
            <MyProfileContents />
          </S.ContentContainer>
        </ContainerWrapper>
      </S.MyProfileBack>
      <S.BackgroundContainer src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mypage/background1.svg"></S.BackgroundContainer>
      <MainPageFooter color={true} />
    </div>
  );
};

export default MyProfileTemplate;
