import * as S from './styled';
import ChatNavbar from '../organisms/chat/chat-navbar/ChatNavbar';
import ChatRoomList from '../organisms/chat/chat-list/ChatRoomList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { MentorInfoAtom } from '@/recoil/atoms/MentorInfoAtom';
import ChatSpace from '../organisms/chat/chat-space/ChatSpace';
import {
  ChatPartnerAtom,
  ChatRoomListAtom,
} from '@/recoil/atoms/ChatRoomListAtom';
import CHAT from '@/apis/chatApi/chat';
import {
  ChatPartnerType,
  ChatRoomListType,
  MentorInfoType,
} from '@/types/chat';
import ChatMentorList from '../organisms/chat/chat-list/ChatMentorList';

const ChatPageTemplate = () => {
  const [renderState, setRenderState] = useState(false);
  const [getChatRoomList, setGetChatRoomList] =
    useRecoilState<ChatRoomListType[]>(ChatRoomListAtom);
  const [getMentorInfo, setGetMentorInfo] =
    useRecoilState<MentorInfoType[]>(MentorInfoAtom);
  const [getChatPartner, setGetChatPartner] =
    useRecoilState<ChatPartnerType[]>(ChatPartnerAtom);

  /** 채팅룸 전체조회 api */
  const getChatRoomListApi = async () => {
    const res = await CHAT.getChatRoomList();
    setGetChatRoomList(res);

    setGetChatPartner(res.chatRooms);
    setRenderState(true);
  };

  /** 멘토리스트 전체조회 api (mock) */
  const getMentorInfoApi = async () => {
    const res = await axios.get('/api/mento');
    setGetMentorInfo(res.data);
  };

  useEffect(() => {
    getMentorInfoApi();
    getChatRoomListApi();
  }, []);

  useEffect(() => {
    console.log('123', getChatRoomList);
    console.log('321', getChatPartner);
  });

  return (
    <S.PageWrapperRaw>
      {renderState && (
        <>
          <ChatNavbar />
          <ChatMentorList />
          <ChatRoomList />
          <ChatSpace />
        </>
      )}
    </S.PageWrapperRaw>
  );
};

export default ChatPageTemplate;
