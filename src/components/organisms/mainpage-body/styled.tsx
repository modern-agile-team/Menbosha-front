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
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 10%,
      rgba(255, 255, 255, 0) 20%,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.7) 75%,
      rgba(255, 255, 255, 1) 90%,
      rgba(255, 255, 255, 1) 100%
    ),
    url('https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/mainMenbosha.svg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  border: none;
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
  padding-top: 10vh;
  color: #000000;
  /* border: 2px solid black; */
`;

export const MainContents2Left = styled.img`
  width: 7vw;
  height: 12vh;
  margin-right: 1vw;
  /* border: 2px solid blue; */
`;

export const MainContents2Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 52vw;
  height: 80vh;
  /* border: 2px solid orange; */
  / & > span {
    margin-bottom: 2vh;
    font-size: 4em;
    font-weight: 700;
  }
  & > div {
    margin-bottom: 5vh;
    width: 40vw;
    font-size: 0.83em;
    font-weight: 700;
    line-height: 150%;
    text-align: justify;
  }
  :nth-child(3) {
    align-self: flex-end;
  }
`;

export const MainContents2RightBottom = styled.div`
  display: flex;
  flex-direction: column;
  bottom: 0;
  right: 0;
  background-image: url('https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/mainContents.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  min-width: 40vw; // 742
  min-height: 50vh; //526
`;

export const MainContentsContainer3 = styled.div`
  display: flex;
  width: 80vw;
  height: 100vh;
  color: #000000;
  /* border: 2px solid black; */
`;

export const MainContents3Left = styled.img`
  width: 7vw;
  height: 12vh;
  margin-right: 1vw;
  /* border: 2px solid blue; */
`;

export const MainContents3Right = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 55vw;
  height: 80vh;
  /* border: 2px solid orange; */
  & > span {
    margin-bottom: 2vh;
    font-size: 4em;
    font-weight: 700;
  }
  & > div {
    margin-bottom: 5vh;
    width: 44vw;
    font-size: 0.83em;
    font-weight: 700;
    line-height: 150%;
    text-align: justify;
  }
`;

//grid 한번 써봤는데 어렵네요 컨테이너의 item이 고정된 개수가 아니라면
//flex 사용할 것 같습니다. 대신 편하긴 해요
export const MainContents3InfoContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
  min-width: 46vw; // 890
  min-height: 50vh; //541
  /* border: 2px solid black; */
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 22vw;
  height: 23vh;
  /* align-items: center; */
  justify-content: space-around;
  border: 3px solid #ff772b;
  border-radius: 30px;
`;

export const InfoTitleBox = styled.div`
  display: flex;
  width: 20vw;
  height: 7vh;
  padding-left: 2vh;
  text-align: start;
  /* border: 2px solid blue; */
`;

export const InfoTextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 16vw;
  height: 10vh;
  padding-left: 2vh;
  justify-content: flex-end;
  font-size: 0.65em;
  font-weight: 500;
  line-height: 150%;
  /* border: 2px solid green; */
`;
