import React from 'react';
import * as S from './styled';
import Link from 'next/link';
import Image from 'next/image';

const MainPageFooter = () => {
  return (
    <>
      <S.FooterContainer>
        <S.FooterArea>
          <S.FooterBoxLeft />
          <S.FooterBoxCenter>
            <S.NoticeBox>
              <Image
                src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/chat/ChatReport.svg"
                alt="alarm icon"
                width="20"
                height="20"
                style={{ marginLeft: '16px' }}
              />
              <span> ※ 공지사항 거 이왕이면 혁명이란 단어를 쓰십쇼</span>
              <Image
                src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/chat/ChatReport.svg"
                alt="alarm icon"
                width="20"
                height="20"
                style={{ marginRight: '16px' }}
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
                style={{ textDecoration: 'none', color: 'rgb(255, 119, 43)' }}>
                Modern Agile
              </a>
              . All rights reserved.
            </span>
          </S.FooterBoxCenter>
          <S.FooterBoxRight>개인정보처리방침 | 이용약관</S.FooterBoxRight>
        </S.FooterArea>
      </S.FooterContainer>
    </>
  );
};

export default MainPageFooter;
