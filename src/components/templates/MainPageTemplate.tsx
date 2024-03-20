import React, { useCallback, useEffect, useState } from 'react';
import * as S from './styled';
import MainPageHeader from '@/components/common/header/MainPageHeader';
import MainPageFooter from '../common/footer/Footer';
import MainPageBody from '../organisms/mainpage-body/MainPageBody';
import { useSocket } from '@/hooks/useSocket';
import { ChatRoomListType } from '@/types/chat';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ChatRoomListAtom } from '@/recoil/atoms/ChatRoomListAtom';

const MainPageTemplate = () => {
  const [chatRoomList, setChatRoomList] =
    useRecoilState<ChatRoomListType[]>(ChatRoomListAtom);
  const [myId, setMyId] = useState(0);
  const [readyMyId, setReadyMyId] = useState(false);
  const socket = useSocket();

  const allChatRoomId = chatRoomList.map((data) => data.chatRooms._id);
  const emitData = { userId: myId, chatRoomIds: allChatRoomId };

  const joinSocket = useCallback(() => {
    if (socket && readyMyId === true && myId !== 0 && allChatRoomId) {
      console.log('Room Join', {
        userId: myId,
        chatRoomIds: allChatRoomId,
      });

      socket.emit('login', emitData);

      socket.on('error', (error: any) => {
        console.error('Socket error:', error);
      });
      socket.on('join', (join: any) => {
        console.log('Room Join 성공', join);
      });
    }
  }, [socket, readyMyId, allChatRoomId]);

  useEffect(() => {
    joinSocket();
  }, [myId, readyMyId, allChatRoomId]);

  return (
    <S.PageWrapper>
      <MainPageHeader />
      <MainPageBody />
      <MainPageFooter color={false} />
    </S.PageWrapper>
  );
};

export default MainPageTemplate;
