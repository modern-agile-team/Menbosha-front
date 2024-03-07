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
  font-weight: 700; //bold
  font-size: 1.5em;
`;

/**리스트 서브 제목 */
export const ListSubTitleBox = styled.div`
  color: #ff772b;
  margin: 0px 0px 24px 0px;
  font-weight: 700; //bold
  font-size: 1em;
`;

/**멘토 유닛 템플릿 */
export const ContentContainer = styled.div`
  display: flex;
  margin: 100px 0px 100px 0px;
  > :nth-child(1) {
    color: #ff772b;
  }
`;

export const MentorReviewContainer = styled.div`
  margin-top: 120px;
  & > :nth-child(1) {
    font-size: 20px;
    font-weight: bold;
    color: #ff772b;
  }
`;

/**page title */
export const MentorPageTitleContainer = styled.div`
  width: 18vw;
  & > :nth-child(1) {
    font-size: 2.67em; //64.08px
    font-weight: 900; //Pretendard-Black
  }
  //prev btn
  & > :nth-child(2) {
    margin-top: 10vw;
    width: 10vw;
    height: 18vh;
    cursor: pointer;
  }
`;
