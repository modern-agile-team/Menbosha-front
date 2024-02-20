import React from 'react';
import * as S from './styled';
import { ChatRoomListType } from '@/types/chat';
import ChatRoomListBox from '@/components/molecules/chat-list-area/chat-list-box/ChatRoomListBox';

const ChatRoomList = () => {
  return (
    <S.ChatRoomListContainer>
      <S.ChatRoomListHeader>
        <span>열려 있는 채팅방</span>
      </S.ChatRoomListHeader>
      <ChatRoomListBox />
    </S.ChatRoomListContainer>
  );
};

export default ChatRoomList;
