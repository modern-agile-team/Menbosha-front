import MainPageHeader from '@/components/common/header/MainPageHeader';
import * as S from './styled';
import Category from '../../common/category/Category';
import MentorBoardList from '@/components/organisms/mentor-board/MentorBoardList';
import {
  ContainerWrapper,
  GlobalCategoryContainer,
  HeadTitleContainer,
  ToolTipContainer,
  Tooltip,
  TooltipImage,
} from '@/components/common/globalStyled/styled';
import RandomMentorBoard from '@/components/organisms/mentor-board/RandomMentorBoard';
import PopularMentorBoardList from '@/components/organisms/mentor-board/PopularMentorBoardList';
import { MentorBoardListType } from '@/types/mentor';
import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';

const MentorBoardTemplate = ({ lastPage }: Partial<MentorBoardListType>) => {
  const router = useRouter();
  const loginState = useRecoilValue(LoginStateAtom);

  // 스크롤 수동으로 조정 설정
  useEffect(() => {
    if (
      'scrollRestoration' in history &&
      history.scrollRestoration !== 'manual'
    ) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  const handleCreateRoute = () => {
    if (loginState) {
      router.push({
        pathname: `/create`,
        query: {
          location: 'mentor',
        },
      });
    } else {
      alert('게시글을 작성하려면 로그인이 필요합니다.');
    }
  };

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
          <div>멘토 - 게시글</div>
          <div>멘토들의 직접 작성한 좋은 게시글을 찾아보세요.</div>
        </div>
      </HeadTitleContainer>
      <GlobalCategoryContainer>
        <Category />
        <ToolTipContainer hoverBox="image" onClick={handleCreateRoute}>
          <TooltipImage
            src={
              'https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/board/createIcon.svg'
            }
            alt="게시글생성아이콘"
          />
          <Tooltip>게시글 생성</Tooltip>
        </ToolTipContainer>
      </GlobalCategoryContainer>
      <ContainerWrapper>
        <S.MentorListContainer>
          <S.ListTitleBox>랜덤 멘토 게시글</S.ListTitleBox>
          <RandomMentorBoard filterCategoryId={Number(router.query.filterId)} />
        </S.MentorListContainer>
        <S.MentorListContainer>
          <S.ListSubTitleBox>최근 인기 멘토글</S.ListSubTitleBox>
          <PopularMentorBoardList
            filterCategoryId={Number(router.query.filterId)}
          />
        </S.MentorListContainer>
        <S.MentorListContainer>
          <S.ListSubTitleBox>전체 멘토 게시글</S.ListSubTitleBox>
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
