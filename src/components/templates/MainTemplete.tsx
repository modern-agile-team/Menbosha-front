import React from 'react';
import MainPageHeader from '@/components/common/header/MainPageHeader';
import MainPageBody from '../organisms/mainpagebody/MainPageBody';
import MainPageFooter from '../common/footer/Footer';

const MainTemplete = () => {
  return (
    <>
      <MainPageHeader />
      <MainPageBody />
      <MainPageFooter />
    </>
  );
};

export default MainTemplete;
