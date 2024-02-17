import { rankList } from '@/components/common/rank/rankList';
import { RankType } from '@/types/user';
import { useEffect, useState } from 'react';
import * as S from './styled';

const MyRank = ({ rank }: Partial<RankType>) => {
  const [rankInfo, setRankInfo] = useState({
    image: '',
    name: '',
  });

  const getRankList = () => {
    const pickRank =
      rank &&
      rankList.find((data) => data.range[0] < rank && data.range[1] > rank);
    pickRank &&
      setRankInfo(() => {
        return {
          image: pickRank.image,
          name: pickRank.rank,
        };
      });
  };

  useEffect(() => {
    getRankList();
  }, []);

  return (
    <div>
      <S.MyRankWrapper>
        <div>등급 및 칭호</div>
        <img src={rankInfo.image} alt={`${rank}점 랭크`} />
        <S.MyRankNameAndScore>
          <div>{rankInfo.name}</div>
          <div>{rank}점</div>
        </S.MyRankNameAndScore>
      </S.MyRankWrapper>
      <S.RankLevelLockContainer>
        {rank &&
          rankList.map((data) => {
            return (
              <div>
                {data.range[0] < rank ? (
                  <img src={data.unLock}></img>
                ) : (
                  <img src={data.lock}></img>
                )}
              </div>
            );
          })}
        <div></div>
        {rankList.map((data) => {
          return (
            <div>
              <div>{data.rank}</div>
              <div>
                {data.range[0]}-{data.range[1]}점
              </div>
            </div>
          );
        })}
      </S.RankLevelLockContainer>
    </div>
  );
};

export default MyRank;
