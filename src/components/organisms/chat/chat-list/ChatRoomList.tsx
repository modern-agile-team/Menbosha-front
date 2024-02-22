import React from 'react';
import * as S from './styled';
import ChatRoomListBox from '@/components/molecules/chat-list-area/chat-list-box/ChatRoomListBox';
import { MyIdType } from '@/components/templates/ChatPageTemplate';

const ChatRoomList = (myId: MyIdType) => {
  return (
    <S.ChatRoomListContainer>
      <S.ChatRoomListHeader>
        <span>열려 있는 채팅방</span>
      </S.ChatRoomListHeader>
      <ChatRoomListBox myId={myId.myId} />
    </S.ChatRoomListContainer>
  );
};

export default ChatRoomList;
