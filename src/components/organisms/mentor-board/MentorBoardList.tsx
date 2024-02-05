import MENTOR from '@/apis/mentor';
import { MentorBoardListType, MentorBoardParamsType } from '@/types/mentor';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './styled';
import MentorBoardCard from '@/components/molecules/mentor-board-elements/MentorBoardCard';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { CategoryFilterAtom } from '@/recoil/atoms/CategorySelectAtom';

const MentorBoardList = () => {
  const [getBoardData, setBoardData] = useState<
    MentorBoardListType['mentorBoardForHotPostsItemDto']
  >([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1); //페이지 수
  const obsRef = useRef<HTMLDivElement>(null); //옵저버 state
  const [load, setLoad] = useState(false);
  const preventRef = useRef(true); //옵저버 중복 방지
  const router = useRouter();
  const filterCategory = useRecoilValue(CategoryFilterAtom);

  //옵저버 생성
  useEffect(() => {
    const observer = new IntersectionObserver(handleObs, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, [obsRef, getBoardData]);

  useEffect(() => {
    //스크롤 수동으로 조정 설정
    if (
      'scrollRestoration' in history &&
      history.scrollRestoration !== 'manual'
    ) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  //무한스크롤 로드
  useEffect(() => {
    loadPost();
  }, [page]);

  useEffect(() => {
    if (filterCategory !== 1) {
      setPage(1);
      setBoardData([]);
      setTimeout(() => {
        loadPost();
      }, 0);
    }
  }, [filterCategory]);

  const handleObs = (entries: any) => {
    const target = entries[0];
    if (target.isIntersecting) {
      //옵저버 중복 실행 방지
      preventRef.current = false; //옵저버 중복 실행 방지
      setPage((prev) => prev + 1); //페이지 값 증가
    }
  };

  //스크롤 시 로드 함수
  const loadPost = useCallback(async () => {
    const temp: MentorBoardParamsType = {
      categoryId: filterCategory,
      loadOnlyPopular: false,
      orderField: 'id',
      sortOrder: 'DESC',
      page: page,
      pageSize: 10,
    };
    setLoad(true); //로딩 시작
    if (page <= totalPage) {
      //나중에 카테고리 전역으로 관리 예정
      const response = await MENTOR.MentorBoardPagination(temp); //api요청 글 목록 불러오기
      setBoardData((prev: any) => [
        ...prev,
        ...response.mentorBoardForHotPostsItemDto,
      ]);
      setTotalPage(response.lastPage);
    }
    setLoad(false);
  }, [page]);

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
    setTimeout(() => {
      window.sessionStorage.clear();
    }, 1000);
  }, []);

  return (
    <S.MentoBoardCardContainer>
      {getBoardData.map((data) => {
        const temp = {
          id: data.id,
          head: data.head,
          body: data.body,
          category: data.categoryId,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
          userId: data.userId,
          userName: data.user.name,
          userImage: data.user.userImage.imageUrl,
          likes: data.likeCount,
          mentorBoardImage: data.imageUrl !== null ? data.imageUrl : '',
        };
        return (
          <S.MentorBoardCardWrapper key={data.id}>
            <MentorBoardCard {...temp} />
          </S.MentorBoardCardWrapper>
        );
      })}
      <div style={{ width: '100%' }}>
        {load && <div>Loading...</div>}
        <div ref={obsRef}></div>
      </div>
    </S.MentoBoardCardContainer>
  );
};

export default MentorBoardList;
