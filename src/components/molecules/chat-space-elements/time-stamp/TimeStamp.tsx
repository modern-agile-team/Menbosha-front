import React from 'react';
import * as S from './styled';

const TimeStamp = () => {
  return (
    <S.TimeStampContainer>
      <S.TimeLine />
      <S.TimeStampArea>2023년 12월 26일</S.TimeStampArea>
    </S.TimeStampContainer>
  );
};

export default TimeStamp;
