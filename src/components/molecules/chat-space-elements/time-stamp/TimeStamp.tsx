import React from 'react';
import * as S from './styled';

interface TimeStampProps {
  date: Date;
}

const TimeStamp = (props: TimeStampProps) => {
  const formattedDate = `${props.date.getFullYear()}년 ${
    props.date.getMonth() + 1
  }월 ${props.date.getDate()}일`;
  return (
    <S.TimeStampContainer>
      <S.TimeLine />
      <S.TimeStampArea>{formattedDate}</S.TimeStampArea>
    </S.TimeStampContainer>
  );
};

export default TimeStamp;
