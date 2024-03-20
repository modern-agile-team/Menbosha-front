import styled from 'styled-components';

export const MarqueeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  /* border: 2px solid white; */
`;

export const MarqueeArea = styled.div`
  display: flex;
  margin: 14px 0px;
`;

export const MarqueeBox = styled.div`
  display: flex;
  width: 14vw;
  height: 18vh;
  margin-right: 2vw;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  font-weight: 700;
  border: 5px solid #ff772b;
  border-radius: 30px;
  @media only all and (max-width: 1600px), (max-height: 900px) {
    font-size: 1.5em;
    height: 12vh;
  }
  @media only all and (max-width: 1280px), (max-height: 600px) {
    font-size: 1.2em;
    height: 10vh;
  }
  @media only all and (max-width: 900px), (max-height: 400px) {
    font-size: 0.83em;
    height: 8vh;
  }
`;
