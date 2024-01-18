import { ModalType } from '@/types/chat';
import styled from 'styled-components';
import React from 'react';
import CHAT from '@/apis/chatApi/chat';
import { useRecoilState } from 'recoil';
import { ChatRoomListAtom } from '@/recoil/atoms/ChatRoomListAtom';

const ChatRoomOutModal = ({
  show,
  hide,
  chatRoomId,
  partnerName,
}: ModalType) => {
  const [chatRoomList, setChatRoomList] = useRecoilState(ChatRoomListAtom);

  // 채팅방 나가기 기능
  const handleChatRoomOut = async () => {
    await CHAT.deleteChatRoom(chatRoomId);
    updateChatRoomListApi();
    handleCloseModal();
  };

  const updateChatRoomListApi = async () => {
    const res = await CHAT.getChatRoomList();
    setChatRoomList(res.chatRooms);
  };

  const handleCloseModal = () => {
    if (show) {
      hide();
    }
  };

  return (
    <div>
      <ModalWrapper>
        <ModalContainer>
          <ModalTitle>채팅방 나가기</ModalTitle>
          <span>{partnerName}님과의 채팅방을 나가시겠습니까?</span>
          <ButtonArea>
            <button onClick={handleChatRoomOut}>예</button>
            <button onClick={handleCloseModal}>아니오</button>
          </ButtonArea>
        </ModalContainer>
      </ModalWrapper>
      <Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if (show) {
            hide();
          }
        }}
      />
    </div>
  );
};

export default ChatRoomOutModal;

export const ModalWrapper = styled.div`
  display: flex;
  position: absolute;
  width: 20vw;
  height: 16vh;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  z-index: 10000;
  border-radius: 10px;
  border: 2px solid #ff9b50;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 19vw;
  height: 13vh;
  align-items: center;
  font-size: 0.65em;
  color: #000000;
  /* border: 1px solid green; */
  & > span {
    margin-bottom: 24px;
  }
`;
export const ModalTitle = styled.div`
  display: flex;
  margin: 0px 0px 20px 0px;
  font-size: 1.2em;
  font-weight: 700;
  color: #ff772b;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 13vw;
  height: 3vh;

  /* border: 2px solid black; */
  & > button {
    border: 1px solid rgb(255, 119, 43, 0.5);
    border-radius: 4px;
    cursor: pointer;
    width: 4vw;
    background-color: #ffffff;
    transition:
      background-color ease,
      color ease;
    &:hover {
      background-color: rgb(255, 119, 43, 0.15);
      border: none;
    }
  }
`;

export const Backdrop = styled.div`
  width: 10000px;
  height: 10000px;
  position: fixed;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.2);
  cursor: auto;
`;
