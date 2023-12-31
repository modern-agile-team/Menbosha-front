import React from 'react';
import * as S from './styled';
import Image from 'next/image';
import Link from 'next/link';

const ChatNavbar = () => {
  const headerElements = ['멘토', '멘티', '콘텐츠', '고객 지원'];
  const translationElements: Record<string, string> = {
    멘토: 'mentor',
    멘티: 'mentee',
    콘텐츠: 'contents',
    '고객 지원': 'support',
  };
  return (
    <S.NavbarContainer>
      <S.NavbarTop>
        <S.TopLogoBox
          href={{
            pathname: `/main`,
          }}>
          <Image src="/LogoIcon.svg" alt="LogoIcon" width="36" height="36" />
        </S.TopLogoBox>
        <S.TopNavBox>
          {headerElements.map((element, index) => (
            <Link key={index} href={`/${translationElements[element]}`}>
              <span>{element}</span>
            </Link>
          ))}
        </S.TopNavBox>
      </S.NavbarTop>
      <S.NavbarBottom>
        <Link
          href={{
            pathname: `/userpage`,
          }}>
          <Image src="/UserIcon.svg" alt="UserIcon" width="28" height="28" />
        </Link>
      </S.NavbarBottom>
    </S.NavbarContainer>
  );
};

export default ChatNavbar;
