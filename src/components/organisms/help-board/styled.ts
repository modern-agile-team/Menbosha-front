import styled, { css } from 'styled-components';

/**MentorBoardCard.tsx */

export const HelpCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > :nth-child(1) {
    margin-right: 14px;
  }
  /* 각 행의 첫 번째 요소 */
  & > :nth-child(4n + 1) {
    margin: 14px 14px 14px 0px;
  }
  /* 각 행의 마지막 요소 */
  & > :nth-child(4n) {
    margin: 14px 0px 14px 14px;
  }
  & > :not(:nth-child(1), :nth-child(4n + 1), :nth-child(4n)) {
    margin: 14px 14px;
  }
  //1900px이하 일 땐 반응형
  @media only all and (max-width: 1920px) {
    & > :nth-child(1) {
      margin-right: 0.926%; //14
    }
    /* 각 행의 첫 번째 요소 */
    & > :nth-child(4n + 1) {
      margin: 0.926% 0.926% 0.926% 0px; //14 14 14 0
    }
    /* 각 행의 마지막 요소 */
    & > :nth-child(4n) {
      margin: 0.926% 0px 0.926% 0.926%; // 14 0 14 14 14
    }
    & > :not(:nth-child(1), :nth-child(4n + 1), :nth-child(4n)) {
      margin: 0.926%; //14
    }
  }
`;

export const HelpCardWrapper = styled.div`
  width: 23.6%;
`;
