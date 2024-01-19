import React, { useEffect, useState } from 'react';
import * as S from './styled';
import Image from 'next/image';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ChatRoomListAtom } from '@/recoil/atoms/ChatRoomListAtom';
import useModal from '@/hooks/useModal';
import ChatRoomOutModal from './ChatRoomOutModal';
import useReplace from '@/hooks/useReplace';
import CHAT from '@/apis/chatApi/chat';
import { ChatHistoryAtom } from '@/recoil/atoms/ChatHistoryAtom';

const ChatRoomListBox = () => {
  const getChatRoomList = useRecoilValue(ChatRoomListAtom);
  const [getChatHistory, SetGetChatHistory] = useRecoilState(ChatHistoryAtom);
  const [selectedRoomId, setSelectedRoomId] = useState<string>('');
  const selectRoom = useReplace();
  const { isOpenModal, handleModal } = useModal();
  const page = 1;
  const pageSize = 5;

  useEffect(() => {
    const getChatHistoryApi = async () => {
      if (selectedRoomId) {
        const res = await CHAT.getChatHistory(selectedRoomId, page, pageSize);
        SetGetChatHistory(res);
        console.log(getChatHistory);
      }
    };

    getChatHistoryApi();
  }, [selectedRoomId]);

  const handleRoomSelect = (roomId: string) => {
    const queryURL = {
      roomId: roomId,
    };
    selectRoom(`${roomId}`, queryURL);
    setSelectedRoomId(roomId);
  };

  // 마우스 우클릭 시 삭제 모달 핸들러
  const handleChatRoomDelete: React.MouseEventHandler<HTMLLIElement> = (e) => {
    e.preventDefault();
    handleModal();
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

        return (
          <S.ChatRoomListArea
            key={data.chatRooms._id}
            {...data}
            onContextMenu={handleChatRoomDelete}
            onClick={() => handleRoomSelect(data.chatRooms._id)}
            isSelected={selectedRoomId === data.chatRooms._id}>
            <S.ChatRoomInfoBox key={data.chatPartner[0].id}>
              <S.ChatListLeft>
                {/* <S.ChatListGuestImage>
                  <img src={data.chatPartner[0].userImage} alt="GuestImage" />
                </S.ChatListGuestImage> */}
                <S.ChatListGuestImage
                  isSelected={selectedRoomId === data.chatRooms._id}
                  src={data.chatPartner[0].userImage}
                  alt="GuestImage"
                />
                <S.ChatListCenter>
                  <S.ChatListGuestName
                    isSelected={selectedRoomId === data.chatRooms._id}>
                    {data.chatPartner[0].name}
                  </S.ChatListGuestName>
                  <S.ChatListPrevText
                    isSelected={selectedRoomId === data.chatRooms._id}>
                    <span>{data.chatRooms.chat.content}</span>
                  </S.ChatListPrevText>
                </S.ChatListCenter>
              </S.ChatListLeft>
              <S.ChatListRight
                isSelected={selectedRoomId === data.chatRooms._id}>
                {isValidTime && <span>{`${hours}:${minutes}`}</span>}
                {data.chatRooms.unReadChatCount > 0 && (
                  <S.UnreadMessage>
                    <span>{data.chatRooms.unReadChatCount}</span>
                  </S.UnreadMessage>
                )}
              </S.ChatListRight>
            </S.ChatRoomInfoBox>
          </S.ChatRoomListArea>
        );
      })}
      {isOpenModal && (
        <div>
          {getChatRoomList.map((data) => (
            <ChatRoomOutModal
              show={isOpenModal}
              hide={handleModal}
              chatRoomId={data.chatRooms._id}
              partnerName={data.chatPartner[0].name}
            />
          ))}
        </div>
      )}
    </S.ListContainer>
  );
};

export default ChatRoomListBox;
