import styled from 'styled-components';

type ListAreaType = {
  isExpanded: boolean;
};

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

export const ListArea = styled.div<ListAreaType>`
  display: flex;
  flex-direction: ${({ isExpanded }) => (isExpanded ? 'column' : 'row')};
  width: 20vw;
  height: ${({ isExpanded }) => (isExpanded ? '18vh' : '8vh')};
  margin-bottom: 24px;
  /* justify-content: center; */
  /* align-items: center; */
  border: 2px solid #ff4651;
  border-radius: 10px;
  background-color: ${({ isExpanded }) => (isExpanded ? '#FF4651' : '#ffffff')};
  cursor: ${({ isExpanded }) => (isExpanded ? 'default' : 'pointer')};
  transition:
    height 0.5s ease,
    background-color 0.5s ease;
`;

export const MentorInfoArea = styled.div`
  display: flex;
  width: 18vw;
  height: 7vh;
  margin-top: 4px;
  margin-left: 0.6vw;
  justify-content: space-between;
  /* border: 2px solid white; */
`;

export const MentorInfoLeft = styled.div`
  display: flex;
  width: 19vw;
  height: 7vh;
  align-items: center;
  /* border: 1px solid yellow; */
`;

export const MentorImage = styled.div<ListAreaType>`
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border: 2px solid #ff4651;
  border: ${({ isExpanded }) =>
    isExpanded ? '2px solid #ffffff' : ' 2px solid #FF4651'};
  border-radius: 10px;
  transition: border 0.3s ease;
`;

export const MentorInfoBox = styled.div<ListAreaType>`
  display: flex;
  flex-direction: column;
  width: 10vw;
  height: 6vh;
  justify-content: center;
  align-items: flex-start;
  & > span {
    color: ${({ isExpanded }) => (isExpanded ? '#ffffff' : ' #000000')};
  }
  /* border: 1px solid green; */
`;

export const IconBox = styled.div<ListAreaType>`
  display: flex;
  width: 10vw;
  height: ${({ isExpanded }) => (isExpanded ? 'auto' : '7vh')};
  margin-top: 24px;
  margin-left: 4.8vw;
  justify-content: space-between;
  align-items: center;
  visibility: ${({ isExpanded }) => (isExpanded ? 'visible' : 'hidden')};
  opacity: ${({ isExpanded }) => (isExpanded ? 1 : 0)};
  transition:
    opacity 2s ease,
    visibility 3s ease;
  & > * {
    cursor: pointer;
  }
  /* border: 2px solid black; */
`;
