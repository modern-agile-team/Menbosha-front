import { useEffect, useState } from 'react';
import * as S from './styled';
import USER from '@/apis/user';
import { MentorPopCardDataType } from '@/types/mentor';
import PopularMentorCard from '@/components/molecules/mentor-elements/PopularMentorCard';
import { FilterPropsType } from '@/components/common/category/Category';
import SkeletonUI from '@/components/common/skeletonUI/SkeletonUI';

const PopularMentorList = ({ filterCategoryId }: Partial<FilterPropsType>) => {
  const [getPopData, setGetPopData] = useState<MentorPopCardDataType[]>([]);
  const [load, setLoad] = useState(false);

  const getPopularMentorApi = async () => {
    const response = await USER.getPopularMentor();
    setGetPopData(response);
    setLoad(true);
  };

  useEffect(() => {
    getPopularMentorApi();
  }, [filterCategoryId]);

  return (
    <S.MentorCardContainer>
      {getPopData.length !== 0 ? (
        getPopData.map((data) => {
          const temp = {
            id: data.userId,
            name: data.name,
            shortIntro: data.shortIntro,
            image: data.imageUrl,
            customCategory: data.customCategory,
            rank: data.rank,
            mentorReviewCount: data.reviewCount,
            mentorBoardCount: 0,
          };
          return (
            <S.MentorCardWrapper key={data.userId}>
              <PopularMentorCard {...temp} />
            </S.MentorCardWrapper>
          );
        })
      ) : (
        <>{load && <div>인기멘토가 존재하지 않습니다.</div>}</>
      )}
      <>{!load && <SkeletonUI width="18.5%" height="38vh" count={10} />}</>
    </S.MentorCardContainer>
  );
};

export default PopularMentorList;
