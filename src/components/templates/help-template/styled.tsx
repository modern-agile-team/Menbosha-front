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

export const HelpBoardCategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  background-color: #fff;
  top: 0px;
  margin: 40px 0px 0px 0px;
`;

/**게시글 제목 박스 */
export const BoardTitleBox = styled.div`
  color: #ff772b;
  margin: 0px 0px 24px 0px;
  font-weight: bold;
  font-size: 36px;
`;

/**멘토 게시판 리스트 컨테이너 */
export const HelpBoardListContainer = styled.div`
  width: auto;
  height: 500px;
  min-width: 1560px;
  margin: 90px;
`;
