import Link from 'next/link';
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

/**멘토 게시판 리스트 헤더 카테고리 헤더 컨테이너 */
export const MentorBoardCategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  background-color: #fff;
  top: 0px;
  margin: 40px 0px 0px 0px;
`;

/**멘토 게시판 리스트 컨테이너 */
export const MentorBoardListContainer = styled.div`
  width: auto;
  height: 500px;
  min-width: 1560px;
  margin: 90px;
`;

/**인기 멘토 리스트 컨테이너*/
export const PopularMentorListContainer = styled.div`
  height: 1100px;
`;

/**게시글 제목 박스 */
export const BoardTitleBox = styled.div`
  color: #ff772b;
  margin: 0px 0px 24px 0px;
  font-weight: bold;
  font-size: 36px;
`;

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

/**멘토 리뷰 */
export const MentorReviewWrapper = styled.div`
  display: flex;
  width: 65%;
  border: 2px solid #0ff;
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

/**page title */
export const MentorPageTitleContainer = styled.div`
  & > :nth-child(1) {
    @media only all and (max-width: 1700px) {
      font-size: 25px;
    }
  }
  & > :nth-child(2) {
    width: 100%;
  }
`;
