import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  width: 65%;
  margin: 100px 50px 100px 0px;
  > :nth-child(1) {
    font-size: 64px;
    font-weight: bold;
    color: #ff772b;
    width: 180px;
  }
  > :nth-child(2) {
    width: 90%;
    display: flex;
    justify-content: center;
  }
`;

/**page title */
export const MentorPageTitleContainer = styled.div`
  & > :nth-child(1) {
    @media only all and (max-width: 1700px) {
      font-size: 25px;
    }
  }
  & > :nth-child(2) {
    width: 100%;
    cursor: pointer;
  }
`;

/**멘토 리뷰 */
export const MentorReviewWrapper = styled.div`
  display: flex;
  width: 65%;
  > :nth-child(1) {
    width: 180px;
    @media only all and (max-width: 1600px) {
      display: none;
    }
  }
`;

export const MentorReviewContainer = styled.div`
  width: 100%;
  & > :nth-child(1) {
    font-size: 20px;
    font-weight: bold;
    color: #ff772b;
  }
`;
