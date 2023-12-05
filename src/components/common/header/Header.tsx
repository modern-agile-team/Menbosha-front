import React from 'react';
import * as S from './styled';
import Link from 'next/link';

const Header = () => {
  const headerElement = ['멘토', '멘티', '고객 지원', '설정'];
  return (
    <S.HeaderContainer>
      <S.HeaderArea>
        <S.LogoBox>로고</S.LogoBox>
        <S.NavigateBox>
          <Link href="/mentor">
            <span>멘토</span>
          </Link>
        </S.NavigateBox>
      </S.HeaderArea>
    </S.HeaderContainer>
  );
};

export default Header;
