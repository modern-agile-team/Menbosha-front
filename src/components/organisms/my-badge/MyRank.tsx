import { FlexBox } from '@/components/common/globalStyled/styled';
import { rankList } from '@/components/common/rank/rankList';
import { RankType } from '@/types/user';
import { useEffect, useState } from 'react';
import * as S from './styled';

const MyRank = ({ rank }: Partial<RankType>) => {
  const [myRank, setMyRank] = useState('');
  const [rankImg, setRankImg] = useState('');
  useEffect(() => {
    if (rank) {
      const temp = rankList.find(
        (data) => data.range[0] < rank && data.range[1] > rank,
      );
      temp && setMyRank(temp.rank);
      temp && setRankImg(temp.image);
    }
  });
  return (
    <div>
      <S.RankTitleBox>등급 및 칭호</S.RankTitleBox>
      <img src={rankImg} />
      <div>{myRank}</div>
      {rankList.map((data) => {
        return <img src={data.image}></img>;
      })}
      <div></div>
      <FlexBox type="flex">
        {rankList.map((data) => {
          return <div>{data.rank}</div>;
        })}
      </FlexBox>
    </div>
  );
};

export default MyRank;
