import HelpBoardCardList from '../../organisms/help-board/HelpBoardCardList';
import Link from 'next/link';
import Category from '../../common/category/Category';
import HelpPullingBoardList from '../../organisms/help-board/HelpPullingBoardList';
import {
  ContainerWrapper,
  CreateIconLink,
  FlexBox,
  GlobalCategoryContainer,
  HeadTitleContainer,
  TextBox,
} from '../../common/globalStyled/styled';
import MainPageHeader from '../../common/header/MainPageHeader';
import * as S from './styled';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/router';
import { HelpListApiType } from '@/types/help';
import { useCallback, useEffect } from 'react';

const HelpTemplate = ({ lastPage }: Partial<HelpListApiType>) => {
  const router = useRouter();

  // 스크롤 수동으로 조정 설정
  useEffect(() => {
    if (
      'scrollRestoration' in history &&
      history.scrollRestoration !== 'manual'
    ) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  const handleRouteChange = useCallback((e: any) => {
    sessionStorage.setItem(
      `__next_scroll_back`,
      JSON.stringify({
        x: 0,
        y: window.scrollY.toString(),
      }),
    );
  }, []);

  //   router발생시 스크롤 위치 저장
  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChange);
    window.addEventListener('beforeunload', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      window.removeEventListener('beforeunload', handleRouteChange);
    };
  }, [router.events]);

  //스크롤 위치 복원 & session비우기
  useEffect(() => {
    const temp = JSON.parse(
      sessionStorage.getItem(`__next_scroll_back`) as string,
    );
    temp && setTimeout(() => window.scrollTo(0, temp.y), 0);
    // window.sessionStorage.clear();
  }, []);

  return (
    <>
      <MainPageHeader />
      <HeadTitleContainer>
        <div>
          <div>도와주세요</div>
          <div>멘티들의 간절한 요청! 들어주지 않을 수 없겠죠?</div>
        </div>
      </HeadTitleContainer>
      <GlobalCategoryContainer>
        <Category />
        <CreateIconLink
          href={{
            pathname: `/create`,
          }}>
          <img
            src={
              'https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/board/createIcon.svg'
            }
          />
        </CreateIconLink>
      </GlobalCategoryContainer>
      <ContainerWrapper>
        <S.HelpBoardListContainer>
          <S.BoardTitleBox>끌올된 게시판</S.BoardTitleBox>
          <HelpPullingBoardList
            filterCategoryId={Number(router.query.filterId)}
          />
        </S.HelpBoardListContainer>
        <S.HelpBoardListContainer>
          <S.BoardTitleBox>도와주세요 게시판</S.BoardTitleBox>
          <HelpBoardCardList
            filterCategoryId={Number(router.query.filterId)}
            lastPage={lastPage as number}
          />
        </S.HelpBoardListContainer>
      </ContainerWrapper>
    </>
  );
};

export default HelpTemplate;
