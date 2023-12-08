import React from 'react';
import * as S from './styled';
import MainImageSlider from './Carousel';

const MainPageBody = () => {
  return (
    <S.BodyWrapper>
      <S.BodyContainer>
        <MainImageSlider />
      </S.BodyContainer>
    </S.BodyWrapper>
  );
};

export default MainPageBody;
