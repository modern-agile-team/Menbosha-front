import styled from 'styled-components';

export const HeadTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 65px 0px 0px 0px;
  > :nth-child(1) {
    display: flex;
    width: 78%;
    > :nth-child(1) {
      color: #ff772b;
      font-size: 64px;
      font-weight: bold;
    }
    > :nth-child(2) {
      color: #ff792bbf;
      height: 75px;
      font-size: 20px;
      font-weight: bold;
      display: flex;
      align-items: end;
    }
  }
`;

/**게시글 제목 박스 */
export const BoardTitleBox = styled.div`
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

/**멘토 게시판 리스트 컨테이너 */
export const HelpBoardListContainer = styled.div`
  margin-top: 74px;
  @media only all and (max-width: 1900px) {
    margin-top: 4.961%; //74
  }
  width: 100%;
`;
