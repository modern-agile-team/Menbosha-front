import ChatSpaceBody from '@/components/molecules/chat-space-elements/chat-space-body/ChatSpaceBody';
import ChatSpaceFooter from '@/components/molecules/chat-space-elements/chat-space-footer/ChatSpaceFooter';
import ChatSpaceHeader from '@/components/molecules/chat-space-elements/chat-space-header/ChatSpaceHeader';
import React from 'react';
import * as S from './styled';

export interface ChatMembers {
  hostId: number;
  guestId: number;
}

const ChatSpace = () => {
  return (
    <S.ChatSpaceContainer>
      <ChatSpaceHeader />
      <ChatSpaceBody />
      <ChatSpaceFooter />
    </S.ChatSpaceContainer>
  );
};

export default ChatSpace;
