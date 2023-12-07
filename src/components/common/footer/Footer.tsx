import React from 'react';
import * as S from './styled';
import Link from 'next/link';

const MainPageFooter = () => {
  return (
    <>
      <S.FooterContainer>
        <S.FooterArea>
          <S.FooterBox>
            <S.FooterBoxLeft>
              <S.NoticeBox>
                <img
                  src="/AlarmLeft.svg"
                  alt="alarm icon"
                  width="20px"
                  height="20px"
                />
                <span> ※ 공지사항 거 이왕이면 혁명이란 단어를 쓰십쇼</span>
                <img
                  src="/AlarmRight.svg"
                  alt="alarm icon"
                  width="20px"
                  height="20px"
                />
              </S.NoticeBox>
              <span>
                Design 정효준 정현민 송치욱 | Dev 이재진 박준혁 이승우 원동건
                정비호
              </span>
              <span>
                Copyright ⓒ 2023 .
                <a
                  href="https://modern-agile-official-client.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: '#c58940' }}>
                  Modern Agile
                </a>
                . All rights reserved.
              </span>
            </S.FooterBoxLeft>
            <S.FooterBoxRight>개인정보처리방침 | 이용약관</S.FooterBoxRight>
          </S.FooterBox>
        </S.FooterArea>
      </S.FooterContainer>
    </>
  );
};

export default MainPageFooter;
