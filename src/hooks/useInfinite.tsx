import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

/**무한 스크롤, 페이지네이션을 위한 hook */
const useInfinite = (apiPage: () => void, apiList: () => void) => {
  const [totalPage, setTotalPage] = useState(0); //페이지 수
  const [getList, setList] = useState<any>([]);
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

  const handleObs = (entries: any) => {
    const target = entries[0];
    if (target.isIntersecting) {
      //옵저버 중복 실행 방지
      preventRef.current = false; //옵저버 중복 실행 방지
      setTotalPage((prev) => prev - 1); //페이지 값 감소
    }
  };

  useEffect(() => {
    apiPage();
  }, []);

  //스크롤 시 로드 함수
  useEffect(() => {
    setLoad(true); //로딩 시작
    if (totalPage > 0) {
      apiList();
    }
    setLoad(false);
  }, [totalPage]);

  return {
    totalPage,
    setTotalPage,
    setList,
    getList,
  };
};

export default useInfinite;
