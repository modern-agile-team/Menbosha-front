import React from 'react';
import * as S from './styled';

const MainPageBody = () => {
  return (
    <S.BodyWrapper>
      <S.BodyContainer>
        <S.MenboshaImageBox>
          <S.MenboshaTitleBoxColumn>
            <S.MenboshaTitleBoxRow>
              <span>멘보샤</span>
              <span>처럼 맛있게,</span>
            </S.MenboshaTitleBoxRow>
            <span>당신만의 멘토링.</span>
          </S.MenboshaTitleBoxColumn>
        </S.MenboshaImageBox>
      </S.BodyContainer>
    </S.BodyWrapper>
  );
};

export default MainPageBody;
