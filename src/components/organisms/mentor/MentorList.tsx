import MentorCard from '@/components/molecules/mentor-elements/MentorCard';
import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './styled';
import USER from '@/apis/user';
import { MentorType } from '@/types/user';
import { useRouter } from 'next/router';
import MENTORS from '@/apis/mentors';
import { MentorListType, MentorPaginationType } from '@/types/mentor';
import { useRecoilValue } from 'recoil';
import { CategoryFilterAtom } from '@/recoil/atoms/CategorySelectAtom';

const MentorList = () => {
  const [getMentorData, setMentorData] = useState<
    MentorListType['userWithImageAndIntroDtos']
  >([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1); //페이지 수
  const obsRef = useRef<HTMLDivElement>(null); //옵저버 state
  const [load, setLoad] = useState(false);
  const preventRef = useRef(true); //옵저버 중복 방지
  const filterCategoryId = useRecoilValue(CategoryFilterAtom);
  const router = useRouter();

  //옵저버 생성
  useEffect(() => {
    const observer = new IntersectionObserver(handleObs, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, [obsRef, getMentorData]);

  //무한스크롤 로드
  useEffect(() => {
    getMentorListApi();
  }, [page]);

  useEffect(() => {
    if (filterCategoryId !== 1) {
      setMentorData([]);
      setPage(1);
      setTimeout(() => {
        getMentorListApi();
      }, 0);
    }
  }, [filterCategoryId]);

  const handleObs = (entries: any) => {
    const target = entries[0];
    if (target.isIntersecting) {
      //옵저버 중복 실행 방지
      preventRef.current = false; //옵저버 중복 실행 방지
      setPage((prev) => prev + 1); //페이지 값 감소
    }
  };
  //스크롤 시 로드 함수
  const getMentorListApi = useCallback(async () => {
    const params: MentorPaginationType = {
      page: page,
      pageSize: 10,
      categoryId: filterCategoryId,
      orderField: 'id',
      sortOrder: 'DESC',
    };
    setLoad(true); //로딩 시작
    if (page <= totalPage) {
      const response = await MENTORS.getMentorPagination(params); //api요청 글 목록 불러오기
      setMentorData((prev: any) => [
        ...prev,
        ...response.userWithImageAndIntroDtos,
      ]);
      setTotalPage(response.lastPage);
    }
    setLoad(false);
  }, [page]);
  // 스크롤 수동으로 조정 설정
  useEffect(() => {
    if (
      'scrollRestoration' in history &&
      history.scrollRestoration !== 'manual'
    ) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  console.log(getMentorData);

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
  }, [getMentorData]);

  return (
    <S.MentoCardContainer>
      {getMentorData &&
        getMentorData.map((data) => {
          const temp = {
            id: data.id,
            name: data.name,
            userImage: data.userImage.imageUrl,
            introduce: data.userIntro.shortIntro,
            mainField: data.userIntro.customCategory,
          };
          return (
            <S.MentorCardWrapper key={data.id}>
              <MentorCard {...temp} />
            </S.MentorCardWrapper>
          );
        })}
    </S.MentoCardContainer>
  );
};

export default MentorList;
