import { useEffect, useState } from 'react';
import * as S from './styled';
import PopularMentorCard from '@/components/molecules/mentor-elements/PopularMentorCard';
import { MentorListType, MentorPaginationParamsType } from '@/types/mentor';
import MENTORS from '@/apis/mentors';
import { FilterPropsType } from '@/components/common/category/Category';
import SkeletonUI from '@/components/common/skeletonUI/SkeletonUI';

const MentorRanking = ({ filterCategoryId }: Partial<FilterPropsType>) => {
  const [getRankingData, setGetRankingData] = useState<
    MentorListType['userWithImageAndIntroDtos']
  >([]);
  const [load, setLoad] = useState(false);

  const getPopularMentorApi = async () => {
    const params: MentorPaginationParamsType = {
      page: 1,
      pageSize: 5,
      activityCategoryId: filterCategoryId as number,
      orderField: 'rank',
      sortOrder: 'DESC',
    };
    const response = await MENTORS.getMentorPagination(params);
    setGetRankingData(response.userWithImageAndIntroDtos);
    setLoad(true);
  };

  useEffect(() => {
    getPopularMentorApi();
  }, [filterCategoryId]);

  return (
    <S.MentorCardContainer>
      {getRankingData.length !== 0 && load ? (
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
        <>{load && <div>명예의 멘토가 존재하지 않습니다.</div>}</>
      )}
      <>{!load && <SkeletonUI width="18%" height="38vh" count={5} />}</>
    </S.MentorCardContainer>
  );
};

export default MentorRanking;
