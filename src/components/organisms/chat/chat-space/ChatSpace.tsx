import ChatSpaceBody from '@/components/molecules/chat-space-elements/chat-space-body/ChatSpaceBody';
import ChatSpaceFooter from '@/components/molecules/chat-space-elements/chat-space-footer/ChatSpaceFooter';
import ChatSpaceHeader from '@/components/molecules/chat-space-elements/chat-space-header/ChatSpaceHeader';
import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useRecoilValue } from 'recoil';
import { SelectedRoomIdAtom } from '@/recoil/atoms/SelectedRoomIdAtom';
import CHAT from '@/apis/chatApi/chat';

const ChatSpace = () => {
  const selectedRoomId = useRecoilValue(SelectedRoomIdAtom);
  const [chatHistory, setChatHistory] = useState([]);
  const page = 1;
  const pageSize = 5; // 무한 스크롤 구현 전까지 일단 기본값
  // 채팅내역 불러오기 api
  const getChatHistoryApi = async () => {
    try {
      const res = await CHAT.getChatHistory(selectedRoomId, page, pageSize);
      setChatHistory(res);
      console.log('채팅 내역:', res);
    } catch (error) {
      console.error('에러:', error);
    }
  };

  useEffect(() => {
    if (selectedRoomId) {
      getChatHistoryApi();
      console.log(selectedRoomId);
    }
  }, [selectedRoomId]);

  return (
    <S.ChatSpaceContainer>
      <ChatSpaceHeader />
      <ChatSpaceBody />
      <ChatSpaceFooter />
    </S.ChatSpaceContainer>
  );
};

export default ChatSpace;
