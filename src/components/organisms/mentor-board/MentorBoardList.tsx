import MENTOR from '@/apis/mentor';
import { MentorBoardListType } from '@/types/mentor';
import { useEffect, useState } from 'react';
import * as S from './styled';
import MentorBoardCard from '@/components/molecules/mentor-board-elements/MentorBoardCard';

const MentorBoardList = () => {
  const [getBoardData, setBoardData] = useState<MentorBoardListType[]>([]);

  /**멘토 게시판 페이지 수 불러오는 api */
  const getMentorBoardPageApi = async () => {
    const response = await MENTOR.getMentorBoardPage();
  };

  /**멘토 게시판 페이지별 리스트 불러오는 api */
  const getMentorBoardListApi = async () => {
    const response = await MENTOR.getMentorBoardList(1);
    setBoardData(response);
  };

  useEffect(() => {
    getMentorBoardListApi();
  }, []);

  return (
    <S.MentoCardContainer>
      {getBoardData.map((data: MentorBoardListType) => {
        const temp = {
          id: data.id,
          head: data.head,
          body: data.body,
          category: data.category,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
          userName: data.user.name,
          userImage: data.user.userImage.imageUrl,
          boardImage: data.boardImage,
        };
        return (
          <S.MentorBoardCardWrapper key={data.id}>
            <MentorBoardCard {...temp} />
          </S.MentorBoardCardWrapper>
        );
      })}
    </S.MentoCardContainer>
  );
};

export default MentorBoardList;
