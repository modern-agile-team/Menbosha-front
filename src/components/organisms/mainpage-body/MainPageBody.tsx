import React from 'react';
import * as S from './styled';
import MainImageSlider from './Carousel';

const MainPageBody = () => {
  return (
    <S.BodyWrapper>
      <S.BodyContainer>
        <S.SliderContainer>
          <MainImageSlider />
        </S.SliderContainer>
      </S.BodyContainer>
    </S.BodyWrapper>
  );
};

export default MainPageBody;
