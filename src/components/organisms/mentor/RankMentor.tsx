import { useEffect, useState } from 'react';
import * as S from './styled';
import PopularMentorCard from '@/components/molecules/mentor-elements/PopularMentorCard';
import { MentorListType, MentorPaginationParamsType } from '@/types/mentor';
import MENTORS from '@/apis/mentors';
import { FilterPropsType } from '@/components/common/category/Category';

const MentorRanking = ({ filterCategoryId }: Partial<FilterPropsType>) => {
  const [getRankingData, setRankingData] = useState<
    MentorListType['userWithImageAndIntroDtos']
  >([]);

  const getPopularMentorApi = async () => {
    const params: MentorPaginationParamsType = {
      page: 1,
      pageSize: 5,
      activityCategoryId: filterCategoryId as number,
      orderField: 'rank',
      sortOrder: 'DESC',
    };
    const response = await MENTORS.getMentorPagination(params);
    setRankingData(response.userWithImageAndIntroDtos);
  };

  useEffect(() => {
    getPopularMentorApi();
  }, [filterCategoryId]);

  return (
    <S.MentorCardContainer>
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
    </S.MentorCardContainer>
  );
};

export default MentorRanking;
