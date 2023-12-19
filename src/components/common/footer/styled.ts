import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  width: inherit;
  height: 100vh;
  margin-top: -20px;
  justify-content: center;
  /* border: 2px solid red; */
`;

export const FooterArea = styled.div`
  display: flex;
  width: 80vw;
  margin: 0px 197.5px;
  justify-content: space-between;
  /* border: 2px solid purple; */
`;

export const FooterBoxCenter = styled.div`
  display: flex;
  flex-direction: column;
  width: 35vw;
  align-items: center;
  /* border: 2px solid blue; */
  & > span {
    /* margin-bottom: 5px; */
    line-height: 150%;
    font-size: 0.5em;
    color: #c58940;
  }
`;

export const NoticeBox = styled.div`
  display: flex;
  width: 26vw;
  height: 4vh;
  margin-top: 40px;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  border: 1.5px solid #c58940;
  & > span {
    font-size: 0.5em;
    color: #c58940;
  }
`;

export const FooterBoxRight = styled.span`
  display: flex;
  width: 8vw;
  margin-top: 110px;
  font-size: 0.5em;
  color: #c58940;
  /* border: 2px solid green; */
`;

export const FooterBoxLeft = styled.span`
  display: flex;
  width: 8vw;
  margin-top: 120px;
  font-size: 0.5em;
  color: #c58940;
  /* border: 2px solid green; */
`;
