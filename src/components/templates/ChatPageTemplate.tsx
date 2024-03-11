import * as S from './styled';
import ChatNavbar from '../organisms/chat/chat-navbar/ChatNavbar';
import ChatRoomList from '../organisms/chat/chat-list/ChatRoomList';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import ChatSpace from '../organisms/chat/chat-space/ChatSpace';
import CHAT from '@/apis/chat';
import { ChatRoomListType, MentorInfoType } from '@/types/chat';
import ChatMentorList from '../organisms/chat/chat-list/ChatMentorList';
import { ChatRoomListAtom } from '@/recoil/atoms/ChatRoomListAtom';
import USER from '@/apis/user';
import { ChatContentsAtom } from '@/recoil/atoms/ChatContentsAtom';
import { useSocket } from '@/hooks/useSocket';
export interface MyIdType {
  myId: number;
}

const ChatPageTemplate = () => {
  const [getChatRoomList, setGetChatRoomList] =
    useRecoilState<ChatRoomListType[]>(ChatRoomListAtom);
  const [myId, setMyId] = useState(0);
  const [readyMyId, setReadyMyId] = useState(false);
  const chatContents = useRecoilValue(ChatContentsAtom);
  const page = 1;
  const pageSize = 100;
  const socket = useSocket();

  const allChatRoomId = getChatRoomList.map((data) => data.chatRooms._id);
  const emitData = { userId: myId, chatRoomIds: allChatRoomId };

  /** 본인 id넘버 조회 api */
  const getMyIdApi = async () => {
    const res = await USER.getMyInfo();
    setMyId(res.id);
    setReadyMyId(true);
  };

  useEffect(() => {
    getMyIdApi();
  }, []);
  console.log(myId);

  /** 채팅룸 전체조회 api */
  const getChatRoomListApi = async () => {
    const res = await CHAT.getChatRoomList(page, pageSize);
    setGetChatRoomList(res.chatRooms);
  };

  useEffect(() => {
    getChatRoomListApi();
  }, [chatContents]);

  // useEffect(() => {
  //   getChatRoomListApi();
  // }, []);

  const joinSocket = useCallback(() => {
    if (socket && readyMyId === true) {
      console.log('Room Join', {
        userId: myId,
        chatRoomIds: allChatRoomId,
      });

      socket.emit('login', emitData);

      socket.on('error', (error: any) => {
        console.log(error);
      });
      socket.on('join', (join: any) => {
        console.log('Room Join 성공', join);
      });
    }
  }, [socket]);

  useEffect(() => {
    joinSocket();
  }, [socket]);

  return (
    <S.PageWrapperRaw>
      <ChatNavbar />
      <ChatMentorList />
      <ChatRoomList myId={myId} />
      <ChatSpace myId={myId} />
    </S.PageWrapperRaw>
  );
};

export default ChatPageTemplate;
