import React from 'react';
import * as S from './styled';
import Image from 'next/image';
import { ChatPartnersType } from '@/types/chat';
import useModal from '@/hooks/useModal';
import ReviewModal from '@/components/organisms/review/ReviewModal';

const ChatSpaceHeader = (props: {
  chatPartners: ChatPartnersType | undefined;
}) => {
  const { chatPartners } = props;
  const { isOpenModal, handleModal } = useModal();

  return (
    <S.ChatSpaceHeaderContainer>
      <S.ChatSpaceHeaderArea>
        {chatPartners ? (
          <div>
            <S.ChatSpaceHeaderLeft>
              <S.ChatSpaceHeaderGuestImage
                src={chatPartners?.userImage}
                alt="GuestIcon"
              />
              <span>{chatPartners?.name}</span>
            </S.ChatSpaceHeaderLeft>
          </div>
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
            onClick={handleModal}
            src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/chat/ChatRoomOut.svg"
            alt="Info"
            width="28"
            height="28"
          />
          {isOpenModal && (
            <ReviewModal
              mentorId={chatPartners?.id as number}
              show={isOpenModal}
              hide={handleModal}
            />
          )}
        </S.ChatSpaceHeaderRight>
      </S.ChatSpaceHeaderArea>
    </S.ChatSpaceHeaderContainer>
  );
};

export default ChatSpaceHeader;
