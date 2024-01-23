import React from 'react';
import * as S from './styled';
import MainPageHeader from '@/components/common/header/MainPageHeader';
import MainPageFooter from '../common/footer/Footer';
import MainPageBody from '../organisms/mainpage-body/MainPageBody';

const MainPageTemplate = () => {
  return (
    <S.PageWrapper>
      <MainPageHeader />
      <MainPageBody />
      <MainPageFooter />
    </S.PageWrapper>
  );
};

export default MainPageTemplate;
