import React, { useEffect } from 'react';
import * as S from './styled';
import Image from 'next/image';
import { ChatRoomListType } from '@/types/chat';
import { useRecoilValue } from 'recoil';
import { ChatRoomListAtom } from '@/recoil/atoms/ChatRoomListAtom';
import useModal from '@/hooks/useModal';

const ChatRoomListBox = () => {
  const getChatRoomList = useRecoilValue(ChatRoomListAtom);
  const { isOpenModal, handleModal } = useModal();

  const handleChatRoomDelete: React.MouseEventHandler<HTMLLIElement> = (e) => {
    e.preventDefault();
    handleModal(); // Open the modal
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
            onContextMenu={handleChatRoomDelete}>
            <S.ChatRoomInfoBox key={data.chatPartner[0].id}>
              <S.ChatListLeft>
                <S.ChatListGuestImage>
                  <Image
                    src="/UserIcon-Red.png"
                    alt="GuestIcon"
                    width="24"
                    height="24"
                  />
                </S.ChatListGuestImage>
                <S.ChatListCenter>
                  <S.ChatListGuestName>
                    {data.chatPartner[0].name}
                  </S.ChatListGuestName>
                  <S.ChatListPrevText>
                    <span>{data.chatRooms.chat.content}</span>
                  </S.ChatListPrevText>
                </S.ChatListCenter>
              </S.ChatListLeft>
              <S.ChatListRight>
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
          <button onClick={handleModal}>채팅방 나가기</button>
        </div>
      )}
    </S.ListContainer>
  );
};

export default ChatRoomListBox;
