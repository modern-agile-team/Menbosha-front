import React from 'react';
import * as S from './styled';
import Link from 'next/link';

const MainPageFooter = ({ color }: { color: boolean }) => {
  return (
    <S.FooterContainer color={color}>
      <S.FooterArea>
        <S.FooterLeft>
          {color ? (
            <S.FooterLeftLogo src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/footerLogoWhite.svg" />
          ) : (
            <S.FooterLeftLogo src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/FooterLogo.svg" />
          )}
          <S.FooterLeftContents color={color}>
            <span>멘보샤처럼 맛있게, 당신만의 멘토링.</span>
            <span>
              Design 정효준 정현민 송치욱 | Dev 이재진 박준혁 이승우 원동건
              정비호
            </span>
            <Link href="https://modern-agile-official-client.vercel.app/">
              <span>Copyright ⓒ 2024 .Modern Agile. All rights reserved.</span>
            </Link>
            <Link href="https://www.induk.ac.kr/">
              <span>인덕대학교</span>
            </Link>
          </S.FooterLeftContents>
        </S.FooterLeft>
        <S.FooterRight color={color}>
          <Link
            href={{
              pathname: '/support/privacy-policy',
            }}>
            <span>개인정보처리방침</span>
          </Link>
          <Link
            href={{
              pathname: '/support/terms-conditions',
            }}>
            <span>이용약관</span>
          </Link>
        </S.FooterRight>
      </S.FooterArea>
    </S.FooterContainer>
  );
};

export default MainPageFooter;
