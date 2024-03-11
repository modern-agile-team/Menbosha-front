import styled from 'styled-components';

export const MarqueeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
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
  @media only all and (max-width: 1000px) {
    font-size: 1.5em;
    height: 12vh;
  }
  @media only all and (max-width: 750px) {
    font-size: 1em;
    height: 10vh;
  }
  @media only all and (max-width: 500px) {
    font-size: 0.5em;
    height: 8vh;
  }
`;
