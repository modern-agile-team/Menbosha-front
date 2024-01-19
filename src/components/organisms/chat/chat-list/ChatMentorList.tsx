import React from 'react';
import * as S from './styled';
import Image from 'next/image';
import MentorListBox from '@/components/molecules/chat-list-area/mentor-list-box/MentorListBox';

const ChatMentorList = () => {
  return (
    <S.MentorListContainer>
      <S.SearchMentorBox>
        <span>멘토 리스트</span>
        {/* <S.SearchInputBox></S.SearchInputBox> */}
        <Image
          src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/chat/ChatSearchIcon.svg"
          alt="SearchIcon"
          width="24"
          height="24"
        />
      </S.SearchMentorBox>
      <MentorListBox />
    </S.MentorListContainer>
  );
};

export default ChatMentorList;
