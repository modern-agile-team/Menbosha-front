import MainPageHeader from '@/components/common/header/MainPageHeader';
import { ImageBox, LinkBox } from '../../common/globalStyled/styled';
import * as S from './styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MainPageFooter from '@/components/common/footer/Footer';
import { useCallback, useEffect, useState } from 'react';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';
import { useRecoilValue } from 'recoil';

const MyPageTemplate = () => {
  const router = useRouter();
  const [routeFrame, setRouteFrame] = useState({
    profile: false,
    rank: false,
    review: false,
    record: false,
  });
  const loginState = useRecoilValue(LoginStateAtom);

  const handleRouter = (link: string, location: string) => {
    setRouteFrame({ ...routeFrame, [location]: true });
    setTimeout(() => {
      router.push({
        pathname: `${link}`,
      });
    }, 1000);
  };

  useEffect(() => {
    if (!loginState) {
      alert('로그인이 필요한 접근입니다.');
      router.push('/');
    }
  }, []);

  return (
    <div>
      <MainPageHeader />
      <S.UserpageWrapper>
        <S.Wave />
        <S.MyPageTitleBox>
          <span>프로필</span>
          <span>빵을 눌러 확인해보세요.</span>
        </S.MyPageTitleBox>
        <S.ElementSection>
          <S.Bubble size="2vw" style={{ margin: '2% 0px 0px 6%' }} />
          <S.Bubble size="4vw" style={{ margin: '5% 0px 0px 7%' }} />
          <S.ProfileLinkImg
            route={routeFrame.profile}
            onClick={() => handleRouter(`/mypage/info`, 'profile')}>
            <div>프로필</div>
          </S.ProfileLinkImg>
        </S.ElementSection>
        <S.ElementSection>
          <S.Bubble size="1vw" style={{ margin: '9% 0px 0px 9%' }} />
          <S.Bubble size="2.5vw" style={{ margin: '5% 0px 0px 15%' }} />
          <S.Bubble size="2vw" style={{ margin: '17% 0px 0px 45%' }} />
          <S.TempLinkImg
            route={routeFrame.rank}
            onClick={() => handleRouter(`/mypage/badge`, 'rank')}>
            <div>랭크/칭호</div>
          </S.TempLinkImg>
        </S.ElementSection>
        <S.ElementSection>
          <S.Bubble size="2vw" style={{ margin: '10% 0px 0px 49%' }} />
          <S.Bubble size="1.5vw" style={{ margin: '12% 0px 0px 45%' }} />
          <S.Bubble size="4vw" style={{ margin: '15% 0px 0px 46%' }} />
          <S.ReviewLinkImg
            route={routeFrame.review}
            onClick={() => handleRouter(`/mypage/review`, 'review')}>
            <div>후기</div>
          </S.ReviewLinkImg>
        </S.ElementSection>
        <S.ElementSection>
          <S.RecordLinkImg
            route={routeFrame.record}
            onClick={() => handleRouter(`/mypage/record`, 'record')}>
            <div>기록</div>
          </S.RecordLinkImg>
        </S.ElementSection>
      </S.UserpageWrapper>
      <MainPageFooter color={true} />
    </div>
  );
};

export default MyPageTemplate;
