import React from 'react';
import * as S from './styled';
import Image from 'next/image';

const MentorListBox = () => {
  return (
    <S.ListArea>
      <S.MentorInfoArea>
        <S.MentorInfoLeft>
          <S.MentorImage>
            <Image
              src="/UserIcon.svg"
              alt="MentorIcon"
              width="24"
              height="24"
            />
          </S.MentorImage>
          <S.MentorInfoBox>
            <span
              style={{
                fontSize: '0.65em',
                fontWeight: '700',
                marginBottom: '5px',
              }}>
              원동건
            </span>
            <span style={{ fontSize: '0.5em', fontWeight: '400' }}>
              디자인, IT, 취미
            </span>
          </S.MentorInfoBox>
        </S.MentorInfoLeft>
      </S.MentorInfoArea>
    </S.ListArea>
  );
};

export default MentorListBox;
