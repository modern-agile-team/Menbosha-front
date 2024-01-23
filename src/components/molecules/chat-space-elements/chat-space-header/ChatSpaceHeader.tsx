import React, { useEffect, useState } from 'react';
import * as S from './styled';
import Image from 'next/image';
import { ChatPartnersType } from '@/types/chat';

const ChatSpaceHeader = (props: { chatPartners: ChatPartnersType[] }) => {
  const { chatPartners } = props;

  return (
    <S.ChatSpaceHeaderContainer>
      <S.ChatSpaceHeaderArea>
        {chatPartners.length > 0 ? (
          chatPartners.map((data) => {
            return (
              <div key={data.id}>
                <S.ChatSpaceHeaderLeft>
                  <S.ChatSpaceHeaderGuestImage
                    src={data.userImage}
                    alt="GuestIcon"
                  />
                  <span>{data.name}</span>
                </S.ChatSpaceHeaderLeft>
              </div>
            );
          })
        ) : (
          <div>
            <S.ChatSpaceHeaderLeft>
              <S.ChatSpaceHeaderGuestImage
                src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/chat/userHead+-+white.svg"
                alt="GuestIcon"
              />
              <span>멘토님</span>
            </S.ChatSpaceHeaderLeft>
          </div>
        )}
        <S.ChatSpaceHeaderRight>
          <Image
            src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/chat/ChatToolTip.svg"
            alt="Info"
            width="28"
            height="28"
          />
          <Image
            src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/chat/ChatReport.svg"
            alt="Info"
            width="28"
            height="28"
          />
          <Image
            src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/chat/ChatRoomOut.svg"
            alt="Info"
            width="28"
            height="28"
          />
        </S.ChatSpaceHeaderRight>
      </S.ChatSpaceHeaderArea>
    </S.ChatSpaceHeaderContainer>
  );
};

export default ChatSpaceHeader;
