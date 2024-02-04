import { rankList } from '@/components/common/rank/rankList';
import { ReviewProprType } from '@/types/review';
import { useEffect, useState } from 'react';
import * as S from './styled';
import Image from 'next/image';

const MentorReviewElements = (props: ReviewProprType) => {
  const [getRank, setRank] = useState({
    name: '',
    image: '',
  });
  const getRankInfo = () => {
    if (props) {
      const rankImage = rankList.find(
        (data) => data.range[0] < props.rank && data.range[1] > props.rank,
      );
      rankImage &&
        setRank((prev) => {
          return {
            ...prev,
            name: rankImage.rank,
            image: rankImage.image,
          };
        });
    }
  };

  useEffect(() => {
    getRankInfo();
  }, []);

  return (
    <div>
      <S.ReviewContentBox>
        <div>
          <Image src={getRank.image} alt="랭크" width={48} height={48} />
          <div>{getRank.name}</div>
          <div>{props.rank}점</div>
        </div>
        <div>
          <div>{props.name}</div>
          <div>{props.customCategory}</div>
          <div>{props.career}</div>
          <div>{props.shortIntro}</div>
        </div>
        <div>
          <div>{props.createdAt.slice(0, 10)}</div>
          <div>{props.review}</div>
        </div>
      </S.ReviewContentBox>
      <S.CheckListContainer>
        {props.isGoodWork && <div>잘 가르쳐요</div>}
        {props.isClear && <div>깔끔해요</div>}
        {props.isQuick && <div>답변이 빨라요</div>}
        {props.isAccurate && <div>정확해요</div>}
        {props.isKindness && <div>친절해요</div>}
        {props.isInformative && <div>알차요</div>}
        {props.isFun && <div>재밌어요</div>}
        {props.isBad && <div>아쉬워요</div>}
        {props.isStuffy && <div>답답해요</div>}
      </S.CheckListContainer>
    </div>
  );
};

export default MentorReviewElements;
