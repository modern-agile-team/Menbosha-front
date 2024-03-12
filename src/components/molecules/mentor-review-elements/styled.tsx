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
    font-size: 0.85em; //20.4px
    font-weight: 400; //Pretendard-Regular
    padding: 0.42vh 0.69vw;
    border: 2px solid #fff;
    color: #fff;
    border-radius: 10px;
    margin: 0.5vw;
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
  & > :nth-child(2) {
    color: #fff;
    font-size: 0.65em; //15px
    font-weight: 300; //Pretendard-Medium
    text-align: center;
  }
  & > :nth-child(3) {
    color: #fff;
    font-size: 0.5em; //12px
    font-weight: 400; //Pretendard-Regular
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
  //유저 이름
  @media only all and (max-width: 1000px) {
    display: none;
  }
  & > :nth-child(1) {
    color: #fff;
    font-size: 0.85em; //20.4px
    font-weight: 700; //Pretendard-Bold
    padding-left: 10px;
  }
  //유저 인포
  & > :nth-child(2) {
    font-size: 0.5em; //12px
    font-weight: 400; //Pretendard-Regular
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
  //생성 시간
  & > :nth-child(1) {
    font-size: 0.42em; //10.08px
    font-weight: 300; //Pretendard-Light
    color: #ffffff;
  }
  //리뷰 본문
  & > :nth-child(2) {
    font-size: 0.67em; //16.08px
    font-weight: 400; //Pretendard-Regular
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
