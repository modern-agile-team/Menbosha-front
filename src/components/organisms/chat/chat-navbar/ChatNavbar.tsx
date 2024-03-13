import React from 'react';
import * as S from './styled';
import Image from 'next/image';
import Link from 'next/link';

const ChatNavbar = () => {
  return (
    <S.NavbarContainer>
      <S.NavbarTop>
        <S.TopLogoBox
          href={{
            pathname: `/main`,
          }}>
          <Image
            src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/MainLogo.svg"
            alt="LogoIcon"
            width="144"
            height="36"
          />
        </S.TopLogoBox>
        <S.TopNavBox>
          <Link href={`/mentor?filterId=1`}>
            <span>멘토 찾기</span>
          </Link>
          <Link href={`/mentor/board?filterId=1`}>
            <span>멘토 게시글</span>
          </Link>
          <Link href={`/help?filterId=1`}>
            <span>도와주세요</span>
          </Link>
          <Link href={`/support`}>
            <span>고객지원</span>
          </Link>
        </S.TopNavBox>
      </S.NavbarTop>
      <S.NavbarBottom>
        <Link
          href={{
            pathname: `/mypage`,
          }}>
          <Image
            src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/User-orange.svg"
            alt="UserIcon"
            width="28"
            height="28"
          />
        </Link>
      </S.NavbarBottom>
    </S.NavbarContainer>
  );
};

export default ChatNavbar;
