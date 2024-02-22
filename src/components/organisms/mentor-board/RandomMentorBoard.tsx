import MENTOR from '@/apis/mentor';
import MentorBoardCard from '@/components/molecules/mentor-board-elements/MentorBoardCard';
import { MentorBoardListType, MentorBoardParamsType } from '@/types/mentor';
import { useEffect, useState } from 'react';
import * as S from './styled';
import { FilterPropsType } from '@/components/common/category/Category';

const RandomMentorBoard = ({ filterCategoryId }: Partial<FilterPropsType>) => {
  const [getRandomData, setRandomData] = useState<
    MentorBoardListType['mentorBoardWithUserAndImageDtos']
  >([]);

  const getRandomMentorBoardApi = async () => {
    const temp: MentorBoardParamsType = {
      categoryId: filterCategoryId as number,
      pageSize: 3,
      loadOnlyPopular: false,
      orderField: 'RAND()',
      sortOrder: 'DESC',
      page: 1,
    };
    const response = await MENTOR.MentorBoardPagination(temp);
    setRandomData(response.mentorBoardWithUserAndImageDtos);
  };

  useEffect(() => {
    getRandomMentorBoardApi();
  }, [filterCategoryId]);

  useEffect(() => {
    getRandomMentorBoardApi();
  }, []);

  return (
    <S.MentorBoardCardContainer>
      {getRandomData.map((data) => {
        const temp = {
          id: data.id,
          head: data.head,
          body: data.body,
          category: data.categoryId,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
          userId: data.userId,
          userName: data.user.name,
          userImage: data.user.userImage.imageUrl,
          likes: data.likeCount,
          mentorBoardImage: data.imageUrl !== null ? data.imageUrl : '',
        };
        return (
          <S.RandomBoardWrapper key={data.id}>
            <MentorBoardCard {...temp} />
          </S.RandomBoardWrapper>
        );
      })}
    </S.MentorBoardCardContainer>
  );
};

export default RandomMentorBoard;
