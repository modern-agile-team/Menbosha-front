import styled from 'styled-components';

export const ChatSpaceBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 85vh;
  overflow: scroll;
  overflow-x: hidden;
  /* border: 2px solid blue; */
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 10px;
  }
`;

export const ChatBubbleHostContainer = styled.div`
  display: flex;
  max-width: 20vw;
  float: inline-end;
  /* border: 2px solid red; */
`;

export const ChatBubbleGuestContainer = styled.div`
  display: flex;
  margin: 20px 0px 10px 20px;
  float: inline-start;
  /* border: 2px solid green; */
`;

export const ChatBubble = styled.div<{ isHost: boolean }>`
  display: flex;
  max-width: 16vw;
  margin: ${({ isHost }) =>
    isHost ? '0.3vw 0.3vw 10px 0px' : '20px 20px 10px 0.2vw'};
  justify-content: center;
  align-self: ${({ isHost }) => (isHost ? 'flex-end' : 'flex-start')};
  overflow-wrap: break-word;
  word-break: break-all;
  color: ${({ isHost }) => (isHost ? '#ffffff' : '#000000')};
  background-color: ${({ isHost }) => (isHost ? '#FF772B' : '#ffffff')};
  border: ${({ isHost }) => (isHost ? 'none' : '2px solid #FF772B')};
  border-radius: 10px;
  z-index: ${({ isHost }) => (isHost ? 'auto' : '10000')};
  & > span {
    margin: 7px 12px;
    line-height: 150%;
    font-size: 0.65em;
  }
`;

export const ChatGuestImage = styled.img`
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  /* border: 2px solid #ff772b; */
  border-radius: 10px;
`;

export const ChatBubbleGuestCenter = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 0px 5px;
  /* border: 2px solid red; */
`;

export const ChatGuestName = styled.div`
  max-width: 6vw;
  height: 2vh;
  font-size: 0.65em;
  color: #000000;
  /* border: 2px solid yellow; */
`;

export const ChatTimeBox = styled.div<{ isHost: boolean }>`
  display: flex;
  flex-direction: column;
  width: 3.5vw;
  margin-bottom: 10px;
  justify-content: flex-end;
  align-items: ${({ isHost }) => (isHost ? 'flex-start' : 'flex-end')};
  font-size: 0.5em;
  color: rgb(0, 0, 0, 0.7);
  /* border: 2px solid blue; */
`;

// 채팅방 선택하지 않았을 경우(기본값)
export const EmptyContainer = styled.div`
  display: flex;
  width: 100%;
  height: 85vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: rgb(0, 0, 0);
  font-size: 24px;
  font-weight: 600;
  line-height: 180%;
`;
