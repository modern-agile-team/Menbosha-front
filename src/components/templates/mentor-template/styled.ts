import styled from 'styled-components';

/**멘토 리스트 컨테이너 */
export const MentorListContainer = styled.div`
  min-width: 1560px;
`;

interface SlideType {
  isSlide: boolean;
}

export const HiddenSlide = styled.div<SlideType>`
  height: 100%;
  /* width: 0px; */
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #252525;
  overflow-x: hidden;
  transform: ${({ isSlide }) =>
    isSlide ? 'translateX(260px)' : 'translateX(2000px)'};
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
`;

/**멘토 게시판 리스트 컨테이너 */
export const MentorBoardListContainer = styled.div`
  width: auto;
  height: 500px;
  min-width: 1560px;
`;

/**인기 멘토 리스트 컨테이너*/
export const PopularMentorListContainer = styled.div`
  height: 1100px;
`;

export const ContentContainer = styled.div`
  display: flex;
  border: 2px solid #98f;
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
    border: 2px solid #00f;
  }
`;
