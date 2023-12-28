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
import instance from '@/apis/axiosInstance';
import CHAT from '@/apis/chatApi/chat';

export type MentorInfoType = {
  id: number;
  name: string;
  image: string;
  mainField: string;
};

export interface ChatRoomListType {
  statusCode: number;
  data: [
    {
      chatRooms: {
        _id: string;
        hostId: number;
        guestId: number;
        createdAt: string;
        chatCount: number;
        chat: {
          content: string;
          isSeen: boolean;
          createdAt: string;
        };
      };
      chatPartner: {
        id: number;
        name: string;
        userImage: string;
      };
    },
  ];
}

const ChatPageTemplate = () => {
  const [getChatRoomList, setGetChatRoomList] =
    useRecoilState<ChatRoomListType[]>(ChatRoomListAtom);

  const [getMentorInfo, setGetMentorInfo] =
    useRecoilState<MentorInfoType[]>(MentorInfoAtom);
  // api요청;
  const getChatRoomListApi = async () => {
    const res = await CHAT.getChatRoomList();
    setGetChatRoomList(res);
    console.log(res);
  };

  const getMentorInfoApi = async () => {
    const res = await axios.get('/api/mento');
    setGetMentorInfo(res.data);
  };

  useEffect(() => {
    getMentorInfoApi();
  }, []);

  // useEffect(() => {
  //   getChatRoomListApi();
  // }, []);

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
