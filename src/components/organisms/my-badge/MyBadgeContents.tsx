import USER from '@/apis/user';
import { useEffect, useState } from 'react';
import * as S from './styled';
import { AcquiredPropsType } from '@/types/mypage';
import Link from 'next/link';
import MyRank from '@/components/molecules/my-page-elements/MyRank';
import MyBadge from '@/components/molecules/my-page-elements/MyBadge';

const MyBadgeContents = () => {
  const [getRank, setRank] = useState({
    myRank: 0,
    newRank: 0,
  });
  const [userId, setUserId] = useState(0);
  const [badgeData, setBadgeData] = useState<AcquiredPropsType>({
    existingData: [],
    acquiredData: [],
  });

  const getRankScore = async () => {
    const response = await USER.getMyRankScore(userId);
    setRank(() => {
      return {
        myRank: response.myRank,
        newRank: response.newRank,
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
      : setBadgeData((prev: any) => {
          return {
            ...prev,
            existingData: response[0],
            acquiredData: response[1].acquiredBadges,
          };
        });
  };

  useEffect(() => {
    getMyUserId();
  }, []);

  useEffect(() => {
    if (userId !== 0) {
      getMyAcquiredBadges();
      getRankScore();
    }
  }, [userId]);

  return (
    <S.MyBadgeWrapper>
      <div>
        <MyRank myRank={getRank.myRank} newRank={getRank.newRank} />
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
