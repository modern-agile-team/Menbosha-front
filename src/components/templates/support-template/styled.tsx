import styled from 'styled-components';

/**오른쪽 화살표 아이콘  [ > ]*/
export const ArrowIcon = styled.div`
  margin-top: 0.4%;
  position: relative;
  &::after {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: 8px; /* 사이즈 */
    height: 8px; /* 사이즈 */
    border-top: 4px solid #000; /* 선 두께 */
    border-right: 4px solid #000; /* 선 두께 */
    transform: rotate(45deg); /* 각도 */
  }
`;

export const SupportContainer = styled.div`
  width: 80%;
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
  margin-top: 64px;
  flex-wrap: wrap;
  justify-content: space-between;
  @media only all and (max-width: 1500px) {
    justify-content: center;
  }
  & > :nth-child(n) {
    cursor: pointer;
    text-decoration: none;
    padding: 46px 104px 37px 104px;
    background-color: #ff772b;
    border-radius: 10px;
    color: #fff;
    & > img {
      width: 120px;
      @media only all and (min-width: 1000px) and (max-width: 1600px) {
        width: 100px;
      }
      @media only all and (max-width: 1000px) {
        width: 50px;
      }
      padding-bottom: 30px;
    }
    & > :nth-child(2) {
      font-size: 20px;
      text-align: center;
    }
  }
  & > :nth-child(1) {
    margin: 0px 31.5px 0px 0px;
    @media only all and (max-width: 1500px) {
      margin: 10px 31.5px;
    }
  }
  & > :nth-last-child(1) {
    margin: 0px 0px 0px 31.5px;
    @media only all and (max-width: 1500px) {
      margin: 10px 31.5px;
    }
  }
  & > :not(:nth-child(1), :nth-last-child(1)) {
    margin: 0px 31.5px;
    @media only all and (max-width: 1500px) {
      margin: 10px 31.5px;
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
  text-decoration: none;
  color: #000;
  padding: 0px 5px 15px 0px;
`;

//QnA Container
export const QnAContainer = styled.div`
  width: 80%;
  margin: 64px 204px;
  & > :nth-child(1) {
    font-size: 64px;
    font-weight: bold;
    color: #ff772b;
    padding-bottom: 27px;
    border-bottom: 2px solid #ff772b;
  }
`;

export const QnAContentNListWrapper = styled.div`
  display: flex;
`;

export const ListContainer = styled.div`
  border-right: 2px solid #ff772b;
  width: 13%;
  & > :nth-child(n) {
    text-align: center;
    padding: 0px 65px;
    margin: 18px 0px;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const ContentsContainer = styled.div`
  width: 70%;
  margin: 36px 0px 0px 126px;
  & > :nth-child(1) {
    font-size: 48px;
    font-weight: bold;
    color: #ff772b;
  }
  & > :nth-child(2) {
    margin: 48px 24px;
  }
`;
