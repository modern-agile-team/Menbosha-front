import MENTOR from '@/apis/mentor';
import MentorBoardCard from '@/components/molecules/mentor-board-elements/MentorBoardCard';
import { MentorBoardListType, MentorHotBoardListType } from '@/types/mentor';
import { useEffect, useState } from 'react';
import * as S from './styled';
import { useRecoilValue } from 'recoil';
import { CategoryFilterAtom } from '@/recoil/atoms/CategorySelectAtom';

const PopularMentorBoardList = () => {
  const [getHotData, setHotData] = useState<MentorHotBoardListType[]>([]);
  const filterCategory = useRecoilValue(CategoryFilterAtom);

  const getRandomMentorBoardApi = async () => {
    const response = await MENTOR.hotMentorBoard({
      categoryId: filterCategory,
    });
    setHotData(response.mentorBoardForHotPostsItemDto);
  };

  console.log(getHotData);

  useEffect(() => {
    getRandomMentorBoardApi();
  }, [filterCategory]);

  useEffect(() => {
    getRandomMentorBoardApi();
  }, []);

  return (
    <S.MentoBoardCardContainer>
      {getHotData.map((data) => {
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
          mentorBoardImage: data.imageUrl,
        };
        return (
          <S.MentorBoardCardWrapper key={data.id}>
            <MentorBoardCard {...temp} />
          </S.MentorBoardCardWrapper>
        );
      })}
    </S.MentoBoardCardContainer>
  );
};

export default PopularMentorBoardList;