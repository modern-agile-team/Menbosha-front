import { useEffect, useState } from 'react';
import * as S from './styled';
import USER from '@/apis/user';
import { MentorPopCardDataType } from '@/types/mentor';
import { useRouter } from 'next/router';
import PopularMentorCard from '@/components/molecules/mentor-elements/PopularMentorCard';
import { FilterPropsType } from '@/components/common/category/Category';

const PopularMentorList = ({ filterCategoryId }: FilterPropsType) => {
  const [getPopData, setPopData] = useState<MentorPopCardDataType[]>([]);
  const router = useRouter();

  const getPopularMentorApi = async () => {
    const response = await USER.getPopularMentor();
    setPopData(response);
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
        <div style={{ color: '#000' }}>인기 멘토가 없습니다.</div>
      )}
    </S.MentorCardContainer>
  );
};

export default PopularMentorList;
