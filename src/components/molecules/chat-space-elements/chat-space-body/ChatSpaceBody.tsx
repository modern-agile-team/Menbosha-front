import React from 'react';
import * as S from './styled';
import TimeStamp from '../time-stamp/TimeStamp';
import Image from 'next/image';
import {
  ChatContentsType,
  ChatPaginationType,
  ChatPartnersType,
} from '@/types/chat';

const ChatSpaceBody = (props: {
  chatPartners: ChatPartnersType[];
  chatContents: ChatContentsType[];
  pagination: ChatPaginationType | undefined;
}) => {
  const { chatPartners, chatContents, pagination } = props;
  const hostId = 1;
  const currentUserId = 2 as number;
  const isHost = currentUserId === hostId;

  return (
    <S.ChatSpaceBodyContainer>
      <S.ChatBubbleGuestContainer isHost={true}>
        <S.ChatGuestImage>
          <Image
            src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/chat/User-orange.svg"
            alt="GuestImage"
            width="24"
            height="24"
          />
        </S.ChatGuestImage>
        <S.ChatBubbleGuestCenter>
          <S.ChatGuestName>원동건 님</S.ChatGuestName>
          <S.ChatBubble isHost={true}>
            <span>안녕 재진아</span>
          </S.ChatBubble>
        </S.ChatBubbleGuestCenter>
        <S.ChatTimeBox>16:40</S.ChatTimeBox>
      </S.ChatBubbleGuestContainer>
      {/* 분기 */}
      <S.ChatBubbleHostContainer isHost={false}>
        <S.ChatTimeBox>16:42</S.ChatTimeBox>
        <S.ChatBubble isHost={false}>
          <span>
            네형 네형네형네형네형네형네형네형네형네형네형네형네형네형네형
          </span>
        </S.ChatBubble>
      </S.ChatBubbleHostContainer>
      <TimeStamp />
    </S.ChatSpaceBodyContainer>
  );
};

export default ChatSpaceBody;
