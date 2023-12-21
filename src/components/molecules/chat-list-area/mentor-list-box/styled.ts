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
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    /* width: 10px; */
    background: gray;
    border-radius: 10px;
  }
`;

export const ListArea = styled.div<ListAreaType>`
  display: flex;
  width: 20vw;
  height: ${({ isExpanded }) => (isExpanded ? '18vh' : '8vh')};
  margin-bottom: 24px;
  justify-content: center;
  /* align-items: center; */
  border: 2px solid #ffbb5c;
  border-radius: 10px;
  background-color: ${({ isExpanded }) => (isExpanded ? '#ffbb5c' : '#252525')};
  cursor: pointer;
  transition:
    height 0.5s ease,
    background-color 0.5s ease;
`;

export const MentorInfoArea = styled.div`
  display: flex;
  width: 19vw;
  height: 7vh;
  margin-top: 4px;
  justify-content: space-between;
  /* border: 2px solid white; */
`;

export const MentorInfoLeft = styled.div`
  display: flex;
  width: 14vw;
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
  border: 2px solid #ffbb5c;
  border: ${({ isExpanded }) =>
    isExpanded ? '2px solid #190300' : ' 2px solid #ffbb5c'};
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
    color: ${({ isExpanded }) => (isExpanded ? '#190300' : ' #fff')};
  }
  /* border: 1px solid green; */
`;
