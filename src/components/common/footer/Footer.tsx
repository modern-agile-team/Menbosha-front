import React from 'react';
import * as S from './styled';
import Link from 'next/link';
import Image from 'next/image';

const MainPageFooter = () => {
  return (
    <S.FooterContainer>
      <S.FooterArea>
        <S.FooterLeft>
          <S.FooterLeftLogo src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/FooterLogo.svg" />
          <S.FooterLeftContents>
            <span>We were waiting for You.</span>
            <span>
              Design 정효준 정현민 송치욱 | Dev 이재진 박준혁 이승우 원동건
              정비호
            </span>
            <span>Copyright ⓒ 2023 .Modern Agile. All rights reserved.</span>
          </S.FooterLeftContents>
        </S.FooterLeft>
        <S.FooterRight>
          <span>개인정보처리방침</span>
          <span>이용약관</span>
          {/* Link 처리는 Page가 추가 된 후에 다른 Pr에서 바로 적용시키겠습니다. */}
        </S.FooterRight>
      </S.FooterArea>
    </S.FooterContainer>
  );
};

export default MainPageFooter;
