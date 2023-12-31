import React from 'react';
import * as S from './styled';
import Image from 'next/image';

const ChatSpaceHeader = () => {
  return (
    <S.ChatSpaceHeaderContainer>
      <S.ChatSpaceHeaderArea>
        <S.ChatSpaceHeaderLeft>
          <S.ChatSpaceHeaderGuestImage>
            <Image
              src="/UserIcon-black.svg"
              alt="GuestIcon"
              width="24"
              height="24"
            />
          </S.ChatSpaceHeaderGuestImage>
          <span>원동건 님</span>
        </S.ChatSpaceHeaderLeft>
        <S.ChatSpaceHeaderRight>
          <Image src="/ChatRoomInfo.svg" alt="Info" width="28" height="28" />
          <Image src="/ChatRoomOut.svg" alt="Info" width="28" height="28" />
        </S.ChatSpaceHeaderRight>
      </S.ChatSpaceHeaderArea>
    </S.ChatSpaceHeaderContainer>
  );
};

export default ChatSpaceHeader;
