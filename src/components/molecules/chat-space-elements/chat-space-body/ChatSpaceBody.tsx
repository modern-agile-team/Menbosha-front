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
  chatPartners: ChatPartnersType | undefined;
  chatContents: ChatContentsType[];
  pagination: ChatPaginationType | undefined;
}) => {
  const { chatPartners, chatContents, pagination } = props;
  const chatPartnerId = chatPartners?.id;
  const reverseContents = [...chatContents].reverse();

  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };
  let currentDate: Date | null = null;

  return (
    <S.ChatSpaceBodyContainer>
      {reverseContents.map((message) => {
        const isGuestMessage = message.senderId === chatPartnerId;
        const createdAtDate = new Date(message.createdAt);
        const hours = createdAtDate.getHours();
        const minutes = createdAtDate.getMinutes().toString().padStart(2, '0');
        const isValidTime =
          !isNaN(createdAtDate.getHours()) &&
          !isNaN(createdAtDate.getMinutes());
        // 오전 & 오후 추가
        const getAmPm = (hours: number): string => {
          return hours >= 12 ? '오후' : '오전';
        };
        // 날짜 확인 - timeStamp에 관련
        const isNewDate =
          !currentDate || !isSameDay(currentDate, createdAtDate);
        currentDate = createdAtDate; // currentDate 할당

        return (
          <div key={message._id}>
            {isNewDate && <TimeStamp date={createdAtDate} />}
            {isGuestMessage ? (
              <S.ChatBubbleGuestContainer>
                {chatPartners?.userImage && (
                  <S.ChatGuestImage
                    src={chatPartners.userImage}
                    alt="GuestImage"
                  />
                )}
                <S.ChatBubbleGuestCenter>
                  <S.ChatGuestName>{chatPartners?.name}</S.ChatGuestName>
                  <S.ChatBubble isHost={isGuestMessage}>
                    <span>{message.content}</span>
                  </S.ChatBubble>
                </S.ChatBubbleGuestCenter>
                {isValidTime && (
                  <S.ChatTimeBox>{`${getAmPm(hours)} ${
                    hours % 12 || 12
                  }:${minutes}`}</S.ChatTimeBox>
                )}
              </S.ChatBubbleGuestContainer>
            ) : (
              <S.ChatBubbleHostContainer>
                {!isSameDay(currentDate, createdAtDate) && (
                  <TimeStamp date={createdAtDate} />
                )}
                {/* 일단 TimeStamp가 상대방이나 본인이 채팅했을 때 날짜가 넘어가면
                찍혀야하므로 각각의 컴포넌트에 둘 다 박았더니 중복됨.
                따라서 일단 조건을 줘서 해결해봄. */}
                {isValidTime && (
                  <S.ChatTimeBox>{`${getAmPm(hours)} ${
                    hours % 12 || 12
                  }:${minutes}`}</S.ChatTimeBox>
                )}
                <S.ChatBubble isHost={false}>
                  <span>{message.content}</span>
                </S.ChatBubble>
              </S.ChatBubbleHostContainer>
            )}
          </div>
        );
      })}
    </S.ChatSpaceBodyContainer>
  );
};

export default ChatSpaceBody;
