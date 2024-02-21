import React, { useState } from 'react';
import * as S from './styled';
import TimeStamp from '../time-stamp/TimeStamp';
import Image from 'next/image';
import {
  ChatContentsType,
  ChatPaginationType,
  ChatPartnersType,
} from '@/types/chat';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ChatContentsAtom } from '@/recoil/atoms/ChatContentsAtom';
import useModal from '@/hooks/useModal';
import ChatDeleteModal from './ChatDeleteModal';

const ChatSpaceBody = (props: {
  chatPartners: ChatPartnersType | undefined;
  // chatContents: ChatContentsType[];
  pagination: ChatPaginationType | undefined;
}) => {
  const { chatPartners, pagination } = props;
  const chatPartnerId = chatPartners?.id;
  const chatContents = useRecoilValue<ChatContentsType[]>(ChatContentsAtom);
  const [selectedChatId, setSelectedChatId] = useState<string | undefined>(
    undefined,
  );
  const { isOpenModal, handleModal } = useModal();
  const chatContentsInOrder = [...chatContents];

  // 채팅 생성 날짜
  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };
  let currentDate: Date | null = null;

  // 채팅내역 삭제 모달 핸들러
  const handleChatDelete =
    (messageId: string) =>
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      setSelectedChatId(messageId);
      handleModal();
    };
  console.log('ChatSpaceBody re-rendering');

  return (
    <S.ChatSpaceBodyContainer>
      {chatContentsInOrder.reverse().map((message) => {
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
            <div
              onContextMenu={handleChatDelete(message._id)}
              data-message-id={message._id}>
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
          </div>
        );
      })}
      {isOpenModal && (
        <>
          {chatContentsInOrder.reverse().map((data) => (
            <ChatDeleteModal
              show={isOpenModal}
              hide={handleModal}
              roomId={data.chatRoomId}
              chatId={selectedChatId}
            />
          ))}
        </>
      )}
    </S.ChatSpaceBodyContainer>
  );
};

export default ChatSpaceBody;
