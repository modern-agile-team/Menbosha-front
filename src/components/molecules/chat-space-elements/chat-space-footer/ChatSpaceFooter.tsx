import React, { useEffect, useState } from 'react';
import * as S from './styled';
import Image from 'next/image';
import { ChatContentsType, ChatHistoryType } from '@/types/chat';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ChatContentsAtom } from '@/recoil/atoms/ChatContentsAtom';
import { SelectedRoomIdAtom } from '@/recoil/atoms/SelectedRoomIdAtom';
import { useSocket } from '@/hooks/useSocket';
import { MyIdType } from '@/components/templates/ChatPageTemplate';

const ChatSpaceFooter = (myId: MyIdType) => {
  const [inputMessage, setInputMessage] = useState('');
  const [selectedRoomId, setSelectedRoomId] =
    useRecoilState(SelectedRoomIdAtom);
  const [chatContents, setChatContents] =
    useRecoilState<ChatContentsType[]>(ChatContentsAtom);
  const socket = useSocket();

  const senderId = myId.myId;
  // console.log(senderId);
  // console.log(selectedRoomId);

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

  useEffect(() => {
    if (socket) {
      socket.on('message', (incomingMessage: any) => {
        if (incomingMessage) {
          const { _id, chatRoomId, content, senderId, seenUsers, createdAt } =
            incomingMessage;
          const newChatMessage: ChatContentsType = {
            _id,
            chatRoomId,
            content,
            senderId,
            seenUsers,
            createdAt,
          };
          setChatContents((prevContents) => [newChatMessage, ...prevContents]);
        } else {
          console.error('반환받은 데이터 혹은 데이터 없음:', incomingMessage);
        }
      });
    }
    return () => {
      if (socket) {
        socket.off('message');
      }
    };
  }, [socket, setChatContents]);

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
