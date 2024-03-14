import styled from 'styled-components';

/**멘토 게시글 카드 컨테이너 */
export const MentorBoardCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media only all and (max-width: 1000px) {
    display: block;
    flex-wrap: nowrap;
  }
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
    margin: 14px 14px;
  }
  //1900px이하 일 땐 반응형
  @media only all and (max-width: 1920px) {
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
`;

export const MentorBoardCardWrapper = styled.div`
  width: 18.5%;
  @media only all and (max-width: 1000px) {
    width: 100%;
  }
`;

/** 랜덤 멘토 게시글 */
export const RandomBoardWrapper = styled.div`
  width: 31.79%;
  @media only all and (max-width: 1000px) {
    width: 100%;
  }
`;

//MentorBoardUnit
export const MentorBoardUnitContainer = styled.div`
  display: flex;
  margin-top: 130px;
  //이전 버튼
  & > :nth-child(1) {
    padding: 12.5vw 0px 0px 0px;
    > img {
      cursor: pointer;
      width: 10vw;
    }
  }
`;

export const MentorBoardContentContainer = styled.div`
  margin: 0px 8.5vw;
`;
