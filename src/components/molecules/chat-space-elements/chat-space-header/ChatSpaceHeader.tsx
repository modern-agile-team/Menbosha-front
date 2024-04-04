import React, { useState } from 'react';
import * as S from './styled';
import Image from 'next/image';
import { ChatPartnersType } from '@/types/chat';
import useModal from '@/hooks/useModal';
import ReviewModal from '@/components/organisms/review/ReviewModal';
import { useRecoilValue } from 'recoil';
import { SelectedRoomIdAtom } from '@/recoil/atoms/SelectedRoomIdAtom';
import ChatInfoModal from './ChatInfoModal';
import ReportModal from '@/components/organisms/report/ChatReportModal';
import {
  ToolTipContainer,
  Tooltip,
  TooltipImage,
} from '@/components/common/globalStyled/styled';

const ChatSpaceHeader = (props: {
  chatPartners: ChatPartnersType | undefined;
}) => {
  const { chatPartners } = props;
  const { isOpenModal, handleModal } = useModal();
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const [isOpenReport, setIsOpenReport] = useState(false);
  const selectedRoomId = useRecoilValue(SelectedRoomIdAtom);

  const isRoomSelected = selectedRoomId !== '';

  const handleInfoModal = () => {
    setIsOpenInfo(!isOpenInfo);
  };

  const handleReportModal = () => {
    setIsOpenReport(!isOpenReport);
  };

  if (!isRoomSelected) {
    return (
      <S.ChatSpaceHeaderContainer>
        <S.ChatSpaceHeaderArea>
          <S.ChatSpaceHeaderLeft>
            <S.ChatSpaceHeaderGuestImage
              src={
                'https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/chat/userImage-latest.svg'
              }
              alt="GuestIcon"
            />
          </S.ChatSpaceHeaderLeft>
          <S.ChatSpaceHeaderRight>
            <ToolTipContainer hoverBox="image">
              <TooltipImage
                src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/chat/ChatToolTip.svg"
                alt="Info"
                width="28"
                height="28"
                onClick={handleInfoModal}
              />
              <Tooltip>도움말</Tooltip>
            </ToolTipContainer>
            <ToolTipContainer hoverBox="image">
              <TooltipImage
                src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/chat/ChatReport.svg"
                alt="Report"
                width="28"
                height="28"
                onClick={() => {
                  alert('채팅방을 선택해 주세요.');
                }}
              />
              <Tooltip>신고</Tooltip>
            </ToolTipContainer>
            <ToolTipContainer hoverBox="image">
              <TooltipImage
                src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/chat/review.svg"
                alt="Review"
                width="28"
                height="28"
                onClick={() => {
                  alert('채팅방을 선택해 주세요.');
                }}
              />
              <Tooltip>리뷰</Tooltip>
            </ToolTipContainer>
            {isOpenInfo && (
              <ChatInfoModal show={isOpenInfo} hide={handleInfoModal} />
            )}
          </S.ChatSpaceHeaderRight>
        </S.ChatSpaceHeaderArea>
      </S.ChatSpaceHeaderContainer>
    );
  }

  return (
    <S.ChatSpaceHeaderContainer>
      <S.ChatSpaceHeaderArea>
        <S.ChatSpaceHeaderLeft>
          <S.ChatSpaceHeaderGuestImage
            src={
              chatPartners?.userImage ||
              'https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/chat/userImage-latest.svg'
            }
            alt="GuestIcon"
          />
          <span>{chatPartners?.name || ''}</span>
        </S.ChatSpaceHeaderLeft>
        <S.ChatSpaceHeaderRight>
          <ToolTipContainer hoverBox="image">
            <TooltipImage
              src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/chat/ChatToolTip.svg"
              alt="Info"
              width="28"
              height="28"
              onClick={handleInfoModal}
            />
            <Tooltip>도움말</Tooltip>
          </ToolTipContainer>
          <ToolTipContainer hoverBox="image">
            <TooltipImage
              src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/chat/ChatReport.svg"
              alt="Report"
              width="28"
              height="28"
              onClick={handleReportModal}
            />
            <Tooltip>신고</Tooltip>
          </ToolTipContainer>
          <ToolTipContainer hoverBox="image">
            <TooltipImage
              src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/chat/review.svg"
              alt="Review"
              width="28"
              height="28"
              onClick={handleModal}
            />
            <Tooltip>리뷰</Tooltip>
          </ToolTipContainer>
          {isOpenInfo && (
            <ChatInfoModal show={isOpenInfo} hide={handleInfoModal} />
          )}
          {isOpenReport && (
            <ReportModal
              userId={chatPartners?.id as number}
              show={isOpenReport}
              hide={handleReportModal}
            />
          )}
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
