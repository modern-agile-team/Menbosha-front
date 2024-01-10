import React, { useState } from 'react';
import * as S from './styled';
import Image from 'next/image';

const ChatSpaceFooter = () => {
  const [inputMessage, setInputMessage] = useState('');
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
            src="/chat/ChatPlusIcon.png"
            alt="PlusIcon"
            width="28"
            height="28"
          />
          <Image
            src="/chat/ChatEmoticon.png"
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
