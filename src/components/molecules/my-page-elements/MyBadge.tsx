import * as S from './styled';
import { useEffect, useState } from 'react';
import { badge_list } from '@/components/common/badge-list/badge';
import { badgeType, RankType } from '@/types/mypage';

const MyBadge = ({ badge }: Partial<RankType>) => {
  const [badgeListPageCount, setBadgeListPageCount] = useState(1);
  const [badgeListPage, setBadgeListPage] = useState<badgeType[]>([]);
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
    setBadgeListPage(badge);
  };

  useEffect(() => {
    getBadgeList(badgeListPageCount);
  }, [badgeListPageCount]);

  const pagination = (page: number) => {
    const pageTemp = [];
    for (let i = firstPage; i <= page; i++) {
      pageTemp.push(<div onClick={() => setPageGroup(i)}>{i}</div>);
    }
    return pageTemp;
  };

  const setPageGroup = (page: number) => {
    if (page > lastPage) {
      alert('마지막페이지 입니다.');
      setBadgeListPageCount(page - 1);
    } else if (page < firstPage) {
      alert('첫 번째 페이지 입니다.');
      setBadgeListPageCount(page + 1);
    } else {
      setBadgeListPageCount(page);
    }
  };

  return (
    <div>
      <S.BadgeListWrapper>
        {badgeListPage.map((data) => {
          return (
            <div key={data.id}>
              <>
                <img src={data.image} />
              </>
            </div>
          );
        })}
        <S.PageCountContainer>
          <div onClick={() => setPageGroup(badgeListPageCount - 1)}>&lt;</div>
          {pagination(lastPage)}
          <div onClick={() => setPageGroup(badgeListPageCount + 1)}>&gt;</div>
        </S.PageCountContainer>
      </S.BadgeListWrapper>
    </div>
  );
};

export default MyBadge;
