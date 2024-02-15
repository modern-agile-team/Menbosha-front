'use client';

import HELP from '@/apis/help';
import HelpCard from '@/components/molecules/help-board-elements/HelpCard';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './styled';
import { HelpListApiType, HelpListParamsType } from '@/types/help';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { CategoryFilterAtom } from '@/recoil/atoms/CategorySelectAtom';

const HelpBoardCardList = () => {
  const [totalPage, setTotalPage] = useState(1); //페이지 수
  const [page, setPage] = useState(1);
  const [getList, setGetList] = useState<
    HelpListApiType['helpMeBoardWithUserAndImagesItemDto']
  >([]);
  const obsRef = useRef<HTMLDivElement>(null); //옵저버 state
  const [load, setLoad] = useState(false);
  const preventRef = useRef(true); //옵저버 중복 방지
  const router = useRouter();
  const [filterCategory, setFilterCategory] =
    useRecoilState(CategoryFilterAtom);

  //옵저버 생성
  useEffect(() => {
    const observer = new IntersectionObserver(handleObs, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, [obsRef, getList]);

  useEffect(() => {
    // 스크롤 수동으로 조정 설정
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
      setGetList([]);
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
      setTotalPage((prev) => prev + 1); //페이지 값 증가
    }
  };

  //스크롤 시 로드 함수
  const loadPost = useCallback(async () => {
    const temp: HelpListParamsType = {
      categoryId: filterCategory,
      loadOnlyPullingUp: false,
      sortOrder: 'DESC',
      orderField: 'id',
      pageSize: 8,
      page: page,
    };
    setLoad(true); //로딩 시작
    if (page <= totalPage) {
      const response = await HELP.getHelpBoardPagination(temp); //api요청 글 목록 불러오기
      setGetList((prev) => [
        ...prev,
        ...response.helpMeBoardWithUserAndImagesItemDto,
      ]);
      setTotalPage(response.lastPage);
    }
    setLoad(false);
  }, [page]);

  const handleRouteChange = (e: any) => {
    sessionStorage.setItem(
      `__next_scroll_back`,
      JSON.stringify({
        x: 0,
        y: window.scrollY.toString(),
      }),
    );
  };

  //router발생시 스크롤 위치 저장
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
  }, [getList]);

  return (
    <S.HelpCardContainer>
      {getList &&
        getList.map((data) => {
          const temp = {
            id: data.id,
            name: data.user.name,
            userImage: data.user.userImage.imageUrl,
            image: data.imageUrl && data.imageUrl,
            head: data.head,
            body: data.body,
            createdAt: data.createdAt,
            userId: data.userId,
            categoryId: data.categoryId,
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
