import MentorCard from '@/components/molecules/mentor-elements/MentorCard';
import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './styled';
import USER from '@/apis/user';
import { MentorType, PopularMentorType } from '@/types/user';
import { useRouter } from 'next/router';
import PopularMentorCard from '@/components/molecules/mentor-elements/PopularMentorCard';

const PopularMentorList = () => {
  const [getPopData, setPopData] = useState<PopularMentorType[]>([]);
  const router = useRouter();

  const getPopularMentorApi = async () => {
    const response = await USER.getPopularMentor();
    setPopData(response);
  };

  // 스크롤 수동으로 조정 설정
  useEffect(() => {
    if (
      'scrollRestoration' in history &&
      history.scrollRestoration !== 'manual'
    ) {
      history.scrollRestoration = 'manual';
    }
    getPopularMentorApi();
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
  }, [getPopData]);

  return (
    <S.MentoCardContainer>
      {getPopData.length !== 0 ? (
        getPopData.map((data) => {
          const temp = {
            userId: data.userId,
            name: data.name,
            activityCategoryId: data.activityCategoryId,
            introduce: data.introduce,
            career: data.career,
            mainField: data.mainField,
            rank: data.rank,
            reviewCount: data.reviewCount,
          };
          return (
            <S.MentorCardWrapper key={data.userId}>
              <PopularMentorCard {...temp} />
            </S.MentorCardWrapper>
          );
        })
      ) : (
        <div style={{ color: '#000' }}>인기 멘토가 없습니다.</div>
      )}
    </S.MentoCardContainer>
  );
};

export default PopularMentorList;
