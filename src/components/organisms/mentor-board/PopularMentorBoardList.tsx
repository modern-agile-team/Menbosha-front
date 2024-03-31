import MENTOR from '@/apis/mentor';
import MentorBoardCard from '@/components/molecules/mentor-board-elements/MentorBoardCard';
import { MentorBoardListType, MentorBoardParamsType } from '@/types/mentor';
import { useEffect, useState } from 'react';
import * as S from './styled';
import { FilterPropsType } from '@/components/common/category/Category';
import SkeletonUI from '@/components/common/skeletonUI/SkeletonUI';

const PopularMentorBoardList = ({
  filterCategoryId,
}: Partial<FilterPropsType>) => {
  const [getHotData, setGetHotData] = useState<
    MentorBoardListType['mentorBoardWithUserAndImageDtos']
  >([]);
  const [load, setLoad] = useState(false);

  const getRandomMentorBoardApi = async () => {
    const temp: MentorBoardParamsType = {
      categoryId: filterCategoryId as number,
      loadOnlyPopular: true,
      orderField: 'id',
      sortOrder: 'DESC',
      page: 1,
      pageSize: 4,
    };
    const response = await MENTOR.MentorBoardPagination(temp);
    setGetHotData(response.mentorBoardWithUserAndImageDtos);
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
      {getHotData.length !== 0 ? (
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
        <>{load && <div>인기 멘토글이 존재하지 않습니다.</div>}</>
      )}
      <>{!load && <SkeletonUI width="18.5%" height="27vh" count={10} />}</>
    </S.MentorBoardCardContainer>
  );
};

export default PopularMentorBoardList;
