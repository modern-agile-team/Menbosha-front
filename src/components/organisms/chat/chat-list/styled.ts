import styled from 'styled-components';

export const ChatRoomListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 22.5vw; // 434px
  height: 100vh;
  margin-right: 28px;
  align-items: center;
  border-left: 1px solid #ffbb5c;
  border-right: 1px solid #ffbb5c;
  /* border: 2px solid red; */
`;

export const ListContainer = styled.div`
  display: block;
  width: 21vw;
  height: 100vh;
  text-align: center;
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    /* width: 10px; */
    background: gray;
    border-radius: 10px;
  }
`;

// ChatSearchList Styled-Components

export const SearchMentorBox = styled.div`
  display: flex;
  width: 20vw;
  height: 5vh;
  margin: 22px 0px;
  justify-content: space-between;
  align-items: center;
  /* border: 2px solid yellow; */
  & > * {
    margin: 0px 10px;
  }
  & > span {
    font-size: 0.83em;
    font-weight: 700;
    color: #ffbb5c;
  }
`;

// 추후에 쓸 것
export const SearchInputBox = styled.input`
  display: flex;
  width: 16vw;
  height: 5vh;
  border: 2px solid lightGreen;
`;

// ChatRoomList

export const ChatRoomListHeader = styled.div`
  display: flex;
  width: 20vw;
  height: 5vh;
  margin: 22px 0px;
  align-items: center;
  /* border: 2px solid yellow; */
  & > * {
    margin: 0px 10px;
  }
  & > span {
    font-size: 0.83em;
    font-weight: 700;
    color: #ffbb5c;
  }
`;
