import React from 'react';
import * as S from './styled';
import Image from 'next/image';
import ChatRoomListBox from '@/components/molecules/chat-list-area/chat-list-box/ChatListBox';
import { ChatRoomListPropsType } from '@/types/chat';

const ChatRoomList = ({
  chatRooms,
}: {
  chatRooms: ChatRoomListPropsType[];
}) => {
  return (
    <S.ChatRoomListContainer>
      <S.ChatRoomListHeader>
        <span>열려 있는 채팅방</span>
      </S.ChatRoomListHeader>
      <ChatRoomListBox chatRooms={chatRooms} />
    </S.ChatRoomListContainer>
  );
};

export default ChatRoomList;
