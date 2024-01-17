import MENTOR from '@/apis/mentor';
import MentorBoardCard from '@/components/molecules/mentor-board-elements/MentorBoardCard';
import { MentorBoardListType } from '@/types/mentor';
import { useEffect, useState } from 'react';
import * as S from './styled';

const RandomMentorBoard = () => {
  const [getRandomData, setRandomData] = useState<MentorBoardListType[]>([]);

  const getRandomMentorBoardApi = async () => {
    const response = await MENTOR.randomMentorBoard();
    setRandomData(response);
  };

  useEffect(() => {
    getRandomMentorBoardApi();
  }, []);

  return (
    <div>
      {getRandomData.map((data) => {
        const temp = {
          id: data.id,
          head: data.head,
          body: data.body,
          category: data.categoryId,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
          userId: data.user.userImage.userId,
          userName: data.user.name,
          userImage: data.user.userImage.imageUrl,
          mentorBoardImage: data.mentorBoardImages,
        };
        return (
          <S.MentorBoardCardWrapper key={data.id}>
            <MentorBoardCard {...temp} />
          </S.MentorBoardCardWrapper>
        );
      })}
    </div>
  );
};

export default RandomMentorBoard;
