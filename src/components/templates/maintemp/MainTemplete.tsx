import React from 'react';
import * as S from './styled';
import MainPageHeader from '@/components/common/header/MainPageHeader';
import MainPageBody from '../../organisms/mainpagebody/MainPageBody';
import MainPageFooter from '../../common/footer/Footer';

const MainTemplete = () => {
  return (
    <S.MainPageWrapper>
      <MainPageHeader />
      <MainPageBody />
      <MainPageFooter />
    </S.MainPageWrapper>
  );
};

export default MainTemplete;
