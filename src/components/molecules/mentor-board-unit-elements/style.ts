import styled from 'styled-components';

export const SlideContain = styled.div`
  overflow: hidden;
  width: 46vw;
  min-width: 434px;
  height: 290px;
`;

export const SlidImages = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
`;

export const BodyImages = styled.img`
  min-width: 434px;
  width: 46vw;
  height: 290px;
  object-fit: scale-down;
  background-color: #999;
`;

export const BodyContentBox = styled.div`
  min-width: 434px;
  width: 46vw;
  :nth-child(1) {
    overflow-wrap: break-word;
    width: 100%;
  }
`;

//멘토 게시글
export const MentorBoardTitleInfo = styled.div`
  & > :nth-child(1) {
    font-size: 10px;
    color: rgba(0, 0, 0, 0.5);
  }
  & > :nth-child(2) {
    font-size: 40px;
    font-weight: bold;
    color: #ff772f;
  }
`;

/**멘토 게시글 작성 유저 */
export const MentorBoardOwnerUser = styled.div`
  display: flex;
  margin: 41px 0px 24px 0px;
  & > img {
    width: 51px;
    height: 51px;
    border-radius: 10px;
  }
`;

export const HeadProfile = styled.div`
  padding: 0px 0px 0px 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonBox = styled.div`
  display: flex;
  margin-left: auto;
  & > img {
    width: 24px;
    height: 24px;
    margin: auto 18px;
  }
`;
