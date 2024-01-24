import MENTOR from '@/apis/mentor';
import MentorBoardCard from '@/components/molecules/mentor-board-elements/MentorBoardCard';
import { MentorBoardListType } from '@/types/mentor';
import { useEffect, useState } from 'react';
import * as S from './styled';
import { useRecoilValue } from 'recoil';
import { CategoryFilterAtom } from '@/recoil/atoms/CategorySelectAtom';

const RandomMentorBoard = () => {
  const [getRandomData, setRandomData] = useState<MentorBoardListType[]>([]);
  const filterCategory = useRecoilValue(CategoryFilterAtom);

  const getRandomMentorBoardApi = async () => {
    const response = await MENTOR.randomMentorBoard(filterCategory);
    setRandomData(response);
  };

  useEffect(() => {
    getRandomMentorBoardApi();
  }, [filterCategory]);

  useEffect(() => {
    getRandomMentorBoardApi();
  }, []);

  return (
    <S.MentoBoardCardContainer>
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
          likes: data.mentorBoardLikes,
          mentorBoardImage:
            data.mentorBoardImages.length !== 0
              ? data.mentorBoardImages[0].imageUrl
              : '',
        };
        return (
          <S.RandomMentorWrapper key={data.id}>
            <MentorBoardCard {...temp} />
          </S.RandomMentorWrapper>
        );
      })}
    </S.MentoBoardCardContainer>
  );
};

export default RandomMentorBoard;
