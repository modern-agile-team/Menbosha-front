import React from 'react';
import * as S from './styled';
import Image from 'next/image';
import { ListArea } from '@/components/molecules/chat-list-area/mentor-list-box/styled';
import MentorListBox from '@/components/molecules/chat-list-area/mentor-list-box/MentorListBox';

const ChatSearchList = () => {
  return (
    <S.ChatRoomListContainer>
      <S.SearchMentorBox>
        <span>멘토 리스트</span>
        {/* <S.SearchInputBox></S.SearchInputBox> */}
        <Image src="/SearchIcon.svg" alt="SearchIcon" width="24" height="24" />
      </S.SearchMentorBox>
      <MentorListBox />
    </S.ChatRoomListContainer>
  );
};

export default ChatSearchList;
