import styled, { css } from 'styled-components';

/**멘토 게시글 카드 컨테이너 */
export const MentorBoardCardContainer = css`
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
    margin: 14px 14px;
  }
`;

/** 랜덤 멘토 게시글 컨테이너*/
export const RandomBoardCardContainer = styled.div`
  ${MentorBoardCardContainer}
`;

/** 인기 멘토 게시글 컨테이너*/
export const PopBoardCardContainer = styled.div`
  ${MentorBoardCardContainer}
`;

export const MentorBoardCardWrapper = styled.div`
  width: 18.5%;
`;

/** 랜덤 멘토 게시글 */
export const RandomBoardWrapper = styled.div`
  width: 31.79%;
`;

/** MentorBoardUnit */
export const MentorBoardUnitContainer = styled.div`
  display: flex;
  padding: 130px;
  & > :nth-child(1) {
    padding: 200px 110px 0px 0px;
  }
  & > :nth-child(1) {
    > img {
      width: 10vw;
      height: 10vw;
      cursor: pointer;
    }
  }
`;
