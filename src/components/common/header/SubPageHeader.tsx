import React from 'react';
import * as S from './styled';
import Link from 'next/link';

const id = 0; //초기값 -> 후에 변동 예정

const SubPageHeader = () => {
  const headerElements = ['멘토', '멘티', '콘텐츠', '고객 지원'];
  const translationElements: Record<string, string> = {
    멘토: 'mentor',
    멘티: 'mentee',
    콘텐츠: 'contents',
    '고객 지원': 'support',
  };
  return (
    <S.HeaderContainer style={{ marginTop: '20px' }}>
      <S.HeaderArea>
        <S.LogoBox>
          <Link
            href={{
              pathname: `/main`,
            }}>
            <img src="/LogoIcon.svg" alt="LogoIcon" width="36" height="36" />
            <img
              src="/LogoText.svg"
              alt="LogoText"
              width="110"
              height="18"
              style={{ marginBottom: '8px' }}
            />
          </Link>
        </S.LogoBox>
        <S.NavigateBox>
          {headerElements.map((element, index) => (
            <Link key={index} href={`/${translationElements[element]}`}>
              <span>{element}</span>
            </Link>
          ))}
        </S.NavigateBox>
        <S.IconBox>
          <Link
            href={{
              pathname: `/chat/${id}`,
              query: { id: 0 },
            }}>
            <img src="/ChatIcon.svg" alt="ChatIcon" width="28" height="28" />
          </Link>
          <Link
            href={{
              pathname: `/userpage`,
            }}>
            <img src="/UserIcon.svg" alt="UserIcon" width="28" height="28" />
          </Link>
        </S.IconBox>
      </S.HeaderArea>
    </S.HeaderContainer>
  );
};

export default SubPageHeader;
