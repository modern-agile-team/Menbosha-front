import styled from 'styled-components';

export const MentorListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 23vw; // 434px
  height: 100vh;
  margin-right: 28px;
  align-items: center;
  border-left: 1px solid #ff4651;
  border-right: 1px solid #ff4651;
  /* border: 2px solid red; */
`;

export const ChatRoomListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 23vw; // 434px
  height: 100vh;
  margin-right: 0px;
  align-items: center;
  border-left: 1px solid #ff4651;
  border-right: 1px solid #ff4651;
  /* border: 2px solid red; */
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
    color: #ff4651;
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
    color: #ff4651;
  }
`;
