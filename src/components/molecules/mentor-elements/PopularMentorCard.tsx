import * as S from './styled';
import {
  ImageBox,
  LinkBox,
  TextBox,
} from '@/components/common/globalStyled/styled';
import { rankList } from '@/components/common/rank/rankList';
import { MentorPopCardType } from '@/types/mentor';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const PopularMentorCard = (props: MentorPopCardType) => {
  const [rankInfo, setRankInfo] = useState({
    image: '',
    name: '',
  });

  const getRankList = () => {
    const temp = rankList.find(
      (data) => data.range[0] < props?.rank && data.range[1] > props?.rank,
    );
    temp &&
      setRankInfo((prev) => {
        return {
          ...prev,
          image: temp?.image,
          name: temp?.rank,
        };
      });
  };

  useEffect(() => {
    getRankList();
  }, []);

  return (
    <LinkBox
      color="#000"
      href={{
        pathname: `/mentor/unit/${props.id}`,
        query: {
          id: props.id,
        },
      }}>
      <S.PopularMentorCardContainer>
        <ImageBox
          src={props.image}
          width="232px"
          height="232px"
          size="cover"
          style={{ borderRadius: 10, margin: 12 }}
        />
        <S.ProfileContentBox>
          <S.RankBox>
            <Image
              src={rankInfo.image}
              alt={`${props.rank}점랭크`}
              width={51}
              height={51}></Image>
            <div>{rankInfo.name}</div>
            <div>{props.rank}점</div>
          </S.RankBox>
          <S.NameBox>
            <div>{props.name}</div>
            <div>{props.customCategory}</div>
            <div>{props.shortIntro}</div>
          </S.NameBox>
        </S.ProfileContentBox>
        <S.CountContainer>
          <S.CountBox>
            <Image
              src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/board/boardCnt.svg"
              alt=""
              width={25}
              height={25}
            />
            <div>{props.mentorBoardCount}</div>
          </S.CountBox>
          <S.CountBox>
            <Image
              src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/board/reviewCnt.svg"
              alt=""
              width={25}
              height={25}
            />
            <div>{props.mentorReviewCount}</div>
          </S.CountBox>
        </S.CountContainer>
      </S.PopularMentorCardContainer>
    </LinkBox>
  );
};

export default PopularMentorCard;
