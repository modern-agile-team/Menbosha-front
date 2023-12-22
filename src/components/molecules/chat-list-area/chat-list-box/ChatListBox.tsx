import React from 'react';
import * as S from './styled';
import Image from 'next/image';

const ChatListBox = () => {
  return (
    <S.ListContainer>
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
    </S.ListContainer>
  );
};

export default ChatListBox;
