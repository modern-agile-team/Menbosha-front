'use client';

import MENTOR from '@/apis/mentor';
import MentorBoardCard from '@/components/molecules/mentor-board-elements/MentorBoardCard';
import { MentorBoardListType, MentorBoardParamsType } from '@/types/mentor';
import { useEffect, useState } from 'react';
import * as S from './styled';
import { FilterPropsType } from '@/components/common/category/Category';
import SkeletonUI from '@/components/common/skeletonUI/SkeletonUI';
import { FlexBox } from '@/components/common/globalStyled/styled';

const RandomMentorBoard = ({ filterCategoryId }: Partial<FilterPropsType>) => {
  const [getRandomData, setRandomData] = useState<
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
    setRandomData(response.mentorBoardWithUserAndImageDtos);
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
      {load ? (
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
        <FlexBox type="flex">
          <SkeletonUI width="480px" height="290px" count={3} />
        </FlexBox>
      )}
    </S.MentorBoardCardContainer>
  );
};

export default RandomMentorBoard;
