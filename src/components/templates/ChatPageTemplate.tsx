import * as S from './styled';
import ChatNavbar from '../organisms/chat/chat-navbar/ChatNavbar';
import ChatRoomList from '../organisms/chat/chat-list/ChatRoomList';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import ChatSpace from '../organisms/chat/chat-space/ChatSpace';
import CHAT from '@/apis/chat';
import { ChatRoomListType, MentorInfoType } from '@/types/chat';
import ChatMentorList from '../organisms/chat/chat-list/ChatMentorList';
import { ChatRoomListAtom } from '@/recoil/atoms/ChatRoomListAtom';
import USER from '@/apis/user';
import { ChatContentsAtom } from '@/recoil/atoms/ChatContentsAtom';
export interface MyIdType {
  myId: number;
}

const ChatPageTemplate = () => {
  const [getChatRoomList, setGetChatRoomList] =
    useRecoilState<ChatRoomListType[]>(ChatRoomListAtom);
  const [myId, setMyId] = useState(0);
  const chatContents = useRecoilValue(ChatContentsAtom);
  const page = 1;
  const pageSize = 100;

  /** 본인 id넘버 조회 api */
  const getMyIdApi = async () => {
    const res = await USER.getMyInfo();
    setMyId(res.id);
  };

  useEffect(() => {
    getMyIdApi();
  }, []);

  /** 채팅룸 전체조회 api */
  const getChatRoomListApi = async () => {
    const res = await CHAT.getChatRoomList(page, pageSize);
    setGetChatRoomList(res.chatRooms);
  };

  useEffect(() => {
    getChatRoomListApi();
  }, [chatContents]);

  useEffect(() => {
    getChatRoomListApi();
  }, []);

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
