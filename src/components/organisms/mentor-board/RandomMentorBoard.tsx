'use client';

import MENTOR from '@/apis/mentor';
import MentorBoardCard from '@/components/molecules/mentor-board-elements/MentorBoardCard';
import { MentorBoardListType, MentorBoardParamsType } from '@/types/mentor';
import { useEffect, useState } from 'react';
import * as S from './styled';
import { FilterPropsType } from '@/components/common/category/Category';
import SkeletonUI from '@/components/common/skeletonUI/SkeletonUI';

const RandomMentorBoard = ({ filterCategoryId }: Partial<FilterPropsType>) => {
  const [getRandomData, setGetRandomData] = useState<
    MentorBoardListType['mentorBoardWithUserAndImageDtos']
  >([]);
  const [load, setLoad] = useState(false);

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
    setGetRandomData(response.mentorBoardWithUserAndImageDtos);
    setLoad(true);
  };

  useEffect(() => {
    getRandomMentorBoardApi();
  }, [filterCategoryId]);

  useEffect(() => {
    getRandomMentorBoardApi();
  }, []);

  return (
    <S.MentorBoardCardContainer>
      {getRandomData.length !== 0 ? (
        getRandomData.map((data) => {
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
            mentorBoardImage: data.imageUrl ?? '', //data.imageUrl !== null ? data.imageUrl : ''
          };
          return (
            <S.RandomBoardWrapper key={data.id}>
              <MentorBoardCard {...temp} />
            </S.RandomBoardWrapper>
          );
        })
      ) : (
        <>{load && <div>멘토의 게시글이 존재하지 않습니다.</div>}</>
      )}
      <>{!load && <SkeletonUI width="31.75%" height="28vh" count={3} />}</>
    </S.MentorBoardCardContainer>
  );
};

export default RandomMentorBoard;
