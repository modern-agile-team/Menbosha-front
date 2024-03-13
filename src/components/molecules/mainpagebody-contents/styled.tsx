import styled from 'styled-components';

// 멘보샤처럼 맛있게.
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

export const MenboshaTitleBoxRow = styled.div`
  display: flex;
  flex-direction: row;
  :nth-child(1) {
    color: #ff772b;
  }
`;

export const MenboshaTitleBoxColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 5.3em;
  font-weight: 900;
  text-shadow: 0px 0px 5.7px rgba(0, 0, 0, 0.4);
  @media only all and (max-width: 1000px) {
    font-size: 100px;
  }
  @media only all and (max-width: 750px) {
    font-size: 65px;
  }
  @media only all and (max-width: 500px) {
    font-size: 45px;
  }
`;

// 바로 해결하는 멘토링.
export const MainContentsContainer2 = styled.div`
  display: flex;
  width: 80vw;
  height: 100vh;
  padding-top: 10vh;
  color: #000000;
`;

export const MainContents2Left = styled.img`
  width: 7vw;
  height: 12vh;
  margin-right: 1vw;
`;

export const MainContents2Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  height: 80vh;
  /* border: 2px solid black; */
  //바로 해결하는 멘토링 제목
  & > :nth-child(1) {
    margin-bottom: 2vh;
    font-size: 4em;
    font-weight: 900;
    @media only all and (max-width: 1000px) {
      font-size: 100px;
    }
    @media only all and (max-width: 750px) {
      font-size: 65px;
    }
    @media only all and (max-width: 500px) {
      font-size: 45px;
    }
  }
  //바로 해결하는 멘토링 본문
  & > :nth-child(2) {
    margin-bottom: 5vh;
    width: 40vw;
    font-size: 0.83em;
    font-weight: 700;
    line-height: 150%;
    text-align: justify;
  }
  & > :nth-child(3) {
    align-self: flex-end;
  }
`;

export const MainContents2RightBottom = styled.div`
  display: flex;
  flex-direction: column;
  bottom: 0;
  right: 0;
  margin-right: 100px;
  background-image: url('https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/mainContents.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  min-width: 40vw; // 742
  min-height: 50vh; //526
`;

// 가볍지만 체계적으로...
export const MainContentsContainer3 = styled.div`
  display: flex;
  width: 80vw;
  height: 90vh;
  color: #000000;
  /* border: 2px solid blue; */
  @media only all and (max-width: 1000px) {
    margin-bottom: 50px;
  }
`;

export const MainContents3Left = styled.img`
  width: 7vw;
  height: 12vh;
  margin-right: 1vw;
`;

export const MainContents3Right = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 55vw;
  height: 89vh;
  /* border: 2px solid red; */
  //가볍지만 체계적이게 제목
  & > :nth-child(1) {
    margin-bottom: 2vh;
    font-size: 4em;
    font-weight: 900; //Pretendard-Black
    @media only all and (max-width: 1000px) {
      font-size: 100px;
    }
    @media only all and (max-width: 750px) {
      font-size: 65px;
    }
    @media only all and (max-width: 500px) {
      font-size: 45px;
    }
  }
  //가볍지만 체계적이게 본문
  & > :nth-child(2) {
    /* margin-bottom: 5vh; */
    width: 44vw;
    font-size: 0.83em;
    font-weight: 700; //Pretendard-Bold
    line-height: 150%; //행간
    text-align: justify;
  }
`;

// grid 사용해봄
export const MainContents3InfoContainer = styled.div`
  @media only all and (max-height: 1000px) {
    height: 60vh; //541
  }
  @media only all and (max-height: 800px) {
    height: 50vh;
  }
  @media only all and (max-height: 600px) {
    height: 40vh;
  }
  position: absolute;
  bottom: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
  /* border: 2px solid black; */
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 22vw;
  height: 23vh;
  @media only all and (max-height: 900px) {
    font-size: 50%;
  }
  justify-content: space-around;
  border: 3px solid #ff772b;
  border-radius: 30px;
  margin: 5px;
`;

export const InfoTitleBox = styled.div`
  display: flex;
  width: 20vw;
  height: 7vh;
  padding-left: 2vh;
  font-weight: 700;
  text-align: start;
`;

export const InfoTextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 16vw;
  height: 10vh;
  padding-left: 2vh;
  justify-content: flex-end;
  font-size: 0.65em;
  font-weight: 400;
  line-height: 150%;
`;

// marqueeTitle
export const MainContentsContainer4 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  background-color: rgb(0, 0, 0);
`;

export const MainContentsTitleArea4 = styled.div`
  display: flex;
  width: 80vw;
  height: 25vh;
  margin-bottom: 4vh;
`;

export const MainContents4Left = styled.img`
  width: 7vw;
  height: 12vh;
  margin-right: 1vw;
`;

export const MainContents4Right = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 65vw;
  height: 25vh;
  //세상의 모든 것을 다루다 제목
  & > :nth-child(1) {
    margin-bottom: 2vh;
    font-size: 4em;
    font-weight: 900;
    @media only all and (max-width: 1000px) {
      font-size: 100px;
    }
    @media only all and (max-width: 750px) {
      font-size: 65px;
    }
    @media only all and (max-width: 500px) {
      font-size: 45px;
    }
  }
  //세상의 모든것을 다루다 본문
  & > :nth-child(2) {
    margin-bottom: 5vh;
    width: 46vw;
    font-size: 0.83em;
    font-weight: 700;
    line-height: 150%;
    text-align: justify;
  }
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
`;

export const MainContents5Left = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 55vw;
  height: 25vh;
  justify-content: center;
  //그럼, 시작해 볼까요? 제목
  & > :nth-child(1) {
    margin-bottom: 2vh;
    font-size: 4em;
    font-weight: 700;
  }
  //그럼, 시작해 볼까요? 본문
  & > :nth-child(2) {
    width: 46vw;
    font-size: 0.83em;
    font-weight: 700;
    line-height: 150%;
  }
`;

export const MainContents5Right = styled.img`
  width: 7vw;
  height: 12vh;
  margin-right: 1vw;
  cursor: pointer;
`;
