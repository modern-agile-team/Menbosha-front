import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef } from 'react';

const usePreserveScroll = () => {
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
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  //스크롤 위치 복원 & session비우기
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const temp = JSON.parse(
        sessionStorage.getItem(`__next_scroll_back`) as string,
      );
      console.log(temp);
      temp && window.scrollTo(0, Number(temp.y));
      //   window.sessionStorage.clear();
    }
  }, []);
};

export default usePreserveScroll;
