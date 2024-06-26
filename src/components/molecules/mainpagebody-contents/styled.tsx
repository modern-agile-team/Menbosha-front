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

export const MenboshaTitleBoxColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 5.3em;
  @media only all and (max-width: 1600px), (max-height: 900px) {
    font-size: 5.3em;
  }
  @media only all and (max-width: 1280px), (max-height: 600px) {
    font-size: 100px;
  }
  @media only all and (max-width: 900px), (max-height: 400px) {
    font-size: 60px;
  }
  @media only all and (max-width: 400px), (max-height: 200px) {
    font-size: 40px;
  }
  font-weight: 900;
  text-shadow: 0px 0px 5.7px rgba(0, 0, 0, 0.4);
`;

export const MenboshaTitleBoxRow = styled.div`
  display: flex;
  flex-direction: row;
  :nth-child(1) {
    color: #ff772b;
  }
`;

// 바로 해결하는 멘토링.
export const MainContentsContainer2 = styled.div`
  display: flex;
  width: 80vw;
  height: 100vh;
  @media only all and (max-width: 1600px), (max-height: 900px) {
    height: 90vh; //541
    margin-bottom: 100px;
  }
  @media only all and (max-width: 1280px), (max-height: 700px) {
    height: 80vh;
    margin-bottom: 150px;
  }
  @media only all and (max-width: 800px), (max-height: 400px) {
    height: 70vh;
    margin-bottom: 150px;
  }
  padding-top: 10vh;
  /* padding-bottom: 10vh; */
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
    @media only all and (max-width: 1600px), (max-height: 900px) {
      font-size: 80px;
    }
    @media only all and (max-width: 1280px), (max-height: 700px) {
      font-size: 60px;
    }
    @media only all and (max-width: 800px), (max-height: 400px) {
      font-size: 40px;
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
    @media only all and (max-width: 1600px), (max-height: 900px) {
      font-size: 16px;
      /* margin-bottom: 4vh; */
    }
    @media only all and (max-width: 1280px), (max-height: 600px) {
      font-size: 14px;
      /* margin-bottom: 4vh; */
    }
    @media only all and (max-width: 900px), (max-height: 400px) {
      font-size: 12px;
      /* margin-bottom: vh; */
    }
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
  height: 70vh;
  margin-bottom: 100px;
  @media only all and (max-height: 1000px) {
    /* height: 60vh; //541 */
    margin-bottom: 100px;
  }
  @media only all and (max-height: 800px) {
    /* height: 50vh; */
    margin-bottom: 100px;
  }
  @media only all and (max-height: 600px) {
    /* height: 40vh; */
    margin-bottom: 100px;
  }
  color: #000000;
  /* border: 2px solid blue; */
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
  max-height: 89vh;
  /* height: auto; */
  /* border: 2px solid red; */
  //가볍지만 체계적으로 제목
  & > :nth-child(1) {
    font-size: 4em;
    font-weight: 900; //Pretendard-Black
    @media only all and (max-width: 1600px), (max-height: 900px) {
      font-size: 80px;
    }
    @media only all and (max-width: 1280px), (max-height: 700px) {
      font-size: 60px;
    }
    @media only all and (max-width: 800px), (max-height: 400px) {
      font-size: 40px;
    }
  }

  //가볍지만 체계적이게 본문
  & > :nth-child(2) {
    width: 44vw;
    font-size: 0.83em;
    font-weight: 700; //Pretendard-Bold
    line-height: 150%; //행간
    text-align: justify;
    @media only all and (max-width: 1600px), (max-height: 900px) {
      font-size: 16px;
    }
    @media only all and (max-width: 1280px), (max-height: 600px) {
      font-size: 14px;
      margin-bottom: 5vh;
    }
    @media only all and (max-width: 900px), (max-height: 400px) {
      font-size: 12px;
    }
  }
`;

// grid 사용해봄
export const MainContents3InfoContainer = styled.div`
  width: auto;
  height: auto;
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
  max-width: 30vw;
  max-height: 28vh;
  /* width: auto;
  height: auto; */
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
  font-size: 0.83em;
  @media only all and (max-width: 1600px), (max-height: 900px) {
    font-size: 0.65em;
  }
  @media only all and (max-width: 1280px), (max-height: 700px) {
    font-size: 0.5em;
  }
  @media only all and (max-width: 800px), (max-height: 400px) {
    font-size: 0.3em;
  }
  font-weight: 700;
  text-align: start;
  /* border: 2px solid black; */
`;

export const InfoTextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 16vw;
  height: 10vh;
  padding-left: 2vh;
  justify-content: flex-end;
  font-size: 0.5em;
  @media only all and (max-width: 1600px), (max-height: 900px) {
    font-size: 0.5em;
  }
  @media only all and (max-width: 1280px), (max-height: 700px) {
    font-size: 0.35em;
  }
  @media only all and (max-width: 800px), (max-height: 400px) {
    font-size: 0.2em;
  }
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
    @media only all and (max-width: 1600px), (max-height: 900px) {
      font-size: 80px;
    }
    @media only all and (max-width: 1280px), (max-height: 700px) {
      font-size: 60px;
    }
    @media only all and (max-width: 800px), (max-height: 400px) {
      font-size: 40px;
    }
  }
  //세상의 모든것을 다루다 본문
  & > :nth-child(2) {
    margin-bottom: 5vh;
    width: 46vw;
    font-size: 0.83em;
    @media only all and (max-width: 1600px), (max-height: 900px) {
      font-size: 16px;
    }
    @media only all and (max-width: 1280px), (max-height: 600px) {
      font-size: 14px;
      margin-bottom: 5vh;
    }
    @media only all and (max-width: 900px), (max-height: 400px) {
      font-size: 12px;
    }
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
    @media only all and (max-width: 1600px), (max-height: 900px) {
      font-size: 80px;
    }
    @media only all and (max-width: 1280px), (max-height: 700px) {
      font-size: 60px;
    }
    @media only all and (max-width: 800px), (max-height: 400px) {
      font-size: 40px;
    }
    font-weight: 700;
  }
  //그럼, 시작해 볼까요? 본문
  & > :nth-child(2) {
    width: 46vw;
    font-size: 0.83em;
    @media only all and (max-width: 1600px), (max-height: 900px) {
      font-size: 16px;
    }
    @media only all and (max-width: 1280px), (max-height: 600px) {
      font-size: 14px;
      margin-bottom: 5vh;
    }
    @media only all and (max-width: 900px), (max-height: 400px) {
      font-size: 12px;
    }
    font-weight: 700;
    line-height: 150%;
  }
`;

export const GoToRouteBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15vw;
  cursor: pointer;
  //아이콘
  & > :nth-child(1) {
    width: 5vw;
    height: 10vh;
  }
  //~~하러가기
  & > :nth-child(2) {
    font-size: 0.8em;
    font-weight: 400;
    text-decoration: none;
    color: #fff;
    @media only all and (max-width: 1200px) {
      font-size: 0.4em;
    }
  }
`;
