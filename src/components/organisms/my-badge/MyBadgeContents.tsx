import USER from '@/apis/user';
import { useEffect, useState } from 'react';
import * as S from './styled';
import { AcquiredBadgeType, RankType } from '@/types/mypage';
import Link from 'next/link';
import MyRank from '@/components/molecules/my-page-elements/MyRank';
import MyBadge from '@/components/molecules/my-page-elements/MyBadge';

const MyBadgeContents = () => {
  const [getRankAndBadge, setRankAndBadge] = useState<RankType>({
    rank: 0,
    badge: [],
  });
  const [userId, setUserId] = useState(0);
  const [badgeData, setBadgeData] = useState<AcquiredBadgeType>({
    existingData: [],
    acquiredData: [],
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

  const getMyUserId = async () => {
    const response = await USER.getMyInfo();
    setUserId(response.id);
  };

  const getMyAcquiredBadges = async () => {
    const response = await USER.getMyBadge(userId);
    response.length !== 2
      ? setBadgeData((prev: any) => {
          return {
            ...prev,
            existingData: response,
          };
        })
      : setBadgeData(() => {
          return {
            existingData: response[0].existingData,
            acquiredData: response[1].acquiredData,
          };
        });
  };

  useEffect(() => {
    getMyUserId();
    getRankAndBadgeList();
  }, []);

  useEffect(() => {
    getMyAcquiredBadges();
  }, [userId]);

  return (
    <S.MyBadgeWrapper>
      <div>
        {getRankAndBadge.rank && <MyRank rank={getRankAndBadge.rank} />}
        {badgeData && (
          <MyBadge
            existingData={badgeData.existingData}
            acquiredData={badgeData.acquiredData}
          />
        )}
      </div>
    </S.MyBadgeWrapper>
  );
};

export default MyBadgeContents;
