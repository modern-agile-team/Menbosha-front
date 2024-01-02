import * as S from './styled';
import ChatNavbar from '../organisms/chat/chat-navbar/ChatNavbar';
import ChatSearchList from '../organisms/chat/chat-list/ChatSearchList';
import ChatRoomList from '../organisms/chat/chat-list/ChatRoomList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { MentorInfoAtom } from '@/recoil/atoms/MentorInfoAtom';
import ChatSpace from '../organisms/chat/chat-space/ChatSpace';
import { ChatRoomListAtom } from '@/recoil/atoms/ChatRoomListAtom';
import CHAT from '@/apis/chatApi/chat';
import { ChatRoomListType, MentorInfoType } from '@/types/chat';

const ChatPageTemplate = () => {
  const [getChatRoomList, setGetChatRoomList] =
    useRecoilState<ChatRoomListType[]>(ChatRoomListAtom);
  const [getMentorInfo, setGetMentorInfo] =
    useRecoilState<MentorInfoType[]>(MentorInfoAtom);

  /** 채팅룸 전체조회 api */
  const getChatRoomListApi = async () => {
    const res = await CHAT.getChatRoomList();
    setGetChatRoomList(res);
    console.log(res);
  };

  /** 채팅룸 전체조회 Guest데이터 */
  const GuestInfo = getChatRoomList.map;

  /** 멘토리스트 전체조회 api (mock) */
  const getMentorInfoApi = async () => {
    const res = await axios.get('/api/mento');
    setGetMentorInfo(res.data);
  };

  useEffect(() => {
    getMentorInfoApi();
    getChatRoomListApi();
  }, []);

  return (
    <S.PageWrapperRaw>
      <ChatNavbar />
      <ChatSearchList />
      <ChatRoomList />
      <ChatSpace />
    </S.PageWrapperRaw>
  );
};

export default ChatPageTemplate;
