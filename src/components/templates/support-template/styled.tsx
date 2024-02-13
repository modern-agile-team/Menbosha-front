import styled from 'styled-components';

export const SupportContainer = styled.div`
  width: 80%;
  margin: 64px 204px;
  @media only all and (max-width: 1500px) {
    width: 80%;
    margin: 6% 20%;
  }
`;

export const SupportHeaderBox = styled.div`
  display: flex;
  & > :nth-child(1) {
    font-size: 64px;
    font-weight: bold;
    color: #ff772b;
  }
  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 0px 24px;
    font-size: 20px;
    color: rgb(255, 119, 43, 0.75);
  }
`;

export const SupportButtonContainer = styled.div`
  @media only all and (max-width: 1000px) {
    flex-wrap: wrap;
    text-align: center;
    flex-direction: column;
  }
  display: flex;
  margin-top: 64px;
  justify-content: space-between;
  & > :nth-child(n) {
    cursor: pointer;
    text-decoration: none;
    padding: 46px 104px 37px 104px;
    @media only all and (max-width: 1500px) {
      padding: 4% 5% 6% 5%;
      width: 25%;
    }
    background-color: #ff772b;
    border-radius: 10px;
    color: #fff;
    & > img {
      width: 100%;
      padding-bottom: 30px;
    }
    & > :nth-child(2) {
      font-size: 20px;
      @media only all and (max-width: 1600px) {
        font-size: 12px;
      }
      text-align: center;
    }
  }
  & > :nth-child(1) {
    margin: 0px 31.5px 0px 0px;
  }
  & > :nth-last-child(1) {
    margin: 0px 0px 0px 31.5px;
  }
  & > :not(:nth-child(1), :nth-last-child(1)) {
    margin: 0px 31.5px;
  }
`;

export const SupportEtcContainer = styled.div`
  & > :nth-child(1) {
    font-size: 30px;
    color: #ff772b;
    margin: 60px 0px 25px 0px;
    font-weight: bold;
  }
  & > :not(:nth-child(1)) {
    font-size: 20px;
    display: flex;
    border-bottom: 2px solid #ff772b;
    margin: 14px 0px;
  }
`;

export const SupportElementBox = styled.div`
  cursor: pointer;
  padding: 0px 5px 15px 0px;
`;

//QnA Container
export const QnAContainer = styled.div`
  width: 80%;
  margin: 64px 204px;
`;
