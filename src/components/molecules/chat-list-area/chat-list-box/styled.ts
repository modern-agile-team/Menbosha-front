import styled from 'styled-components';

export const ListContainer = styled.div`
  display: block;
  width: 21vw;
  height: 100vh;
  text-align: center;
  overflow: scroll;
  overflow-x: hidden;
  /* border: 2px solid red; */
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    /* width: 10px; */
    background: gray;
    border-radius: 10px;
  }
`;

export const ChatRoomListArea = styled.li<{ isSelected: boolean }>`
  display: flex;
  width: 20vw;
  height: 8vh;
  margin-bottom: 24px;
  justify-content: center;
  align-items: center;
  border: 2px solid #ff772b;
  border-radius: 10px;
  background-color: ${({ isSelected }) => isSelected && '#e1e1e1'};
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ffe7e9;
    cursor: pointer;
  }
`;

export const ChatRoomInfoBox = styled.div`
  display: flex;
  width: 19vw;
  height: 7vh;
  justify-content: space-between;
  align-items: center;
  /* border: 2px solid black; */
`;

export const ChatListLeft = styled.div`
  display: flex;
  width: 16vw;
  height: 7vh;
  align-items: center;
  /* border: 1px solid green; */
`;

// export const ChatListGuestImage = styled.div`
//   display: flex;
//   width: 50px;
//   min-width: 50px;
//   height: 50px;
//   justify-content: center;
//   align-items: center;
//   margin-right: 10px;
//   border: 2px solid #ff772b;
//   border-radius: 10px;
//   > :nth-child(1) {
//     /* background-size: cover; */
//     width: 50px;
//     height: 50px;
//     border-radius: 10px;
//   }
// `;

export const ChatListGuestImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 10px;
  color: #ff772b;
  border: 2px solid #ff772b;
`;

export const ChatListCenter = styled.div`
  display: flex;
  flex-direction: column;
  width: 11vw;
  height: 6vh;
  justify-content: center;
  align-items: flex-start;
  /* border: 1px solid gray; */
`;

export const ChatListGuestName = styled.span`
  font-size: 0.65em;
  font-weight: 700;
  margin-bottom: 5px;
  color: #000000;
`;

export const ChatListPrevText = styled.div`
  display: flex;
  font-size: 0.65em;
  font-weight: 400;
  opacity: 0.8;
  color: #000000;
  /* border: 1px solid red; */
  & > span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 11vw;
  }
`;

export const ChatListRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 2vw;
  height: 5vh;
  margin-top: 2px;
  align-items: center;
  /* border: 1px solid red; */
  & > span {
    color: #000000;
    margin-bottom: 7px;
    justify-content: flex-start;
    font-size: 0.5em;
    opacity: 0.7;
  }
`;

export const UnreadMessage = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  background: #ff772b;
  opacity: 0.7;
  & > span {
    font-size: 0.5em;
    color: white;
  }
`;
