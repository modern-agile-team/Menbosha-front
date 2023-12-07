import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  width: inherit;
  height: 100vh;
  justify-content: space-between;
  /* border: 2px solid red; */
`;

export const FooterArea = styled.div`
  display: flex;
  width: 80vw;
  margin: 0px 197.5px;
  justify-content: flex-end;
  /* border: 2px solid purple; */
`;

export const FooterBox = styled.div`
  display: flex;
  width: 53vw;
  justify-content: space-between;
  /* border: 2px solid gray; */
`;

export const FooterBoxLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 476px;
  /* border: 2px solid blue; */
  & > span {
    margin-bottom: 5px;
    font-size: 11px;
    color: #c58940;
  }
`;

export const NoticeBox = styled.div`
  display: flex;
  width: 476px;
  height: 40px;
  margin-top: 20px;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  border: 1.5px solid #c58940;
  & > img {
    margin: 0px 16px;
  }
  & > span {
    font-size: 14px;
    color: #c58940;
  }
`;

export const FooterBoxRight = styled.span`
  display: flex;
  width: 150px;
  margin-top: 80px;
  font-size: 11px;
  color: #c58940;
  /* border: 2px solid green; */
`;
