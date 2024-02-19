import ChatSpaceBody from '@/components/molecules/chat-space-elements/chat-space-body/ChatSpaceBody';
import ChatSpaceFooter from '@/components/molecules/chat-space-elements/chat-space-footer/ChatSpaceFooter';
import ChatSpaceHeader from '@/components/molecules/chat-space-elements/chat-space-header/ChatSpaceHeader';
import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useRecoilState, useRecoilValue } from 'recoil';
import { SelectedRoomIdAtom } from '@/recoil/atoms/SelectedRoomIdAtom';
import CHAT from '@/apis/chat';
import { ChatHistoryAtom } from '@/recoil/atoms/ChatHistoryAtom';
import { ChatPartnersAtom } from '@/recoil/atoms/ChatPartnersAtom';
import {
  ChatContentsType,
  ChatHistoryType,
  ChatPaginationType,
  ChatPartnersType,
} from '@/types/chat';
import { log } from 'console';

const ChatSpace = () => {
  const selectedRoomId = useRecoilValue(SelectedRoomIdAtom);
  const [chatHistory, setChatHistory] = useState<ChatHistoryType[]>([]);
  const [pagination, setPagination] = useState<ChatPaginationType>();
  const [chatContents, setChatContents] = useState<ChatContentsType[]>([]);
  const [chatPartners, setChatPartners] = useState<ChatPartnersType>();
  const page = 1;
  const pageSize = 5; // 무한 스크롤 구현 전까지 일단 기본값
  // 채팅내역 불러오기 api ,테스트가 전부 끝나면 try-catch 삭제 예정
  const getChatHistoryApi = async () => {
    try {
      const res = await CHAT.getChatHistory(selectedRoomId, page, pageSize);
      const temp = {
        currentPage: res.currentPage,
        hasNext: res.hasNext,
        lastPage: res.lastPage,
        nextPage: res.nextPage,
        pageSize: res.pageSize,
        totalCount: res.totalCount,
      };
      setChatHistory(res); //일단 안씁니다.
      setPagination(temp);
      setChatContents(res.chats);
      setChatPartners(res.chatPartners[0]);
    } catch (error) {
      console.error('에러:', error);
    }
  };

  useEffect(() => {
    if (selectedRoomId) {
      getChatHistoryApi();
      console.log('::::::', chatHistory);
      console.log(chatPartners);
      // console.log(pagination);
    }
  }, [selectedRoomId]);

  return (
    <S.ChatSpaceContainer>
      <ChatSpaceHeader chatPartners={chatPartners} />
      <ChatSpaceBody
        pagination={pagination}
        chatPartners={chatPartners}
        chatContents={chatContents}
      />
      <ChatSpaceFooter />
    </S.ChatSpaceContainer>
  );
};

export default ChatSpace;
