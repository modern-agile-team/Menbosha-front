import { rankList } from '@/components/common/rank/rankList';
import { ReviewProprType } from '@/types/review';
import { useEffect, useState } from 'react';
import * as S from './styled';
import Image from 'next/image';
import Link from 'next/link';
import { LinkBox } from '@/components/common/globalStyled/styled';

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

  console.log(props);

  useEffect(() => {
    getRankInfo();
  }, []);

  return (
    <div>
      <S.ReviewContentBox>
        <S.RankBox defaultBg={props.isLocation}>
          <Image src={getRank.image} alt="랭크" width={48} height={48} />
          <div>{getRank.name}</div>
          <div>{props.rank}점</div>
        </S.RankBox>
        <LinkBox
          href={{
            pathname: `/userpage/${props.menteeId}`,
            query: {
              id: props.id,
            },
          }}>
          <S.UserInfoBox defaultBg={props.isLocation}>
            <div>{props.name}</div>
            <div>
              <div>{props.customCategory}</div>
              <div>{props.career}</div>
              <div>{props.shortIntro}</div>
            </div>
          </S.UserInfoBox>
        </LinkBox>
        <S.ReviewTextBox defaultBg={props.isLocation}>
          <div>{props.createdAt.slice(0, 10)}</div>
          <div>{props.review}</div>
        </S.ReviewTextBox>
        <S.ReportBox>
          {props.isLocation ? (
            <img
              src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/board/report.svg"
              alt="신고버튼"></img>
          ) : (
            <img
              src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mypage/reportWhite.svg"
              alt="신고버튼"></img>
          )}
        </S.ReportBox>
      </S.ReviewContentBox>
      <S.CheckListContainer defaultBg={props.isLocation}>
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
