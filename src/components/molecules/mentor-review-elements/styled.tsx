import styled, { css } from 'styled-components';

interface BgType {
  defaultBg: boolean;
}

export const ReviewContentBox = styled.div`
  display: flex;
  width: 100%;
`;

export const CheckListContainer = styled.div<BgType>`
  display: flex;
  & > * {
    padding: 6px 12px;
    border: 1px solid #fff;
    color: #fff;
    border-radius: 10px;
    margin: 10px;
  }
  //defaultBg true시
  ${({ defaultBg }) =>
    defaultBg &&
    css`
      & > * {
        color: #000;
        border: 1px solid #ff772b;
      }
    `}
`;

export const RankBox = styled.div<BgType>`
  padding: 0px 10px 0px 10px;
  & > :not(:nth-child(1)) {
    color: #fff;
    font-size: 15px;
    text-align: center;
  }
  //defaultBg true시
  ${({ defaultBg }) =>
    defaultBg &&
    css`
      & > :not(:nth-child(1)) {
        color: #000;
      }
    `}
`;

export const UserInfoBox = styled.div<BgType>`
  & > :nth-child(1) {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    padding-left: 10px;
  }
  & > :nth-child(2) {
    font-size: 16px;
    color: #ffffff;
    padding: 10px;
  }
  //defaultBg true시
  ${({ defaultBg }) =>
    defaultBg &&
    css`
      & > :nth-child(1) {
        color: #000;
      }
      & > :nth-child(2) {
        color: rgba(0, 0, 0, 0.75);
      }
    `}
`;

export const ReviewTextBox = styled.div<BgType>`
  margin: 0px auto 0px auto;
  & > :nth-child(1) {
    font-size: 10px;
    color: #ffffff;
  }
  & > :nth-child(2) {
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
  }
  //defaultBg true시
  ${({ defaultBg }) =>
    defaultBg &&
    css`
      & > :nth-child(1) {
        color: rgba(0, 0, 0, 0.5);
      }
      & > :nth-child(2) {
        color: rgba(0, 0, 0, 0.75);
      }
    `}
`;

export const ReportBox = styled.div`
  padding-right: 25px;
  margin-left: auto;
`;
