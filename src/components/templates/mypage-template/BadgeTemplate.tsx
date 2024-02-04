import USER from '@/apis/user';
import { ContainerWrapper } from '@/components/common/globalStyled/styled';
import MyBadge from '@/components/organisms/my-badge/MyBadge';
import MyRank from '@/components/organisms/my-badge/MyRank';
import { RankType } from '@/types/user';
import { useEffect, useState } from 'react';
import * as S from './styled';
import { useRouter } from 'next/router';

const BadgeTemplate = () => {
  const [rankData, setRankData] = useState<RankType>();
  const router = useRouter();

  const getMyRankApi = async () => {
    const response = await USER.getMyRank();
    setRankData(response);
  };

  const handleBack = () => {
    router.push('/mypage');
  };

  console.log(rankData);

  useEffect(() => {
    getMyRankApi();
  }, []);

  return (
    <ContainerWrapper>
      {rankData ? (
        <div>
          <div onClick={handleBack}>이전</div>
          <MyRank rank={rankData.rank} />
          <MyBadge badge={rankData.badge} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <S.BadgeBack>
        <div></div>
        <div></div>
      </S.BadgeBack>
    </ContainerWrapper>
  );
};

export default BadgeTemplate;
