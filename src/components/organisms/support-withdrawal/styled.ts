import styled from 'styled-components';

export const WithdrawalContainer = styled.div`
  margin: 6.4vh 0px;
  //회원탈퇴 페이지 타이틀
  & > :nth-child(1) {
    font-size: 64px;
    font-weight: 900;
    color: #ff772b;
  }
  //하위요소
  & > :nth-child(2) {
    margin: 9vh 14vw;
  }
`;

/**아래 체크 아이콘 */
export const CheckIcon = styled.div`
  margin-top: 0.4%;
  position: relative;
  margin-right: 25px;
  &::after {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: 15px; /* 사이즈 */
    height: 6px; /* 사이즈 */
    border-top: 2px solid #ff772b; /* 선 두께 */
    border-right: 2px solid #ff772b; /* 선 두께 */
    transform: rotate(135deg); /* 각도 */
  }
`;

export const ExplainTitleContainer = styled.div`
  display: flex;
  margin-bottom: 6.4vh;
`;

export const ExplainTitleBox = styled.div`
  & > :nth-child(1) {
    font-size: 20px;
    font-weight: 700;
    color: #000;
  }
  & > :nth-child(2) {
    font-size: 16px;
    color: #ff772b;
  }
`;

export const ExplainBodyBox = styled.div`
  margin-top: 21px;
`;

export const ExplainTextBox = styled.div`
  display: flex;
  & > :nth-child(1) {
    text-align: center;
    width: 8vw;
    font-size: 20px;
    color: #ff772b;
    border: 1px solid #ff772b;
    padding: 20px 40px;
  }
  & > :nth-child(2) {
    width: 30vw;
    font-size: 16px;
    color: #000;
    border: 1px solid #ff772b;
    padding: 2.5vh 2.1vw;
  }
`;

export const NotificationBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 41px;
  & > :nth-child(1) {
    border: 1px solid #ff772b;
  }
  & > :nth-child(2) {
    font-size: 16px;
  }
`;

export const ConfirmationButton = styled.div`
  margin: 2.4vh 0px;
  display: flex;
  justify-content: center;
  & > :nth-child(1) {
    cursor: pointer;
    padding: 0.6vh 3.2vw;
    border: 1px solid #ff772b;
    border-radius: 10px;
  }
`;
