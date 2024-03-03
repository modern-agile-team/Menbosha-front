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
  margin: 24px 0px;
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

export const ButtonContainer = styled.div`
  display: flex;
  margin-left: auto;
  & > img {
    width: 24px;
    height: 24px;
    margin: auto 18px;
    cursor: pointer;
  }
`;

export const LikeContainer = styled.div`
  margin: 94px 0px 50px auto;
  & > img {
    cursor: pointer;
  }
`;

export const MentorInfoCardContainer = styled.div`
  border: 2px solid #ff772b;
  border-radius: 10px;
  padding: 24px;
  text-align: center;
  width: 14.5vw;
  //멘토 이미지
  & > img {
    width: 100%;
    height: 60%;
    border-radius: 10px;
  }
  //멘토 info박스
  & > :nth-child(2) {
    display: flex;
    padding: 27px 0px 0px 5px;
    @media only all and (max-width: 800px) {
      display: block;
    }
  }
`;

export const MentorRankInfo = styled.div`
  & > :nth-child(1) {
    width: 50px;
    height: 50px;
  }
  & > :nth-child(2) {
    font-size: 15px;
    font-weight: bold;
  }
  & > :nth-child(3) {
    font-size: 12px;
  }
`;

export const MentorInfoBox = styled.div`
  margin: 0px 35px;
  text-align: left;
  //유저 info의 이름
  & > :nth-child(1) {
    font-size: 20px;
    font-weight: bold;
  }
  //유저 info의 정보 박스
  & > :nth-child(2) {
    padding: 12px 0px;
    color: #000000;
  }
  & > :not(:nth-child(1)) {
    font-size: 12px;
  }
`;

export const MentorOtherBoardsContainer = styled.div`
  margin: 26px;
  & > :nth-child(1) {
    color: #ff772b;
    font-size: 24px;
    font-weight: bold;
  }
  & > :nth-child(2) {
    display: flex;
  }
`;

export const MentorBoardCardWrapper = styled.div`
  width: 280px;
  margin: 14px;
`;
