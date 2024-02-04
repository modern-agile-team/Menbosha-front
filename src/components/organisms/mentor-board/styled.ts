import styled from 'styled-components';

/**MentorBoardCard.tsx */

export const MentoBoardCardContainer = styled.div`
  display: flex;
  width: 1560px;
  min-height: 500px;
  flex-wrap: wrap;
`;

export const MentorBoardCardWrapper = styled.div`
  /* margin: 0px 14px 118px 14px; */
  display: flex;
  justify-content: space-between;
  width: 20%;
  height: 545px;
`;

/** RandomMentorBoard */
export const RandomMentorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 33.3%;
  height: 545px;
  > :nth-child(1) {
    > :nth-child(2) {
      > :nth-child(1) {
        width: 450px;
      }
    }
  }
`;
