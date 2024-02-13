import styled from 'styled-components';

export const SupportContainer = styled.div`
  width: 1512px;
  margin: 64px 204px;
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
  display: flex;
  justify-content: space-between;
  margin-top: 64px;
  & > :nth-child(n) {
    cursor: pointer;
    text-decoration: none;
    padding: 46px 104px 37px 104px;
    margin: 31.5px;
    width: 330px;
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
