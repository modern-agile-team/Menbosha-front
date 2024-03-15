import React from 'react';
import * as S from './styled';
import BodyContents1 from '@/components/molecules/mainpagebody-contents/BodyContents1';
import BodyContents2 from '@/components/molecules/mainpagebody-contents/BodyContents2';
import BodyContents3 from '@/components/molecules/mainpagebody-contents/BodyContents3';
import BodyContents4 from '@/components/molecules/mainpagebody-contents/BodyContents4';
import BodyContents5 from '@/components/molecules/mainpagebody-contents/BodyContents5';

const MainPageBody = () => {
  return (
    <S.BodyWrapper>
      <S.BodyContainer>
        <BodyContents1 />
        <BodyContents2 />
        <BodyContents3 />
        <S.BetweenGradation />
        <BodyContents4 />
        <BodyContents5 />
      </S.BodyContainer>
    </S.BodyWrapper>
  );
};

export default MainPageBody;
