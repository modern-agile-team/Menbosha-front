import React from 'react';
import * as S from './styled';
import Image from 'next/image';

const MainPageBody = () => {
  return (
    <S.BodyWrapper>
      <S.BodyContainer>
        <S.MenboshaContainer>
          <img
            src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/mainMenbosha.svg"
            alt="mainImage"
          />
        </S.MenboshaContainer>
      </S.BodyContainer>
    </S.BodyWrapper>
  );
};

export default MainPageBody;
