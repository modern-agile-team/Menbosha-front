import * as S from './styled';
import { useEffect, useState } from 'react';
import { badge_list } from '@/components/common/badge-list/badge';
import { badgeType, AcquiredBadgeType } from '@/types/mypage';
import { ButtonBox } from '@/components/common/globalStyled/styled';

const MyBadge = ({ existingData, acquiredData }: AcquiredBadgeType) => {
  const [badgeListPageCount, setBadgeListPageCount] = useState(1);
  const [badgeListPageData, setBadgeListPageData] = useState<badgeType[]>([]);
  const [lastPage, setLastPage] = useState(2); //마지막 페이지 변경 시 여기 변경하면 됨
  const [firstPage, setFirstPage] = useState(1); //첫 페이지 변경 시 여기 변경

  const getBadgeList = (page: number) => {
    const badge = badge_list.filter((data) => {
      if (page === 1) {
        return data.id <= 20 && data.id > 0;
      } else if (page === 2) {
        return data.id > 20 && data.id <= 40;
      }
    });
    setBadgeListPageData(badge);
  };

  console.log(existingData, acquiredData);

  useEffect(() => {
    getBadgeList(badgeListPageCount);
  }, [badgeListPageCount]);

  const pagination = (page: number) => {
    const pageTemp = [];
    for (let i = firstPage; i <= page; i++) {
      pageTemp.push(
        <S.Btn
          i={i}
          curPage={badgeListPageCount}
          onClick={() => setPageGroup(i)}>
          {i}
        </S.Btn>,
      );
    }
    return pageTemp;
  };

  const setPageGroup = (page: number) => {
    if (page > lastPage) {
      setBadgeListPageCount(page - 1);
    } else if (page < firstPage) {
      setBadgeListPageCount(page + 1);
    } else {
      setBadgeListPageCount(page);
    }
  };

  return (
    <div>
      <S.BadgeListWrapper>
        {existingData &&
          badgeListPageData.map((data) => {
            return (
              <div key={data.id}>
                <div>
                  {existingData.some((item) => item.badgeId === data.id) ? (
                    <S.UnlockBadgeBox>
                      <img src={data.image} />
                    </S.UnlockBadgeBox>
                  ) : (
                    <S.UnlockBadgePreviewBox>
                      <img src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/badge/unlockBadgeImage.svg" />
                      <img src={data.image} />
                    </S.UnlockBadgePreviewBox>
                  )}
                </div>
              </div>
            );
          })}
        <S.PageCountContainer>
          <ButtonBox onClick={() => setPageGroup(badgeListPageCount - 1)}>
            &lt;
          </ButtonBox>
          {pagination(lastPage)}
          <ButtonBox onClick={() => setPageGroup(badgeListPageCount + 1)}>
            &gt;
          </ButtonBox>
        </S.PageCountContainer>
      </S.BadgeListWrapper>
    </div>
  );
};

export default MyBadge;
