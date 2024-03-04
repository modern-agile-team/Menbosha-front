import CHAT from '@/apis/chat';
import { ChatContentsAtom } from '@/recoil/atoms/ChatContentsAtom';
import { SelectedRoomIdAtom } from '@/recoil/atoms/SelectedRoomIdAtom';
import { ChatDeleteModalType } from '@/types/chat';
import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

const ChatDeleteModal = ({
  show,
  hide,
  roomId,
  chatId,
}: ChatDeleteModalType) => {
  const [chatContents, setChatContents] = useRecoilState(ChatContentsAtom);
  const page = 1;
  const pageSize = 20;
  // 채팅 내역 삭제 기능
  const handleChatDeleteApi = async () => {
    if (chatId) {
      await CHAT.deleteChat(roomId, chatId);
      updateChatContentsApi();
      handleCloseModal();
    } else {
      console.error('해당 채팅내역이 존재하지 않습니다.');
    }
  };

  const updateChatContentsApi = async () => {
    const res = await CHAT.getChatHistory(roomId, page, pageSize);
    setChatContents(res.chats);
  };

  const handleCloseModal = () => {
    if (show) {
      hide();
    }
  };

  useEffect(() => {
    // console.log(chatContents);
    console.log(chatId);
    console.log(roomId);
  }, []);

  return (
    <div>
      <ModalWrapper>
        <ModalContainer>
          <ModalTitle>
            <span>채팅 삭제하기</span>
          </ModalTitle>
          <ModalContents>
            <span>채팅을 삭제하시겠습니까?</span>
          </ModalContents>
          <ButtonArea>
            <button onClick={handleChatDeleteApi}>예</button>
            <button onClick={handleCloseModal}>취소</button>
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

export default ChatDeleteModal;

export const ModalWrapper = styled.div`
  display: flex;
  position: absolute;
  width: 22vw;
  height: 25vh;
  top: 50%;
  left: 80%;
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
  width: 22vw;
  height: 25vh;
  align-items: center;
  font-size: 0.65em;
  color: #000000;
  /* border: 1px solid green; */
`;

export const ModalTitle = styled.div`
  display: flex;
  width: 22vw;
  height: 4vh;
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
  margin-bottom: 3vh;
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
  background-color: rgba(0, 0, 0, 0.03);
  cursor: auto;
`;
