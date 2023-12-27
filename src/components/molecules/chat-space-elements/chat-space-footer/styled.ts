import styled from 'styled-components';

export const ChatSpaceFooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 8vh;
  justify-content: center;
  align-items: center;
  /* border: 2px solid red; */
`;

export const ChatSpaceInputBox = styled.div`
  display: flex;
  width: 95%;
  height: 5vh;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #ffbb5c;
  border-radius: 10px;
`;

export const ChatSpaceInputArea = styled.textarea`
  display: flex;
  resize: none;
  width: 85%;
  height: 4vh;
  margin-left: 5px;
  text-align: justify;
  color: white;
  background-color: #252525;
  font-family: 'Pretendard';
  font-size: 0.58em;
  line-height: 4vh;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: hidden;
  outline: none;
  border: none;
  /* border: 2px solid green; */
  border-radius: 10px;
  &::placeholder {
    font-family: 'Pretendard';
    font-size: 0.85em;
    color: rgba(255, 221, 77, 0.5);
  }
`;

export const ChatSpaceToolBox = styled.div`
  display: flex;
  width: 15%;
  height: 4vh;
  justify-content: space-evenly;
  align-items: center;
  & > * {
    cursor: pointer;
  }
  /* border: 2px solid green; */
`;
