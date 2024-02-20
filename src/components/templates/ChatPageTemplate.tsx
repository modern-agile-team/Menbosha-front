import * as S from './styled';
import ChatNavbar from '../organisms/chat/chat-navbar/ChatNavbar';
import ChatRoomList from '../organisms/chat/chat-list/ChatRoomList';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import ChatSpace from '../organisms/chat/chat-space/ChatSpace';
import CHAT from '@/apis/chat';
import { ChatRoomListType, MentorInfoType } from '@/types/chat';
import ChatMentorList from '../organisms/chat/chat-list/ChatMentorList';
import { ChatRoomListAtom } from '@/recoil/atoms/ChatRoomListAtom';
import USER from '@/apis/user';
import { MyIdAtom } from '@/recoil/atoms/MyIdAtom';

const ChatPageTemplate = () => {
  const [getChatRoomList, setGetChatRoomList] =
    useRecoilState<ChatRoomListType[]>(ChatRoomListAtom);
  const [getMyId, setMyId] = useRecoilState(MyIdAtom);

  const getMyIdApi = async () => {
    const res = await USER.getMyInfo();
    setMyId(res.id);
  };

  useEffect(() => {
    getMyIdApi();
  }, []);

  useEffect(() => {
    console.log(getMyId);
  }, [getMyIdApi]);

  // 모킹데이터
  // const [getMentorInfo, setGetMentorInfo] =
  //   useRecoilState<MentorInfoType[]>(MentorInfoAtom);

  /** 채팅룸 전체조회 api */
  const getChatRoomListApi = async () => {
    const res = await CHAT.getChatRoomList();
    setGetChatRoomList(res.chatRooms);
  };

  /** 멘토리스트 전체조회 api (mock) */
  // const getMentorInfoApi = async () => {
  //   const res = await axios.get('/api/mento');
  //   setGetMentorInfo(res.data);
  // };

  useEffect(() => {
    // getMentorInfoApi();
    getChatRoomListApi();
  }, []);

  return (
    <S.PageWrapperRaw>
      <ChatNavbar />
      <ChatMentorList />
      <ChatRoomList />
      <ChatSpace />
    </S.PageWrapperRaw>
  );
};

export default ChatPageTemplate;
