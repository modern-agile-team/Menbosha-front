import MainPageHeader from '@/components/common/header/MainPageHeader';
import { ImageBox, LinkBox } from '../../common/globalStyled/styled';
import * as S from './styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MyPageTemplate = () => {
  const router = useRouter();

  const handleRouter = (link: string) => {
    router.push({
      pathname: `${link}`,
    });
  };

  return (
    <div>
      <MainPageHeader />
      <S.UserpageWrapper>
        <S.Wave />
        <S.ElementSection>
          <S.Bubble size="2vw" style={{ margin: '2% 0px 0px 6%' }} />
          <S.Bubble size="4vw" style={{ margin: '5% 0px 0px 7%' }} />
          <S.ProfileLinkImg onClick={() => handleRouter(`/mypage/info`)}>
            <S.ProfileLinkText>프로필</S.ProfileLinkText>
          </S.ProfileLinkImg>
        </S.ElementSection>
        <S.ElementSection>
          <S.Bubble size="1vw" style={{ margin: '9% 0px 0px 9%' }} />
          <S.Bubble size="2.5vw" style={{ margin: '5% 0px 0px 15%' }} />
          <S.Bubble size="2vw" style={{ margin: '17% 0px 0px 45%' }} />
          <S.TempLinkImg onClick={() => handleRouter(`/mypage/badge`)}>
            <S.TempLinkText>온도/칭호</S.TempLinkText>
          </S.TempLinkImg>
        </S.ElementSection>
        <S.ElementSection>
          <S.Bubble size="2vw" style={{ margin: '10% 0px 0px 49%' }} />
          <S.Bubble size="1.5vw" style={{ margin: '12% 0px 0px 45%' }} />
          <S.Bubble size="4vw" style={{ margin: '15% 0px 0px 46%' }} />
          <S.ReviewLinkImg onClick={() => handleRouter(`/mypage/review`)}>
            <S.ReviewLinkText>후기</S.ReviewLinkText>
          </S.ReviewLinkImg>
        </S.ElementSection>
        <S.ElementSection>
          <S.ChatLinkImg onClick={() => handleRouter(`/chat`)}>
            <S.ChatLinkText>채팅</S.ChatLinkText>
          </S.ChatLinkImg>
        </S.ElementSection>
      </S.UserpageWrapper>
    </div>
  );
};

export default MyPageTemplate;
