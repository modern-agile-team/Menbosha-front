import React from 'react';
import * as S from './styled';
import TimeStamp from '../time-stamp/TimeStamp';
import Image from 'next/image';

const ChatSpaceBody = () => {
  const hostId = 1;
  const currentUserId = 2 as number;
  const isHost = currentUserId === hostId;

  return (
    <S.ChatSpaceBodyContainer>
      <S.ChatBubbleGuestContainer isHost={true}>
        <S.ChatGuestImage>
          <Image src="/UserIcon.svg" alt="GuestImage" width="24" height="24" />
        </S.ChatGuestImage>
        <S.ChatBubbleGuestCenter>
          <S.ChatGuestName>원동건 님</S.ChatGuestName>
          <S.ChatBubble isHost={true}>
            <span>안녕 재진아</span>
          </S.ChatBubble>
        </S.ChatBubbleGuestCenter>
        <S.ChatTimeBox>16:40</S.ChatTimeBox>
      </S.ChatBubbleGuestContainer>
      <S.ChatBubbleContainer isHost={false}>
        <S.ChatTimeBox>16:40</S.ChatTimeBox>
        <S.ChatBubble isHost={false}>
          <span>
            네형 네형네형네형네형네형네형네형네형네형네형네형네형네형네형
          </span>
        </S.ChatBubble>
      </S.ChatBubbleContainer>
      <TimeStamp />
    </S.ChatSpaceBodyContainer>
  );
};

export default ChatSpaceBody;
