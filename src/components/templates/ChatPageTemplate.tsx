import * as S from './styled';
import ChatNavbar from '../organisms/chat/chat-navbar/ChatNavbar';
import ChatSearchList from '../organisms/chat/chat-list/ChatSearchList';
import ChatRoomList from '../organisms/chat/chat-list/ChatRoomList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { MentorInfoAtom } from '@/recoil/atoms/MentorInfoAtom';
import ChatSpace from '../organisms/chat/chat-space/ChatSpace';

export type MentorInfoType = {
  id: number;
  name: string;
  image: string;
  mainField: string;
};

const ChatPageTemplate = () => {
  const [getMentorInfo, setGetMentorInfo] =
    useRecoilState<MentorInfoType[]>(MentorInfoAtom);
  //api요청
  const getMentorInfoApi = async () => {
    const res = await axios.get('/api/mento');
    setGetMentorInfo(res.data);
  };

  useEffect(() => {
    getMentorInfoApi();
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
