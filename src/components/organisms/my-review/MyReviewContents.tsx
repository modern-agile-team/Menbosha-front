import USER from '@/apis/user';
import * as S from './styled';
import { use, useEffect, useState } from 'react';
import MENTORS from '@/apis/mentors';
import { MentorReviewType, ReviewProprType } from '@/types/review';
import MentorReviewElements from '@/components/molecules/mentor-review-elements/MentorReviewElements';
import { ButtonBox, TextBox } from '@/components/common/globalStyled/styled';
import { checkList } from '@/components/common/check-list/checkList';

const MyReviewContents = () => {
  const [reviewData, setReviewData] = useState<
    MentorReviewType['mentorReviewsItemResponses']
  >([]);
  const [userId, setUserId] = useState(0);
  const [page, setPage] = useState(1);
  const [firstPage, setFirstPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [selectCheckList, setSelectCheckList] = useState('');

  const MyInfo = async () => {
    const response = await USER.getMyInfo();
    setUserId(response.id);
  };

  const getReviewPagination = async () => {
    const response =
      selectCheckList.length !== 0
        ? await MENTORS.getMentorReview(userId, page, selectCheckList)
        : await MENTORS.getMentorReview(userId, page);
    setReviewData(response.mentorReviewsItemResponses);
    setLastPage(response.lastPage);
  };

  const handleSelectCheckList = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const select = target.innerHTML;
    const selectName = checkList.find(
      (data) => data.description === select,
    )?.checkName;
    if (selectName) {
      setSelectCheckList(selectName);
    }
    if (selectName === selectCheckList) {
      setSelectCheckList('');
    }
  };

  useEffect(() => {
    MyInfo();
  }, []);

  useEffect(() => {
    if (userId !== 0) {
      getReviewPagination();
    }
  }, [userId]);

  useEffect(() => {
    if (userId !== 0) {
      getReviewPagination();
    }
  }, [page]);

  useEffect(() => {
    if (userId !== 0) {
      getReviewPagination();
    }
  }, [selectCheckList]);

  const pagination = (lastPage: number) => {
    const pageTemp = [];
    for (let i = firstPage; i <= lastPage; i++) {
      pageTemp.push(
        <S.Btn i={i} curPage={page} onClick={() => setPageGroup(i)}>
          {i}
        </S.Btn>,
      );
    }
    return pageTemp;
  };
  const setPageGroup = (page: number) => {
    if (page > lastPage) {
      setPage(page - 1);
    } else if (page < firstPage) {
      setPage(page + 1);
    } else {
      setPage(page);
    }
  };

  return (
    <S.MyReviewWrapper>
      <div>
        <S.MyReviewTitleBox>후기</S.MyReviewTitleBox>
        <S.ReviewCheckListFilterContainer>
          {checkList.map((data) => {
            return (
              <>
                {data.checkName === selectCheckList ? (
                  <S.ReviewCheckListBox
                    select={false}
                    onClick={handleSelectCheckList}>
                    {data.description}
                  </S.ReviewCheckListBox>
                ) : (
                  <S.ReviewCheckListBox
                    select={true}
                    onClick={handleSelectCheckList}>
                    {data.description}
                  </S.ReviewCheckListBox>
                )}
              </>
            );
          })}
        </S.ReviewCheckListFilterContainer>
        <S.MyReviewContentsWrapper>
          {reviewData.length !== 0 ? (
            reviewData.map((data) => {
              const props: ReviewProprType = {
                career: data.mentee.userIntro
                  ? data.mentee.userIntro.career
                  : '없음',
                shortIntro: data.mentee.userIntro
                  ? data.mentee.userIntro.shortIntro
                  : '없음',
                customCategory: data.mentee.userIntro
                  ? data.mentee.userIntro.customCategory
                  : '없음',
                createdAt: data.createdAt,
                id: data.id,
                imageUrl: data.mentee.userImage.imageUrl,
                isAccurate: data.isAccurate,
                isBad: data.isBad,
                isClear: data.isClear,
                isFun: data.isFun,
                isGoodWork: data.isGoodWork,
                isInformative: data.isInformative,
                isKindness: data.isKindness,
                isQuick: data.isQuick,
                isStuffy: data.isStuffy,
                menteeId: data.mentee.id,
                name: data.mentee.name,
                rank: data.mentee.rank,
                review: data.review,
                isLocation: false,
              };
              return (
                <S.MyReviewContainer>
                  <MentorReviewElements {...props} />
                </S.MyReviewContainer>
              );
            })
          ) : (
            <div>아직 후기가 없습니다.</div>
          )}
          <S.MyReviewPaginationCountContainer>
            <ButtonBox onClick={() => setPageGroup(page - 1)}>&lt;</ButtonBox>
            {pagination(lastPage)}
            <ButtonBox onClick={() => setPageGroup(page + 1)}>&gt;</ButtonBox>
          </S.MyReviewPaginationCountContainer>
        </S.MyReviewContentsWrapper>
      </div>
    </S.MyReviewWrapper>
  );
};

export default MyReviewContents;
