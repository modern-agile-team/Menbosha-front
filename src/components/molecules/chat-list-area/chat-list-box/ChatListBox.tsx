import React, { useEffect } from 'react';
import * as S from './styled';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import {
  ChatPartnerAtom,
  ChatRoomListAtom,
} from '@/recoil/atoms/ChatRoomListAtom';
import { ChatPartnerType, ChatRoomListType } from '@/types/chat';

const ChatRoomListBox = () => {
  const ChatRoomInfo = useRecoilValue<ChatPartnerType[]>(ChatPartnerAtom);
  console.log(ChatRoomInfo);
  return (
    <S.ListContainer>
      {/* {ChatRoomInfo &&
        ChatRoomInfo.map((data) => {
          console.log('daat', data);
        })} */}
      {/* {ChatRoomInfo.map((partner) => ( */}
      <S.ChatRoomListArea>
        <S.ChatRoomInfoBox>
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
              <S.ChatListGuestName>원동건</S.ChatListGuestName>
              <S.ChatListPrevText>
                <span>안녕하세요~ 올리버쌤입니다!!~~~~~~~~~~~~~</span>
              </S.ChatListPrevText>
            </S.ChatListCenter>
          </S.ChatListLeft>
          <S.ChatListRight>
            <span>18:10</span>
            <S.UnreadMessage>
              <span>2</span>
            </S.UnreadMessage>
          </S.ChatListRight>
        </S.ChatRoomInfoBox>
      </S.ChatRoomListArea>
      {/* ))} */}
    </S.ListContainer>
  );
};

export default ChatRoomListBox;
