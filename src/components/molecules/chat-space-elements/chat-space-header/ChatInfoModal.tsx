import React from 'react';
import styled from 'styled-components';

const ChatInfoModal = ({ show, hide }: any) => {
  const handleCloseModal = () => {
    if (show) {
      hide();
    }
  };
  return (
    <>
      <ModalWrapper>
        <ModalContainer>
          <ModalTitle>
            <span>채팅 가이드</span>
          </ModalTitle>
          <ModalContents>
            <div>어서오세요, 멘보샤 채팅방에 오신 것을 환영합니다.</div>
            <p>
              <span>1. 채팅이 확인되지 않을 시 '새로고침'을 해주세요.</span>
              <br />
              <span>
                2. 현재 macOS에서 채팅이 2번 입력되는 오류가 있습니다.
              </span>
              <br />
              <span>3. 삭제할 채팅방을 우클릭하면 삭제하실 수 있습니다.</span>
              <br />
              <span>4. 삭제할 채팅을 우클릭하면 삭제하실 수 있습니다.</span>
              <br />
              <span>5. 본인의 채팅내역만 삭제하실 수 있습니다.</span>
              <br />
              <span>6. 불편한 기능은 추후 빠르게 업데이트 하겠습니다.</span>
            </p>
          </ModalContents>
          <ButtonArea>
            <button onClick={handleCloseModal}>닫기</button>
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
    </>
  );
};

export default ChatInfoModal;

export const ModalWrapper = styled.div`
  display: flex;
  position: absolute;
  width: 30vw;
  height: 45vh;
  top: 50%;
  left: 80%;
  transform: translate(-50%, -50%);
  justify-content: center;
  background-color: #ffffff;
  z-index: 12000;
  border-radius: 10px;
  border: 2px solid #ff9b50;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 45vh;
  align-items: center;
  font-size: 0.65em;
  color: #000000;
  /* border: 1px solid green; */
`;

export const ModalTitle = styled.div`
  display: flex;
  width: 30vw;
  height: 4vh;
  align-items: center;
  margin-bottom: 20px;
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
  width: 27vw;
  height: 30vh;
  align-items: center;
  margin-bottom: 20px;
  /* border: 2px solid red; */
  & > div {
    font-size: 1.2em;
    font-weight: 700;
    margin-bottom: 20px;
  }
  & > p {
    line-height: 200%;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
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
