import styled from 'styled-components';

export const SlideContain = styled.div`
  overflow: hidden;
  width: 45vw;
  height: 34vh;
`;

export const SlidImages = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const ImageNextNPrevButton = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  margin: 0px 25px;
  font-size: 64px;
`;

export const BodyImages = styled.img`
  width: 45vw;
  height: 34vh;
  background-size: cover;
  object-fit: scale-down;
  background-color: #999;
`;

export const HelpContentBodyValueBox = styled.div`
  margin-top: 4.8vh;
`;

export const HelpHeadContainer = styled.div`
  & > :nth-child(2) {
    display: flex;
    margin: 0px 0px 2.3vh 0px;
  }
`;

export const HelpBoardTitleBox = styled.div`
  width: 50vw;
  & > :nth-child(1) {
    font-size: 1.67em; //40.08px
    font-weight: 700; //Pretendard-Bold
    color: #ff772b;
    margin: 0px 0px 41px 0px;
  }
`;

export const UserInfoBox = styled.div`
  padding: 0.5vh 0px 0px 2.3vh;
  //이름
  & > :nth-child(1) {
    font-size: 0.67em; //16.08px
    font-weight: 700;
    color: #000;
    padding: 0px 0px 5px 0px;
  }
  //카테고리, 날짜
  & > :nth-child(2) {
    display: flex;
    > * {
      margin: 0px 25px 0px 0px;
    }
    //카테고리
    & > :nth-child(1) {
      font-size: 0.5em; //12px
      font-weight: 400; //Pretendard-Regular
      color: rgba(0, 0, 0, 0.75);
    }
    //생성 날짜
    & > :nth-child(2) {
      font-size: 0.42em; //10.08px
      font-weight: 300; //Pretendard-Light
      color: rgba(0, 0, 0, 0.75);
    }
  }
`;

export const ActiveButtonBox = styled.div`
  display: flex;
  @media only all and (max-width: 900px) {
    display: block;
  }
  margin-left: auto;
  & > :nth-child(1) {
    cursor: pointer;
    font-size: 0.67em; //16.08px
    font-weight: 700; //Pretendard-Bold
    line-height: 2.4vh;
    margin: auto 1.7vh;
    padding: 0.5vw 1vh;
    color: #fff;
    border-radius: 10px;
    background-color: #ff772b;
  }
  & > img {
    cursor: pointer;
    margin: auto 17px;
    width: 24px;
    height: 24px;
  }
`;

export const UserImg = styled.img`
  width: 2.7vw;
  height: 4.8vh;
  border-radius: 10px;
`;

export const HelpCommentCountBox = styled.div`
  color: #ff772b;
  font-size: 0.84em; //20.16px
  font-weight: 700; //Pretendard-Bold
`;

export const HelpYouCommentButton = styled.div`
  cursor: pointer;
  margin-left: auto;
`;

/**도와주세요 댓글 컨테이너 */
export const CommentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > :nth-child(n) {
    margin: 14px 0px;
    width: 48%;
  }
  & > :nth-child(2n -1) {
    margin-right: 0.8vw;
  }
  & > :nth-child(2n) {
    margin-left: 0.8vw;
  }
`;

export const CommentBorder = styled.div`
  border: 2px solid #ff772b;
  border-radius: 10px;
`;

export const CommentContentBox = styled.div`
  display: flex;
  > * {
    margin: 18px 9px 18px 9px;
  }
  //이미지 박스
  > :nth-child(1) {
    width: 5.9vw;
    height: 10.5vh;
    border-radius: 10px;
    margin-left: 1vw;
  }
`;

/**랭크박스 */
export const RankBox = styled.div`
  vertical-align: middle;
  margin: auto;
  & > :nth-child(1) {
    width: 40px;
    height: 40px;
  }
  & > :nth-child(2),
  :nth-child(3) {
    font-size: 13px;
    text-align: center;
  }
  @media only all and (max-width: 950px) {
    display: none;
  }
`;

/**정보박스 */
export const CategoryBox = styled.div`
  margin: auto;
  width: 10vw;
  //이름
  & > :nth-child(1) {
    font-size: 20px;
    font-weight: bold;
  }
  //정보
  & > :nth-child(2),
  :nth-child(3),
  :nth-child(4) {
    font-size: 12px;
    @media only all and (max-width: 500px) {
      display: none;
    }
  }
  & > :nth-child(2),
  :nth-child(3) {
    @media only all and (max-width: 750px) {
      display: none;
    }
  }
`;

export const HelpCommentButtonBox = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > * {
    padding: 10px;
    cursor: pointer;
  }
`;

export const HelpCommentSkeletonBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > :nth-child(n) {
    margin: 14px 0px;
  }
  & > :nth-child(2n -1) {
    margin-right: 14px;
  }
  & > :nth-child(2n) {
    margin-left: 14px;
  }
`;
