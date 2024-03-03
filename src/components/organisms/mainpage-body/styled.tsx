import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  justify-content: center;
  /* border: 2px solid black; */
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 메인컨텐츠3과 CategoryMarquee 사이
export const BetweenGradation = styled.div`
  /* background: linear-gradient(180deg, white, black); */
  background: linear-gradient(180deg, #ffffff 0%, #000000 86.98%);
  width: 100vw;
  height: 40vh;
  /* border: 2px solid lightgreen; */
`;

//지금 시작해볼까요?
export const MainContentsContainer5 = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0);
`;

export const MainContentsTitleArea5 = styled.div`
  display: flex;
  width: 65vw;
  height: 25vh;
  margin-bottom: 4vh;
  justify-content: center;
  align-items: center;
  /* border: 2px solid pink; */
`;

export const MainContents5Left = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 55vw;
  height: 25vh;
  justify-content: center;
  /* border: 2px solid orange; */
  & > span {
    margin-bottom: 2vh;
    font-size: 4em;
    font-weight: 700;
  }
  & > div {
    /* margin-bottom: 5vh; */
    width: 46vw;
    font-size: 0.83em;
    font-weight: 700;
    line-height: 150%;
    /* text-align: justify; */
  }
`;

export const MainContents5Right = styled.div`
  width: 7vw;
  height: 12vh;
  margin-right: 1vw;
  cursor: pointer;
  /* border: 2px solid blue; */
`;
