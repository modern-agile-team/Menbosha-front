import ChatSpaceBody from '@/components/molecules/chat-space-elements/chat-space-body/ChatSpaceBody';
import ChatSpaceFooter from '@/components/molecules/chat-space-elements/chat-space-footer/ChatSpaceFooter';
import ChatSpaceHeader from '@/components/molecules/chat-space-elements/chat-space-header/ChatSpaceHeader';
import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useRecoilState, useRecoilValue } from 'recoil';
import { SelectedRoomIdAtom } from '@/recoil/atoms/SelectedRoomIdAtom';
import CHAT from '@/apis/chat';
import {
  ChatContentsType,
  ChatPaginationType,
  ChatPartnersType,
} from '@/types/chat';
import { ChatContentsAtom } from '@/recoil/atoms/ChatContentsAtom';
import { MyIdType } from '@/components/templates/ChatPageTemplate';
import { ChatPartnersAtom } from '@/recoil/atoms/ChatPartnersAtom';
import { ChatRoomListAtom } from '@/recoil/atoms/ChatRoomListAtom';

const ChatSpace = (myId: MyIdType) => {
  const selectedRoomId = useRecoilValue(SelectedRoomIdAtom);
  const [pagination, setPagination] = useState<ChatPaginationType>();
  // const [chatContents, setChatContents] = useState<ChatContentsType[]>([]);
  const [getChatContents, setGetChatContents] =
    useRecoilState<ChatContentsType[]>(ChatContentsAtom);
  const [chatPartners, setChatPartners] =
    useRecoilState<ChatPartnersType>(ChatPartnersAtom);
  const chatRoomList = useRecoilValue(ChatRoomListAtom);
  const page = 1;
  const pageSize = 100; // 무한 스크롤 구현 전까지 일단 기본값
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
      // setChatHistory(res);
      setPagination(temp);
      setGetChatContents(res.chats);
      setChatPartners(res.chatPartners[0]);
    } catch (error) {
      console.error('에러:', error);
    }
  };

  useEffect(() => {
    if (selectedRoomId) {
      getChatHistoryApi();
    }
  }, [selectedRoomId]);
  console.log('::::::::::::', selectedRoomId);

  return (
    <S.ChatSpaceContainer>
      <ChatSpaceHeader chatPartners={chatPartners} />
      <ChatSpaceBody pagination={pagination} chatPartners={chatPartners} />
      <ChatSpaceFooter myId={myId.myId} />
    </S.ChatSpaceContainer>
  );
};

export default ChatSpace;
