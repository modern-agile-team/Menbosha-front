import styled from 'styled-components';

export const MentoCardContainer = styled.div`
  display: flex;
  width: 1560px;
  min-height: 500px;
  flex-wrap: wrap;
`;

export const MentorCardWrapper = styled.div`
  width: 290px;
  height: 460px;
  margin: 8px;
`;

export const HeaderContentsBox = styled.div`
  display: flex;
  justify-content: center;
  & > :nth-child(3) {
    display: flex;
    flex-direction: column;
    width: 23%;
    :nth-child(n) {
      width: 28px;
      padding: 8px 0px;
    }
  }
`;

export const RankBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin: 0px 14px;
  & > :nth-child(1) {
    padding: 40px;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 19px;
  }
  & > :nth-child(2) {
    display: flex;
    color: #ff772b;
    margin-top: 20px;
    :nth-child(1) {
      font-size: 36px;
      font-weight: bold;
    }
    :nth-child(2) {
      font-size: 16px;
      display: flex;
      align-items: end;
      margin-left: 12px;
    }
  }
`;

export const MentorInfoBox = styled.div`
  margin: 0px 14px;
  & > img {
    width: 280px;
    height: 380px;
    border-radius: 10px;
  }
  > :nth-child(2) {
    display: flex;
    color: #ff772b;
    font-size: 40px;
    font-weight: bold;
    margin-top: 10px;
  }
`;

export const BodyContentsBox = styled.div`
  width: 35%;
  height: 120px;
  & > :nth-child(1) {
    color: #ff772b;
    font-size: 20px;
    font-weight: bold;
  }
  & > :nth-child(2) {
    padding-top: 24px;
    font-size: 16px;
  }
`;

export const DetailBox = styled.div`
  width: 80%;
  min-height: 120px;
  height: auto;
  & > :nth-child(1) {
    color: #ff772b;
    font-size: 20px;
    font-weight: bold;
  }
  & > :nth-child(2) {
    padding-top: 24px;
    font-size: 16px;
  }
`;

export const ShareBox = styled.div`
  width: 45%;
  height: 120px;
  & > :nth-child(1) {
    color: #ff772b;
    font-size: 20px;
    font-weight: bold;
  }
  & > :nth-child(2) {
    padding-top: 24px;
    font-size: 16px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 50vw;
`;

export const MentorInfoContainer = styled.div`
  margin-top: 65px;
`;

export const BadgeContainer = styled.div`
  & > :nth-child(1) {
    color: #ff772b;
    font: 20px;
    text-align: center;
    font-weight: bold;
  }
  & > :nth-child(2) {
    display: flex;
  }
`;

export const MentorOtherBoardContainer = styled.div`
  margin-top: 80px;
  height: 450px;
  & > :nth-child(1) {
    color: #ff772b;
    font: 20px;
    font-weight: bold;
  }
  & > :nth-child(2) {
    display: flex;
    justify-content: space-between;
    overflow: hidden;
  }
`;

export const MentorOtherBoardsWrapper = styled.div`
  display: flex;
  & > :nth-child(n) {
    padding: 14px;
  }
`;
