import MENTOR from '@/apis/mentor';
import { MentorBoardListType, MentorBoardParamsType } from '@/types/mentor';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './styled';
import MentorBoardCard from '@/components/molecules/mentor-board-elements/MentorBoardCard';
import { FilterPropsType } from '@/components/common/category/Category';
import SkeletonUI from '@/components/common/skeletonUI/SkeletonUI';
import instance from '@/apis/axiosInstance';

const MentorBoardList = ({ filterCategoryId, lastPage }: FilterPropsType) => {
  const [getBoardData, setGetBoardData] = useState<
    MentorBoardListType['mentorBoardWithUserAndImageDtos']
  >([]);
  const [load, setLoad] = useState<boolean>(true);

  const getBoardsData = async () => {
    const response = await instance.get('/mentor-boards');
    setGetBoardData(response.data.contents);
  };

  useEffect(() => {
    getBoardsData();
  }, []);

  return (
    <S.MentorBoardCardContainer>
      {getBoardData.length !== 0 ? (
        getBoardData.map((data) => {
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
            mentorBoardImage: data.imageUrl ?? '',
          };
          return (
            <S.MentorBoardCardWrapper key={data.id}>
              <MentorBoardCard {...temp} />
            </S.MentorBoardCardWrapper>
          );
        })
      ) : (
        <>{!load && <div>게시글이 존재하지 않습니다.</div>}</>
      )}
      <>
        {!load && <SkeletonUI width="18.5%" height="27vh" count={10} />}
        <div ref={null}></div>
      </>
    </S.MentorBoardCardContainer>
  );
};

export default MentorBoardList;
