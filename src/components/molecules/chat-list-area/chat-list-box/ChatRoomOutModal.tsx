import { ChatRoomDeleteModalType } from '@/types/chat';
import styled from 'styled-components';
import React from 'react';
import CHAT from '@/apis/chat';
import { useRecoilState } from 'recoil';
import { ChatRoomListAtom } from '@/recoil/atoms/ChatRoomListAtom';

const ChatRoomOutModal = ({
  show,
  hide,
  chatRoomId,
  partnerName,
}: ChatRoomDeleteModalType) => {
  const [chatRoomList, setChatRoomList] = useRecoilState(ChatRoomListAtom);
  console.log(partnerName);
  console.log(chatRoomId);
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
          <ModalTitle>
            <span>채팅방 나가기</span>
          </ModalTitle>
          <ModalContents>
            <span>{partnerName}님 과의</span>
            <span>채팅방을 나가시겠습니까?</span>
          </ModalContents>
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
  width: 27vw;
  height: 30vh;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  /* align-items: center; */
  background-color: #ffffff;
  z-index: 10000;
  border-radius: 10px;
  /* border: 2px solid #ff9b50; */
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 27vw;
  height: 30vh;
  align-items: center;
  font-size: 0.65em;
  color: #000000;
  /* border: 1px solid green; */
`;

export const ModalTitle = styled.div`
  display: flex;
  width: 27vw;
  height: 5vh;
  align-items: center;
  margin-bottom: 7vh;
  background-color: #ff772b;
  border-radius: 10px 10px 0px 0px;
  border: 1px solid #ff772b;
  & > span {
    font-size: 1em;
    font-weight: 700;
    color: #ffffff;
    padding: 1vw;
  }
`;

export const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 5vh;
  align-items: center;
  margin-bottom: 32px;
  /* border: 2px solid red; */
  :nth-child(1) {
    font-size: 1.2em;
    font-weight: 700;
    margin-bottom: 6px;
  }
  :nth-child(2) {
    font-size: 1em;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 14vw;
  height: 5vh;
  /* border: 2px solid black; */
  & > button {
    border: 2px solid rgb(255, 119, 43);
    border-radius: 10px;
    cursor: pointer;
    width: 6vw;
    height: 3vh;
    font-size: 1em;
    font-weight: 700;
    background-color: #ffffff;
    transition:
      background-color ease,
      color ease;
    &:hover {
      background-color: rgb(255, 119, 43);
      border: none;
      color: #ffffff;
    }
  }
`;

export const Backdrop = styled.div`
  width: 10000px;
  height: 10000px;
  position: fixed;
  left: 0px;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: auto;
`;
