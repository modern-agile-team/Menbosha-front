import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ChatRoomListAtom } from '@/recoil/atoms/ChatRoomListAtom';
import useModal from '@/hooks/useModal';
import ChatRoomOutModal from './ChatRoomOutModal';
import useReplace from '@/hooks/useReplace';
import { SelectedRoomIdAtom } from '@/recoil/atoms/SelectedRoomIdAtom';
import { useSocket } from '@/hooks/useSocket';
import { MyIdType } from '@/components/templates/ChatPageTemplate';
import { ChatPartnersAtom } from '@/recoil/atoms/ChatPartnersAtom';

let chatPartnerName = '';

const ChatRoomListBox = (myId: MyIdType) => {
  const getChatRoomList = useRecoilValue(ChatRoomListAtom);
  const [selectedRoomId, setSelectedRoomId] =
    useRecoilState(SelectedRoomIdAtom);
  // const chatPartners = useRecoilValue(ChatPartnersAtom);
  const selectRoom = useReplace();
  const [rightClickedRoomId, setRightClickedRoomId] = useState<string>('');
  const [rightClickedPartnerName, setRightClickedPartnerName] =
    useState<string>('');
  const { isOpenModal, handleModal } = useModal();
  const socket = useSocket();

  const handleRoomSelect = (roomId: string) => {
    const selectedRoom = getChatRoomList.find(
      (data) => data.chatRooms._id === roomId,
    );
    if (selectedRoom) {
      chatPartnerName = selectedRoom.chatPartners[0].name;

      const queryURL = {
        roomId: roomId,
      };
      selectRoom(`${roomId}`, queryURL);
      setSelectedRoomId(roomId);
    }
  };

  // 마우스 우클릭 시 삭제 모달 핸들러
  const handleChatRoomDelete: React.MouseEventHandler<HTMLLIElement> = (e) => {
    e.preventDefault();
    const roomId = e.currentTarget.getAttribute('data-room-id');
    const partnerName = e.currentTarget.getAttribute('data-partner-name');

    if (roomId && partnerName) {
      setRightClickedRoomId(roomId);
      setRightClickedPartnerName(partnerName);
      handleModal();
    }
  };

  return (
    <S.ListContainer>
      {getChatRoomList.map((data) => {
        const createdAtDate = new Date(data.chatRooms.chat.createdAt);
        const hours = createdAtDate.getHours();
        const minutes = createdAtDate.getMinutes().toString().padStart(2, '0');
        // 초기 채팅방 생성시엔 chat.createdAt이 number타입이 아니기 때문에
        // 조건을 부여해서 isNaN이면 랜더링 안하는 것으로 했습니다.
        const isValidTime =
          !isNaN(createdAtDate.getHours()) &&
          !isNaN(createdAtDate.getMinutes());
        const getAmPm = (hours: number): string => {
          return hours >= 12 ? '오후' : '오전';
        };
        return (
          <S.ChatRoomListArea
            key={data.chatRooms._id}
            data-room-id={data.chatRooms._id}
            data-partner-name={data.chatPartners[0].name}
            {...data}
            onContextMenu={handleChatRoomDelete}
            onClick={() => handleRoomSelect(data.chatRooms._id)}
            isSelected={selectedRoomId === data.chatRooms._id}>
            {data.chatPartners.length !== 0 && (
              <S.ChatRoomInfoBox key={data.chatPartners[0].id}>
                <S.ChatListLeft>
                  <S.ChatListGuestImage
                    isSelected={selectedRoomId === data.chatRooms._id}
                    src={data.chatPartners[0].userImage}
                    alt="GuestImage"
                  />
                  <S.ChatListCenter>
                    <S.ChatListGuestName
                      isSelected={selectedRoomId === data.chatRooms._id}>
                      {data.chatPartners[0].name}
                    </S.ChatListGuestName>
                    <S.ChatListPrevText
                      isSelected={selectedRoomId === data.chatRooms._id}>
                      <span>{data.chatRooms.chat.content}</span>
                    </S.ChatListPrevText>
                  </S.ChatListCenter>
                </S.ChatListLeft>
                <S.ChatListRight
                  isSelected={selectedRoomId === data.chatRooms._id}>
                  {isValidTime && (
                    <span>{`${getAmPm(hours)} ${
                      hours % 12 || 12
                    }:${minutes}`}</span>
                  )}
                  {selectedRoomId !== data.chatRooms._id &&
                    data.chatRooms.unReadChatCount > 0 && (
                      <S.UnreadMessage>
                        <span>{data.chatRooms.unReadChatCount}</span>
                      </S.UnreadMessage>
                    )}
                </S.ChatListRight>
              </S.ChatRoomInfoBox>
            )}
          </S.ChatRoomListArea>
        );
      })}
      {isOpenModal && (
        <>
          <ChatRoomOutModal
            show={isOpenModal}
            hide={handleModal}
            chatRoomId={rightClickedRoomId}
            partnerName={rightClickedPartnerName}
          />
        </>
      )}
    </S.ListContainer>
  );
};

export default ChatRoomListBox;
