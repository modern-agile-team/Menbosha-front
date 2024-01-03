'use client';

import HELP from '@/apis/help';
import HelpCard from '@/components/molecules/help-board-elements/HelpCard';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './styled';
import { HelpListApiType } from '@/types/help';
import { useRouter } from 'next/router';

const HelpBoardCardList = () => {
  const [totalPage, setTotalPage] = useState(0); //페이지 수
  const [getList, setGetList] = useState<HelpListApiType[]>([]);
  const obsRef = useRef<HTMLDivElement>(null); //옵저버 state
  const [load, setLoad] = useState(false);
  const preventRef = useRef(true); //옵저버 중복 방지
  const router = useRouter();

  //옵저버 생성
  useEffect(() => {
    const observer = new IntersectionObserver(handleObs, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, [obsRef, getList]);

  //첫 페이지 로드
  useEffect(() => {
    getLoadPage();
  }, []);

  //무한스크롤 로드
  useEffect(() => {
    loadPost();
  }, [totalPage]);

  const handleObs = (entries: any) => {
    const target = entries[0];
    if (target.isIntersecting) {
      //옵저버 중복 실행 방지
      preventRef.current = false; //옵저버 중복 실행 방지
      setTotalPage((prev) => prev - 1); //페이지 값 감소
    }
  };
  //페이지 수 로드 함수
  const getLoadPage = useCallback(async () => {
    const response = await HELP.getHelpBoardPage();
    setTotalPage(response.totalPage);
  }, []);

  //스크롤 시 로드 함수
  const loadPost = useCallback(async () => {
    setLoad(true); //로딩 시작
    if (totalPage > 0) {
      const result = await HELP.getHelpBoardList(totalPage); //api요청 글 목록 불러오기
      const reverseArr = [...result.data].reverse();
      result && setGetList((prev: any) => [...prev, ...reverseArr]);
    }
    setLoad(false);
  }, [totalPage]);
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
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  //스크롤 위치 복원 & session비우기
  useEffect(() => {
    const temp = JSON.parse(
      sessionStorage.getItem(`__next_scroll_back`) as string,
    );
    temp && setTimeout(() => window.scrollTo(0, temp.y), 0);
    // window.sessionStorage.clear();
  }, [getList]);

  return (
    <S.HelpCardContainer>
      {getList.map((data: any) => {
        const temp = {
          id: data.id,
          name: data.user.name,
          userImage: data.user.userImage.imageUrl,
          image:
            data.helpMeBoardImages.length > 0
              ? data.helpMeBoardImages[0].imageUrl
              : '',
          head: data.head,
          body: data.body,
          createAt: data.create_at,
        };
        return (
          <S.HelpCardWrapper key={data.id}>
            <HelpCard {...temp} />
          </S.HelpCardWrapper>
        );
      })}
      <div>
        {load && <div>Loading...</div>}
        <div ref={obsRef}></div>
      </div>
    </S.HelpCardContainer>
  );
};

export default HelpBoardCardList;
