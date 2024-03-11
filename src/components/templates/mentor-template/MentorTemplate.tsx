import MainPageHeader from '@/components/common/header/MainPageHeader';
import MentorList from '../../organisms/mentor/MentorList';
import * as S from './styled';
import Category from '../../common/category/Category';
import {
  ContainerWrapper,
  GlobalCategoryContainer,
  CreateIconLink,
  HeadTitleContainer,
} from '@/components/common/globalStyled/styled';
import PopularMentorList from '@/components/organisms/mentor/PopularMentor';
import MentorRanking from '@/components/organisms/mentor/RankMentor';
import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { MentorListType } from '@/types/mentor';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';
import { useRecoilValue } from 'recoil';

const MentorTemplate = ({ lastPage }: Partial<MentorListType>) => {
  const router = useRouter();
  const loginState = useRecoilValue(LoginStateAtom);

  const handleCreateRoute = () => {
    if (loginState) {
      router.push({
        pathname: `/create`,
      });
    } else {
      alert('게시글을 작성하려면 로그인이 필요합니다.');
    }
  };

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
  }, []);

  return (
    <>
      <MainPageHeader />
      <HeadTitleContainer>
        <div>
          <div>멘토 - 프로필</div>
          <div>좋은 멘토를 찾아 직접 채팅해보세요.</div>
        </div>
      </HeadTitleContainer>
      <GlobalCategoryContainer>
        <Category />
        <CreateIconLink onClick={handleCreateRoute}>
          <img
            src={
              'https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/board/createIcon.svg'
            }
            alt="게시글생성아이콘"
          />
        </CreateIconLink>
      </GlobalCategoryContainer>
      <ContainerWrapper>
        <S.MentorListContainer>
          <S.ListTitleBox>명예의 전당</S.ListTitleBox>
          <MentorRanking filterCategoryId={Number(router.query.filterId)} />
        </S.MentorListContainer>
        <S.MentorListContainer>
          <S.ListSubTitleBox>인기 멘토</S.ListSubTitleBox>
          <PopularMentorList filterCategoryId={Number(router.query.filterId)} />
        </S.MentorListContainer>
        <S.MentorListContainer>
          <S.ListSubTitleBox>전체 멘토</S.ListSubTitleBox>
          <MentorList
            filterCategoryId={Number(router.query.filterId)}
            lastPage={lastPage as number}
          />
        </S.MentorListContainer>
      </ContainerWrapper>
    </>
  );
};

export default MentorTemplate;
