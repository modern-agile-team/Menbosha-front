import React, { useState } from 'react';
import * as S from './styled';
import Image from 'next/image';
import { ChatContentsType, ChatHistoryType } from '@/types/chat';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ChatContentsAtom } from '@/recoil/atoms/ChatContentsAtom';
import { SelectedRoomIdAtom } from '@/recoil/atoms/SelectedRoomIdAtom';
import { useSocket } from '@/hooks/useSocket';
import { MyIdAtom } from '@/recoil/atoms/MyIdAtom';
import { ChatHistoryAtom } from '@/recoil/atoms/ChatHistoryAtom';

const ChatSpaceFooter = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [selectedRoomId, setSelectedRoomId] =
    useRecoilState(SelectedRoomIdAtom);
  const [chatContents, setChatContents] =
    useRecoilState<ChatContentsType[]>(ChatContentsAtom);
  // const [chatHistory, setChatHistory] =
  // useRecoilState<ChatHistoryType[]>(ChatHistoryAtom);
  const senderId = useRecoilValue(MyIdAtom);
  const socket = useSocket();

  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputMessage(e.target.value.trimLeft());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      if (!e.shiftKey) {
        e.preventDefault();
        handleSend();
      } else {
        setInputMessage((prevInput) => prevInput);
      }
    }
  };

  const handleSend = () => {
    if (socket && selectedRoomId) {
      const newMessage = {
        roomId: selectedRoomId,
        content: inputMessage,
        senderId: senderId,
      };

      socket.emit('message', newMessage);
    }

    setInputMessage('');
  };
  console.log(inputMessage);

  return (
    <S.ChatSpaceFooterContainer>
      <S.ChatSpaceInputBox>
        <S.ChatSpaceInputArea
          value={inputMessage}
          onKeyDown={handleKeyDown}
          onChange={handleChangeMessage}
          placeholder="메세지를 입력해주세요..."
        />
        <S.ChatSpaceToolBox>
          <Image
            src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/chat/ChatPlus.svg"
            alt="PlusIcon"
            width="28"
            height="28"
          />
          <Image
            src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/chat/ChatImoticon.svg"
            alt="PlusIcon"
            width="28"
            height="28"
          />
        </S.ChatSpaceToolBox>
      </S.ChatSpaceInputBox>
    </S.ChatSpaceFooterContainer>
  );
};

export default ChatSpaceFooter;
