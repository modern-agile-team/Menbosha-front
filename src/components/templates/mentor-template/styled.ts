import styled from 'styled-components';

/**멘토 리스트 컨테이너 */
export const MentorListContainer = styled.div`
  display: flex;
  width: auto;
  min-width: 1560px;
  max-height: 500px;
  border: 2px solid #f00;
  margin: 50px 0px;
  overflow: auto;
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
  border: 2px solid #f00;
  overflow: auto;
`;
