import styled from 'styled-components';

export const ReviewContentBox = styled.div`
  display: flex;
  width: 100%;
`;

export const CheckListContainer = styled.div`
  display: flex;
  & > * {
    padding: 6px 12px;
    border: 1px solid #ff772b;
    border-radius: 10px;
    margin: 10px;
  }
`;

export const RankBox = styled.div`
  padding: 0px 10px 0px 10px;
  & > :not(:nth-child(1)) {
    font-size: 15px;
    text-align: center;
  }
`;

export const UserInfoBox = styled.div`
  & > :nth-child(1) {
    font-size: 20px;
    font-weight: bold;
    padding-left: 10px;
  }
  & > :nth-child(2) {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.75);
    padding: 10px;
  }
`;

export const ReviewTextBox = styled.div`
  margin: 0px auto 0px auto;
  & > :nth-child(1) {
    font-size: 10px;
    color: rgba(0, 0, 0, 0.5);
  }
  & > :nth-child(2) {
    font-size: 16px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.75);
  }
`;

export const ReportBox = styled.div`
  padding-right: 25px;
  margin-left: auto;
`;
