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

export const MainContentsContainer1 = styled.div`
  display: flex;
  background-image: url('https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/mainMenbosha.svg');
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  /* z-index: -999; */
  /* border: 2px solid red; */
`;

export const MenboshaTitleBoxColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 5.3em;
  font-weight: 800;
  text-shadow: 0px 0px 5.7px rgba(0, 0, 0, 0.4);
`;

export const MenboshaTitleBoxRow = styled.div`
  display: flex;
  flex-direction: row;
  :nth-child(1) {
    color: #ff772b;
  }
`;

export const MainContentsContainer2 = styled.div`
  display: flex;
  width: 80vw;
  height: 100vh;
  color: #000000;
  border: 2px solid black;
`;

export const MainContents2Left = styled.img`
  width: 7vw;
  height: 12vh;
  margin-right: 1vw;
  border: 2px solid blue;
`;

export const MainContents2Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 52vw;
  height: 80vh;
  border: 2px solid orange;
  :nth-child(1) {
    margin-bottom: 2vh;
    font-size: 4em;
    font-weight: 700;
  }
  :nth-child(2) {
    margin-bottom: 6vh;
    font-size: 0.83em;
    font-weight: 700;
    line-height: 150%;
  }
  :nth-child(3) {
    align-self: flex-end;
  }
`;

export const MainContents2RightBottom = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/mainContents1.svg');
  background-repeat: no-repeat;
  background-size: contain;
  min-width: 40vw; // 742
  min-height: 50vh; //526
  border: 2px solid lightgreen;
  :nth-child(1) {
    margin: 11vh 0px 0px 10vw;
    font-size: 1.5em;
    font-weight: 700;
    color: #ffffff;
    line-height: 120%;
  }
  :nth-child(2) {
    text-align: center;
    margin: 8vh 0px 0px 20vw;
    max-width: 10vw;
    font-size: 1.5em;
    font-weight: 700;
    color: #ffffff;
    line-height: 120%;
  }
  :nth-child(3) {
    margin: 4vh 6vw 0px 0px;
    font-size: 1.5em;
    font-weight: 700;
    color: #ffffff;
    line-height: 120%;
  }
`;
