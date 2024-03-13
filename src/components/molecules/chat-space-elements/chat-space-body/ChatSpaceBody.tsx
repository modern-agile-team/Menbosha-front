import React, { useEffect, useRef, useState } from 'react';
import * as S from './styled';
import TimeStamp from '../time-stamp/TimeStamp';
import {
  ChatContentsType,
  ChatPaginationType,
  ChatPartnersType,
} from '@/types/chat';
import { useRecoilValue } from 'recoil';
import { ChatContentsAtom } from '@/recoil/atoms/ChatContentsAtom';
import useModal from '@/hooks/useModal';
import ChatDeleteModal from './ChatDeleteModal';
import { SelectedRoomIdAtom } from '@/recoil/atoms/SelectedRoomIdAtom';
import { MyIdType } from '@/components/templates/ChatPageTemplate';

const ChatSpaceBody = (props: {
  chatPartners: ChatPartnersType | undefined;
  pagination: ChatPaginationType | undefined;
}) => {
  const { chatPartners, pagination } = props;
  const chatPartnerId = chatPartners?.id;
  const chatContents = useRecoilValue<ChatContentsType[]>(ChatContentsAtom);
  const [selectedChatId, setSelectedChatId] = useState<string | undefined>(
    undefined,
  );
  const selectedRoomId = useRecoilValue(SelectedRoomIdAtom);
  const { isOpenModal, handleModal } = useModal();
  const ChatSpaceBodyRef = useRef<HTMLDivElement | null>(null);
  const chatContentsInOrder = [...chatContents];

  const isRoomSelected = selectedRoomId !== '';

  // 채팅 생성 날짜
  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };
  let currentDate: Date | null = null;

  console.log(selectedRoomId);

  // 채팅내역 삭제 모달 핸들러
  const handleChatDelete =
    (messageId: string) =>
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      const isHostMessage =
        chatContents.find((message) => message._id === messageId)?.senderId !==
        chatPartners?.id;

      if (isHostMessage) {
        setSelectedChatId(messageId);
        handleModal();
      } else {
        alert('상대방의 채팅은 삭제할 수 없습니다.');
      }
    };

  // 처음 채팅방 입장시 && 채팅이 업데이트 됐을 때 스크롤 위치 최하단으로 이동
  useEffect(() => {
    if (ChatSpaceBodyRef.current) {
      setTimeout(() => {
        if (ChatSpaceBodyRef.current) {
          ChatSpaceBodyRef.current.scrollTop =
            ChatSpaceBodyRef.current.scrollHeight;
        }
      }, 0);
    }
  }, [selectedRoomId, chatContents]);

  if (!isRoomSelected) {
    return (
      <S.EmptyContainer>
        채팅 시작을 위해 채팅방을 선택해주세요.
      </S.EmptyContainer>
    );
  }

  return (
    <S.ChatSpaceBodyContainer ref={ChatSpaceBodyRef}>
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
                    <S.ChatTimeBox isHost={true}>{`${getAmPm(hours)} ${
                      hours % 12 || 12
                    }:${minutes}`}</S.ChatTimeBox>
                  )}
                </S.ChatBubbleGuestContainer>
              ) : (
                <S.ChatBubbleHostContainer>
                  {!isSameDay(currentDate, createdAtDate) && (
                    <TimeStamp date={createdAtDate} />
                  )}
                  {isValidTime && (
                    <S.ChatTimeBox isHost={false}>{`${getAmPm(hours)} ${
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
              key={data._id}
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
