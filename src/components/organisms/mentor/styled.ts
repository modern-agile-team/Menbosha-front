import styled from 'styled-components';

/**멘토 카드 컨테이너 */
export const MentorCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > :nth-child(1) {
    margin-right: 14px;
  }
  /* 각 행의 첫 번째 요소 */
  & > :nth-child(5n + 1) {
    margin: 14px 14px 14px 0px;
  }
  /* 각 행의 마지막 요소 */
  & > :nth-child(5n) {
    margin: 14px 0px 14px 14px;
  }
  & > :not(:nth-child(1), :nth-child(5n + 1), :nth-child(5n)) {
    margin: 14px;
  }
  //1900px이하 일 땐 반응형
  @media only all and (max-width: 1900px) {
    & > :nth-child(1) {
      margin-right: 0.926%; //14
    }
    /* 각 행의 첫 번째 요소 */
    & > :nth-child(5n + 1) {
      margin: 0.926% 0.926% 0.926% 0px; //14 14 14 0
    }
    /* 각 행의 마지막 요소 */
    & > :nth-child(5n) {
      margin: 0.926% 0px 0.926% 0.926%; // 14 0 14 14 14
    }
    & > :not(:nth-child(1), :nth-child(5n + 1), :nth-child(5n)) {
      margin: 0.926%; //14
    }
  }
  @media only all and (max-width: 1200px), (max-height: 1000px) {
    & > :nth-child(n) {
      margin: 0.926%;
    }
  }
`;

export const MentorCardWrapper = styled.div`
  width: 14.5vw;
  @media only all and (max-width: 1200px) {
    width: 24.7vw;
  }
  @media only all and (max-width: 500px) {
    width: 37.9vw;
  }
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
  //랭크 이미지
  & > :nth-child(1) {
    padding: 40px;
    border: 3px solid #ff772b;
    border-radius: 19px;
    @media only all and (max-width: 1000px) {
      padding: 4vw;
      width: 50px;
      height: 50px;
    }
  }
  //랭크 인포
  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
    color: #ff772b;
    margin-top: 15px;
    //랭크 이름
    :nth-child(1) {
      font-size: 1em; //24px
      font-weight: 700; //Pretendard-Bold
    }
    //랭크 점수
    :nth-child(2) {
      font-size: 0.67em; //16.08px
      font-weight: 400; //Pretendard-Regular
      align-items: start;
    }
  }
`;

export const MentorInfoBox = styled.div`
  margin: 0px 14px;
  & > img {
    width: 280px;
    height: 380px;
    border-radius: 10px;
    @media only all and (max-width: 1000px) {
      width: 28vw;
      height: 27vh;
    }
  }
  > :nth-child(2) {
    color: #ff772b;
    font-size: 1.7em; //40.8px
    font-weight: 700; //Pretendard-Bold
    margin-top: 10px;
  }
`;

export const BodyContentsBox = styled.div`
  width: 35%;
  min-height: 120px;
  height: auto;
  //컨텐츠 1번째
  & > :nth-child(1) {
    color: #ff772b;
    font-size: 0.84em; //20.16px
    font-weight: 700; //Pretendard-Bold
  }
  //컨텐츠 2번째
  & > :nth-child(2) {
    padding-top: 24px;
    font-size: 0.67em; //16.08px
    font-weight: 400; //Pretendard-Medium
  }
`;

export const DetailBox = styled.div`
  width: 80%;
  min-height: 120px;
  height: auto;
  & > :nth-child(1) {
    color: #ff772b;
    font-size: 0.84em; //20.16px
    font-weight: 700; //Pretendard-Bold
  }
  & > :nth-child(2) {
    padding-top: 24px;
    font-size: 0.67em; //16.08px
    font-weight: 400; //Pretendard-Medium
  }
`;

export const ShareBox = styled.div`
  width: 45%;
  min-height: 120px;
  height: auto;
  & > :nth-child(1) {
    color: #ff772b;
    font-size: 0.84em; //20.16px
    font-weight: 700; //Pretendard-Bold
  }
  & > :nth-child(2) {
    font-size: 0.67em; //16.08px
    font-weight: 400; //Pretendard-Medium
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
    justify-content: center;
  }
`;

export const MentorOtherBoardContainer = styled.div`
  margin-top: 80px;
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
  margin-top: 14px;
  //다른 게시글 모든 요소
  & > :nth-child(n) {
    width: 15.2vw;
  }
  //다른 게시글 첫 번째 요소
  & > :nth-child(1) {
    padding-right: 14px;
  }
  //다른 게시글 두 번째 요소
  & > :nth-child(2) {
    padding: 0px 14px;
  }
  //다른게시글 세 번째 요소
  & > :nth-child(3) {
    padding-left: 14px;
  }
`;

export const ReviewElementWrapper = styled.div`
  margin-top: 27px;
`;

export const ReviewContentContainer = styled.div`
  border-bottom: 1px solid #ff772b;
  padding: 24px 0px;
`;

export const ReviewLoadingBox = styled.div`
  & > :nth-child(n) {
    margin: 12px 0px;
  }
`;
