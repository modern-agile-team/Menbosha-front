import styled from 'styled-components';

interface BgType {
  color: boolean;
}

export const FooterContainer = styled.div<BgType>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${({ color }) => (color ? '0px 204px' : '0px')};
  width: ${({ color }) => (color ? '' : '100vw')};
  height: auto;
  @media only all and (max-width: 1900px) {
    margin: ${({ color }) => (color ? '0px 10.625%' : '0px')};
  }
  background-color: ${({ color }) => (color ? '#fff' : '#000')};
`;

export const FooterArea = styled.div`
  display: flex;
  width: 80vw;
  height: 20vh;
  margin: 0px 197.5px;
  justify-content: space-between;
  align-items: center;
`;

export const FooterLeft = styled.div`
  display: flex;
  width: 40vw;
  height: 15vh;
  justify-content: flex-start;
  align-items: center;
`;

export const FooterLeftLogo = styled.img`
  width: 5vw;
  margin-right: 1vw;
`;

export const FooterLeftContents = styled.div<BgType>`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 10vh;
  justify-content: center;
  & > :nth-child(1) {
    font-weight: 700;
    font-size: 0.47em;
    line-height: 150%;
    color: ${({ color }) => (color ? '#000' : '#fff')};
    margin-bottom: 1vh;
  }
  & > :nth-child(2) {
    font-weight: 400;
    font-size: 0.5em;
    line-height: 150%;
    color: ${({ color }) =>
      color ? 'rgba(0, 0, 0, 0.75)' : 'rgba(255, 255, 255, 0.75)'};
  }
  //모던애자일 링크
  & > :nth-child(3) {
    font-weight: 400;
    font-size: 0.5em;
    line-height: 150%;
    text-decoration: none;
    color: ${({ color }) =>
      color ? 'rgba(0, 0, 0, 0.75)' : 'rgba(255, 255, 255, 0.75)'};
  }
  //인덕대학교 링크
  & > :nth-child(4) {
    font-weight: 400;
    font-size: 0.5em;
    line-height: 150%;
    text-decoration: none;
    color: ${({ color }) =>
      color ? 'rgba(0, 0, 0, 0.75)' : 'rgba(255, 255, 255, 0.75)'};
  }
`;

export const FooterRight = styled.div<BgType>`
  display: flex;
  width: 9vw;
  height: 12vh;
  justify-content: space-between;
  align-items: flex-end;
  a {
    text-decoration: underline;
  }
  span {
    font-weight: 400;
    font-size: 0.5em;
    line-height: 150%;
    color: ${({ color }) =>
      color ? 'rgba(0, 0, 0, 0.75)' : 'rgba(255, 255, 255, 0.75)'};
  }
`;
