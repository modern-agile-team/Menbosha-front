import MentorCard from '@/components/molecules/mentor-elements/MentorCard';
import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './styled';
import USER from '@/apis/user';
import { MentorType } from '@/types/user';
import { useRouter } from 'next/router';
import PopularMentorCard from '@/components/molecules/mentor-elements/PopularMentorCard';
import { MentorListType, MentorPaginationParamsType } from '@/types/mentor';
import MENTORS from '@/apis/mentors';
import { useRecoilValue } from 'recoil';
import { CategoryFilterAtom } from '@/recoil/atoms/CategorySelectAtom';

const MentorRanking = () => {
  const [getRankingData, setRankingData] = useState<
    MentorListType['userWithImageAndIntroDtos']
  >([]);
  const filterCategoryId = useRecoilValue(CategoryFilterAtom);
  const router = useRouter();

  const getPopularMentorApi = async () => {
    const params: MentorPaginationParamsType = {
      page: 1,
      pageSize: 5,
      activityCategoryId: filterCategoryId,
      orderField: 'rank',
      sortOrder: 'DESC',
    };
    const response = await MENTORS.getMentorPagination(params);
    setRankingData(response.userWithImageAndIntroDtos);
  };

  useEffect(() => {
    getPopularMentorApi();
  }, [filterCategoryId]);

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
  }, [getRankingData]);

  return (
    <S.SpecificCardContainer>
      {getRankingData.length !== 0 ? (
        getRankingData.map((data) => {
          const temp = {
            id: data.id,
            name: data.name,
            shortIntro: data.userIntro.shortIntro,
            image: data.userImage.imageUrl,
            customCategory: data.userIntro.customCategory,
            rank: data.rank,
            mentorReviewCount: data.mentorReviewCount,
            mentorBoardCount: data.mentorBoardCount,
          };
          return (
            <S.MentorCardWrapper key={data.id}>
              <PopularMentorCard {...temp} />
            </S.MentorCardWrapper>
          );
        })
      ) : (
        <div style={{ color: '#000' }}>명예의 멘토가 없습니다.</div>
      )}
    </S.SpecificCardContainer>
  );
};

export default MentorRanking;
