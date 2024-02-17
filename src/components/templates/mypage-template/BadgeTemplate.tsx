import { ContainerWrapper } from '@/components/common/globalStyled/styled';
import * as S from './styled';
import { useRouter } from 'next/router';
import MyBadgeContents from '@/components/organisms/my-badge/MyBadgeContents';

const BadgeTemplate = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/mypage');
  };

  return (
    <div>
      <S.BadgeBack>
        <ContainerWrapper>
          <S.ContentContainer>
            <img
              src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mypage/prevBtnWhite2.svg"
              onClick={handleBack}></img>
            <MyBadgeContents />
          </S.ContentContainer>
        </ContainerWrapper>
      </S.BadgeBack>
      <S.BackgroundContainer src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mypage/background2.svg" />
    </div>
  );
};

export default BadgeTemplate;
