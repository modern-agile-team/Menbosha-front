import styled from 'styled-components';

/**멘토 리스트 컨테이너 */
export const MentorListContainer = styled.div`
  margin-top: 74px;
  @media only all and (max-width: 1900px) {
    margin-top: 4.961%; //74
  }
  width: 100%;
`;

/**리스트 제목 박스 */
export const ListTitleBox = styled.div`
  color: #ff772b;
  margin: 0px 0px 24px 0px;
  font-weight: bold;
  font-size: 30px;
`;

/**멘토 유닛 템플릿 */
export const ContentContainer = styled.div`
  display: flex;
  margin: 100px 0px 100px 0px;
  > :nth-child(1) {
    font-size: 64px;
    font-weight: bold;
    color: #ff772b;
    width: 180px;
  }
  > :nth-child(2) {
    margin: 0px 117px;
  }
`;

export const MentorReviewContainer = styled.div`
  & > :nth-child(1) {
    font-size: 20px;
    font-weight: bold;
    color: #ff772b;
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
    margin-top: 10vw;
    cursor: pointer;
  }
`;
