import MENTOR from '@/apis/mentor';
import MentorBoardCard from '@/components/molecules/mentor-board-elements/MentorBoardCard';
import { MentorBoardListType, MentorBoardParamsType } from '@/types/mentor';
import { useEffect, useState } from 'react';
import * as S from './styled';
import { useRecoilValue } from 'recoil';
import { CategoryFilterAtom } from '@/recoil/atoms/CategorySelectAtom';

const PopularMentorBoardList = () => {
  const [getHotData, setHotData] = useState<
    MentorBoardListType['mentorBoardForHotPostsItemDto']
  >([]);
  const filterCategory = useRecoilValue(CategoryFilterAtom);

  const getRandomMentorBoardApi = async () => {
    const temp: MentorBoardParamsType = {
      categoryId: filterCategory,
      loadOnlyPopular: true,
      orderField: 'id',
      sortOrder: 'DESC',
      page: 1,
      pageSize: 5,
    };
    const response = await MENTOR.MentorBoardPagination(temp);
    setHotData(response.mentorBoardForHotPostsItemDto);
  };

  useEffect(() => {
    getRandomMentorBoardApi();
  }, [filterCategory]);

  useEffect(() => {
    getRandomMentorBoardApi();
  }, []);

  return (
    <S.MentoBoardCardContainer>
      {getHotData[0].userId !== null ? (
        getHotData.map((data) => {
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
            likes: data.likeCount,
          };
          return (
            <S.MentorBoardCardWrapper key={data.id}>
              <MentorBoardCard {...temp} />
            </S.MentorBoardCardWrapper>
          );
        })
      ) : (
        <div>아직 인기 멘토가 존재하지 않습니다.</div>
      )}
    </S.MentoBoardCardContainer>
  );
};

export default PopularMentorBoardList;
