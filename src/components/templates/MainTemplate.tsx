import React from 'react';
import * as S from './styled';
import MainPageHeader from '@/components/common/header/MainPageHeader';
import MainPageBody from '../organisms/mainpagebody/MainPageBody';
import MainPageFooter from '../common/footer/Footer';

const MainTemplate = () => {
  return (
    <S.PageWrapper>
      <MainPageHeader />
      <MainPageBody />
      <MainPageFooter />
    </S.PageWrapper>
  );
};

export default MainTemplate;
