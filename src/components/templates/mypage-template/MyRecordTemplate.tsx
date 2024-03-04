import { ContainerWrapper } from '@/components/common/globalStyled/styled';
import * as S from './styled';
import { useRouter } from 'next/router';
import MyRecordContents from '@/components/organisms/my-record/MyRecordContents';
import MainPageFooter from '@/components/common/footer/Footer';

const MyRecordTemplate = () => {
  const router = useRouter();
  const handleBack = () => {
    router.push(`/mypage`);
  };
  return (
    <div>
      <S.MyRecordBack>
        <ContainerWrapper>
          <S.ContentContainer>
            <img
              src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mypage/prevBtnWhite4.svg"
              onClick={handleBack}></img>
            <MyRecordContents />
          </S.ContentContainer>
        </ContainerWrapper>
      </S.MyRecordBack>
      <S.BackgroundContainer src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mypage/background4.svg"></S.BackgroundContainer>
      <MainPageFooter color={true} />
    </div>
  );
};

export default MyRecordTemplate;
