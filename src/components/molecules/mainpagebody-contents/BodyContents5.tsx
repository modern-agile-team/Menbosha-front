import React, { useEffect, useRef } from 'react';
import * as S from './styled';

const BodyContents5 = () => {
  const goToTopButtonRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleGoToTop = () => {
      const rightButton = goToTopButtonRef.current;
      if (rightButton) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    const rightButton = goToTopButtonRef.current;

    if (rightButton) {
      rightButton.addEventListener('click', handleGoToTop);
      return () => {
        rightButton.removeEventListener('click', handleGoToTop);
      };
    }
  }, []);

  return (
    <S.MainContentsContainer5>
      <S.MainContentsTitleArea5>
        <S.MainContents5Left>
          <span>그럼, 시작해볼까요?</span>
          <div>
            멘토와 멘티, 어떤 것이라도 저희는 환영합니다. 멘보샤에서 여러분의
            능력을 마음껏 펼쳐주세요.
          </div>
        </S.MainContents5Left>
        <S.MainContents5Right
          ref={goToTopButtonRef}
          src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/gotoup.svg"
          alt="GotoUP"
        />
      </S.MainContentsTitleArea5>
    </S.MainContentsContainer5>
  );
};

export default BodyContents5;
