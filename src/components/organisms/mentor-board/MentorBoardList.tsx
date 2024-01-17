import MENTOR from '@/apis/mentor';
import { MentorBoardListType } from '@/types/mentor';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './styled';
import MentorBoardCard from '@/components/molecules/mentor-board-elements/MentorBoardCard';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { CategoryFilterAtom } from '@/recoil/atoms/CategorySelectAtom';

const MentorBoardList = () => {
  const [getBoardData, setBoardData] = useState<MentorBoardListType[]>([]);
  const [totalPage, setTotalPage] = useState(0); //페이지 수
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
    //첫 페이지 로드
    getPage();
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
  }, [totalPage]);

  useEffect(() => {
    setBoardData([]);
    getPage();
    setTimeout(() => {
      loadPost();
    }, 0);
  }, [filterCategory]);

  const handleObs = (entries: any) => {
    const target = entries[0];
    if (target.isIntersecting) {
      //옵저버 중복 실행 방지
      preventRef.current = false; //옵저버 중복 실행 방지
      setTotalPage((prev) => prev - 1); //페이지 값 감소
    }
  };
  //페이지 수 로드 함수
  const getPage = useCallback(async () => {
    const response = await MENTOR.getMentorBoardPage(filterCategory);
    setTotalPage(response.totalPage);
  }, []);

  //스크롤 시 로드 함수
  const loadPost = useCallback(async () => {
    setLoad(true); //로딩 시작
    if (totalPage > 0) {
      //나중에 카테고리 전역으로 관리 예정
      const result = await MENTOR.getMentorBoardList(filterCategory, totalPage); //api요청 글 목록 불러오기
      const reverseArr = [...result].reverse();
      result && setBoardData((prev: any) => [...prev, ...reverseArr]);
    }
    setLoad(false);
  }, [totalPage]);

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
      {getBoardData.map((data: MentorBoardListType) => {
        const temp = {
          id: data.id,
          head: data.head,
          body: data.body,
          category: data.categoryId,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
          userId: data.user.userImage.userId,
          userName: data.user.name,
          userImage: data.user.userImage.imageUrl,
          mentorBoardImage: data.mentorBoardImages,
        };
        return (
          <S.MentorBoardCardWrapper key={data.id}>
            <MentorBoardCard {...temp} />
          </S.MentorBoardCardWrapper>
        );
      })}
    </S.MentoBoardCardContainer>
  );
};

export default MentorBoardList;
