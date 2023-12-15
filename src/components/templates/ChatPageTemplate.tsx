import React from 'react';
import * as S from './styled';
import ChatNavbar from '../organisms/chat/chat-navbar/ChatNavbar';

const ChatPageTemplate = () => {
  return (
    <S.PageWrapper>
      <ChatNavbar />
    </S.PageWrapper>
  );
};

export default ChatPageTemplate;
