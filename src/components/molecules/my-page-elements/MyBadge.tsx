import * as S from './styled';
import { useEffect, useState } from 'react';
import { badge_list } from '@/components/common/badge-list/badge';
import { badgeType, AcquiredPropsType } from '@/types/mypage';
import { ButtonBox } from '@/components/common/globalStyled/styled';
import BadgeNotification from './BadgeNotification';
import { useRecoilState } from 'recoil';
import { NotificationAtom } from '@/recoil/atoms/NotificationAtom';

const MyBadge = ({ existingData, acquiredData }: AcquiredPropsType) => {
  const [badgeListPageCount, setBadgeListPageCount] = useState(1);
  const [badgeListPageData, setBadgeListPageData] = useState<badgeType[]>([]);
  const [newBadge, setNewBadge] = useRecoilState(NotificationAtom);

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

  useEffect(() => {
    getBadgeList(badgeListPageCount);
  }, [badgeListPageCount]);

  const pagination = (page: number) => {
    const pageTemp = [];
    for (let i = 1; i <= page; i++) {
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

  useEffect(() => {
    setNewBadge(true);
  }, [acquiredData]);

  const setPageGroup = (page: number) => {
    if (page > 2) {
      setBadgeListPageCount(page - 1);
    } else if (page < 1) {
      setBadgeListPageCount(page + 1);
    } else {
      setBadgeListPageCount(page);
    }
  };

  console.log(existingData, acquiredData);

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
          {pagination(2)}
          <ButtonBox onClick={() => setPageGroup(badgeListPageCount + 1)}>
            &gt;
          </ButtonBox>
        </S.PageCountContainer>
      </S.BadgeListWrapper>
      {newBadge && (
        <>
          {acquiredData.length !== 0 &&
            acquiredData.map((data) => {
              return (
                <div key={data.id}>
                  <BadgeNotification acquired={data.badgeId} />
                </div>
              );
            })}
        </>
      )}
    </div>
  );
};

export default MyBadge;
