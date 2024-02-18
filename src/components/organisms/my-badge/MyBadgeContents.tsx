import USER from '@/apis/user';
import { useEffect, useState } from 'react';
import * as S from './styled';
import { RankType } from '@/types/mypage';
import Link from 'next/link';
import MyRank from '@/components/molecules/my-page-elements/MyRank';
import MyBadge from '@/components/molecules/my-page-elements/MyBadge';

const MyBadgeContents = () => {
  const [getRankAndBadge, setRankAndBadge] = useState<RankType>({
    rank: 0,
    badge: [],
  });

  const getRankAndBadgeList = async () => {
    const response = await USER.getMyRank();
    setRankAndBadge((prev) => {
      return {
        ...prev,
        rank: response.rank,
        badge: response.badge,
      };
    });
  };

  useEffect(() => {
    getRankAndBadgeList();
  }, []);
  return (
    <S.MyBadgeWrapper>
      <div>
        {getRankAndBadge.rank && <MyRank rank={getRankAndBadge.rank} />}
        <MyBadge badge={getRankAndBadge.badge} />
      </div>
    </S.MyBadgeWrapper>
  );
};

export default MyBadgeContents;
