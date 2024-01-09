import MentorCard from '@/components/molecules/mentor-board-elements/MentorCard';
import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './styled';
import USER from '@/apis/user';
import { MentorType } from '@/types/user';
import { useRouter } from 'next/router';

type MentorListType = {
  id: number;
  name: string;
  image: string;
  introduction: string;
  mainField: string;
};

const MentorList = () => {
  const [getMockingData, setMockingData] = useState<MentorListType[]>([]);
  const [getMentorData, setMentorData] = useState<MentorType[]>([]);
  const [totalPage, setTotalPage] = useState(0); //페이지 수
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
  }, [obsRef, getMentorData]);

  //첫 페이지 로드
  useEffect(() => {
    getPage();
  }, []);

  //무한스크롤 로드
  useEffect(() => {
    getMentorListApi();
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
  const getPage = useCallback(async () => {
    const response = await USER.getMentorListPage();
    setTotalPage(response.totalPage);
  }, []);

  //스크롤 시 로드 함수
  const getMentorListApi = useCallback(async () => {
    setLoad(true); //로딩 시작
    if (totalPage > 0) {
      const result = await USER.getMentorList(totalPage); //api요청 글 목록 불러오기
      const reverseArr = [...result].reverse();
      result && setMentorData((prev: any) => [...prev, ...reverseArr]);
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
  //mock api요청
  const getMockingDataApi = async () => {
    const res = await axios.get('/api/mento');
    setMockingData(res.data);
  };

  useEffect(() => {
    getPage();
  }, []);

  useEffect(() => {
    // getMockingDataApi();
    if (totalPage) {
      getMentorListApi();
    }
  }, [totalPage]);

  return (
    <S.MentoCardContainer>
      {getMentorData.map((data: MentorType) => {
        const temp = {
          id: data.id,
          name: data.name,
          userImage: data.userImage.imageUrl,
          introduce: data.userIntro.introduce,
          mainField: data.userIntro.mainField,
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
