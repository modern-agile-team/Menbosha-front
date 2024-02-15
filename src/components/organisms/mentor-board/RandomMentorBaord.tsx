import MENTOR from '@/apis/mentor';
import MentorBoardCard from '@/components/molecules/mentor-board-elements/MentorBoardCard';
import { MentorBoardListType, MentorBoardParamsType } from '@/types/mentor';
import { useEffect, useState } from 'react';
import * as S from './styled';
import { useRecoilValue } from 'recoil';
import { CategoryFilterAtom } from '@/recoil/atoms/CategorySelectAtom';
import RandomMentorBoardCard from '@/components/molecules/mentor-board-elements/RandomMentorBoardCard';

const RandomMentorBoard = () => {
  const [getRandomData, setRandomData] = useState<
    MentorBoardListType['mentorBoardWithUserAndImageDtos']
  >([]);
  const filterCategory = useRecoilValue(CategoryFilterAtom);

  const getRandomMentorBoardApi = async () => {
    const temp: MentorBoardParamsType = {
      categoryId: filterCategory,
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
  }, [filterCategory]);

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
            <RandomMentorBoardCard {...temp} />
          </S.RandomBoardWrapper>
        );
      })}
    </S.MentorBoardCardContainer>
  );
};

export default RandomMentorBoard;
