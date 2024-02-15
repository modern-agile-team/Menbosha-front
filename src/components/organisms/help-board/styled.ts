import styled, { css } from 'styled-components';

/**MentorBoardCard.tsx */

export const HelpCardContainer = css`
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
`;

export const PullingUpCardContainer = styled.div`
  ${HelpCardContainer}
`;

export const HelpCardWrapper = styled.div`
  width: 357px;
`;
