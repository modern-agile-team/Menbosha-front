import MainPageHeader from '@/components/common/header/MainPageHeader';
import * as S from './styled';
import Category from '../../common/category/Category';
import MentorBoardList from '@/components/organisms/mentor-board/MentorBoardList';
import {
  ContainerWrapper,
  CreateIconLink,
  GlobalCategoryContainer,
  HeadTitleContainer,
} from '@/components/common/globalStyled/styled';
import RandomMentorBoard from '@/components/organisms/mentor-board/RandomMentorBoard';
import PopularMentorBoardList from '@/components/organisms/mentor-board/PopularMentorBoardList';
import { useRecoilValue } from 'recoil';
import { MentorBoardListType } from '@/types/mentor';
import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

const MentorBoardTemplate = ({ lastPage }: Partial<MentorBoardListType>) => {
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
          <div>멘토 - 게시글</div>
          <div>멘토들의 직접 작성한 좋은 게시글을 찾아보세요.</div>
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
        <S.MentorListContainer>
          <S.ListTitleBox>멘토가 들려주는 꿀통 대방출~!~!</S.ListTitleBox>
          <RandomMentorBoard filterCategoryId={Number(router.query.filterId)} />
        </S.MentorListContainer>
        <S.MentorListContainer>
          <S.ListTitleBox>최근 인기 멘토글</S.ListTitleBox>
          <PopularMentorBoardList
            filterCategoryId={Number(router.query.filterId)}
          />
        </S.MentorListContainer>
        <S.MentorListContainer>
          <S.ListTitleBox>전체 멘토 게시글</S.ListTitleBox>
          <MentorBoardList
            filterCategoryId={Number(router.query.filterId)}
            lastPage={lastPage as number}
          />
        </S.MentorListContainer>
      </ContainerWrapper>
    </>
  );
};

export default MentorBoardTemplate;
