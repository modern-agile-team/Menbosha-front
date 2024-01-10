import React, { useEffect } from 'react';
import * as S from './styled';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import {
  ChatPartnerAtom,
  ChatRoomListAtom,
} from '@/recoil/atoms/ChatRoomListAtom';
import {
  ChatPartnerType,
  ChatRoomListPropsType,
  ChatRoomListType,
} from '@/types/chat';

const ChatRoomListBox = ({ chatRooms }: { chatRooms: ChatRoomListType[] }) => {
  return (
    <S.ListContainer>
      {chatRooms.map((data) => {
        console.log('::::', data);
        const createdAtDate = new Date(data.chatRooms.chat.createdAt);
        const hours = createdAtDate.getHours();
        const minutes = createdAtDate.getMinutes().toString().padStart(2, '0');
        return (
          <S.ChatRoomListArea key={data.chatRooms._id} {...data}>
            <S.ChatRoomInfoBox key={data.chatPartner[0].id}>
              <S.ChatListLeft>
                <S.ChatListGuestImage>
                  <Image
                    src="/UserIcon.svg"
                    alt="GuestIcon"
                    width="24"
                    height="24"
                  />
                </S.ChatListGuestImage>
                <S.ChatListCenter>
                  <S.ChatListGuestName>
                    {data.chatPartner[0].name}
                  </S.ChatListGuestName>
                  <S.ChatListPrevText>
                    <span>{data.chatRooms.chat.content}</span>
                  </S.ChatListPrevText>
                </S.ChatListCenter>
              </S.ChatListLeft>
              <S.ChatListRight>
                <span>{`${hours}:${minutes}`}</span>
                <S.UnreadMessage>
                  <span>{data.chatRooms.unReadChatCount}</span>
                </S.UnreadMessage>
              </S.ChatListRight>
            </S.ChatRoomInfoBox>
          </S.ChatRoomListArea>
        );
      })}
    </S.ListContainer>
  );
};

export default ChatRoomListBox;
