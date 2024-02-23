import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  /* justify-content: center; */
  background-color: rgba(0, 0, 0);
  /* border: 2px solid red; */
`;

export const FooterArea = styled.div`
  display: flex;
  width: 80vw;
  height: 20vh;
  margin: 0px 197.5px;
  justify-content: space-between;
  align-items: center;
  /* border: 2px solid yellow; */
`;

export const FooterLeft = styled.div`
  display: flex;
  width: 40vw;
  height: 15vh;
  justify-content: flex-start;
  align-items: center;
  /* border: 2px solid white; */
`;

export const FooterLeftLogo = styled.img`
  width: 5vw;
  /* height: 10vh; */
  margin-right: 1vw;
`;

export const FooterLeftContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 10vh;
  justify-content: center;
  /* border: 2px solid green; */
  & > :nth-child(1) {
    font-weight: 700;
    font-size: 0.5em;
    line-height: 150%;
    color: #ffffff;
    margin-bottom: 1vh;
  }
  & > :nth-child(2) {
    font-weight: 400;
    font-size: 0.5em;
    line-height: 150%;
    color: rgba(255, 255, 255, 0.75);
  }
  & > :nth-child(3) {
    font-weight: 400;
    font-size: 0.5em;
    line-height: 150%;
    color: rgba(255, 255, 255, 0.75);
  }
`;

export const FooterRight = styled.div`
  display: flex;
  width: 8vw;
  height: 12vh;
  /* border: 2px solid white; */
  justify-content: space-between;
  align-items: flex-end;
  & > span {
    font-weight: 400;
    font-size: 0.5em;
    line-height: 150%;
    text-decoration-line: underline;
    color: rgba(255, 255, 255, 0.75);
  }
`;
