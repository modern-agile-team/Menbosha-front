'use client';

import { useEffect, useState } from 'react';
import * as S from './styled';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    // listen for scroll events
    window.addEventListener('scroll', toggleVisibility);

    // clear the listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
  };

  return (
    <S.ScrollTopBox isVisible={isVisible} onClick={scrollToTop}>
      <img
        src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/gotoup.svg"
        alt="scrollToTop"
      />
    </S.ScrollTopBox>
  );
};

export default ScrollToTopButton;
