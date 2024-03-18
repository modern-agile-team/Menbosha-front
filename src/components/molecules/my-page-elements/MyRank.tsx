import { rankList } from '@/components/common/rank/rankList';
import { useEffect, useState } from 'react';
import * as S from './styled';
import { RankScoreType } from '@/types/mypage';

const MyRank = ({ myRank, newRank }: RankScoreType) => {
  const [rankInfo, setRankInfo] = useState({
    image: '',
    name: '',
  });

  const getRankList = () => {
    const pickRank = rankList.find(
      (data) => data.range[0] < newRank && data.range[1] >= newRank,
    );
    pickRank &&
      setRankInfo(() => {
        return {
          image: pickRank.image,
          name: pickRank.rank,
        };
      });
  };

  useEffect(() => {
    if (newRank !== 0) {
      getRankList();
    }
  }, [newRank]);

  return (
    <div>
      <S.MyRankWrapper>
        <div>등급 및 칭호</div>
        {newRank !== 0 && newRank > 300 ? (
          <img
            src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/rank/shrimpRank300.jpg"
            alt={`이스터에그(300점 이상 지리네...;)`}
          />
        ) : (
          <img src={rankInfo.image} alt={`${newRank}점 랭크`} />
        )}
        <S.MyRankNameAndScore>
          {newRank !== 0 && newRank > 300 ? (
            <>
              <div>주방주인</div>
              <div>300점 이상(어케했누)</div>
            </>
          ) : (
            <>
              <div>{rankInfo.name}</div>
              <div>{newRank}점</div>
            </>
          )}
        </S.MyRankNameAndScore>
      </S.MyRankWrapper>
      <S.RankLevelLockContainer>
        {newRank &&
          rankList.map((data) => {
            return (
              <div>
                {data.range[0] < newRank ? (
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
