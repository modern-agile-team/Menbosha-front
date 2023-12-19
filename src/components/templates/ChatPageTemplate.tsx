import React from 'react';
import * as S from './styled';
import ChatNavbar from '../organisms/chat/chat-navbar/ChatNavbar';
import ChatSearchList from '../organisms/chat/chat-list/ChatSearchList';
import ChatRoomList from '../organisms/chat/chat-list/ChatRoomList';

const ChatPageTemplate = () => {
  return (
    <S.PageWrapperRaw>
      <ChatNavbar />
      <ChatSearchList />
      <ChatRoomList />
    </S.PageWrapperRaw>
  );
};

export default ChatPageTemplate;
