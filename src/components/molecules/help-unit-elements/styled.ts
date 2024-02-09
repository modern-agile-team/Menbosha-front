import styled from 'styled-components';

export const SlideContain = styled.div`
  overflow: hidden;
  width: 900px;
  height: 350px;
`;

export const SlidImages = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const BodyImages = styled.img`
  width: 900px;
  height: 350px;
  background-size: cover;
  object-fit: scale-down;
  background-color: #999;
`;

export const HelpHeadContainer = styled.div`
  & > :nth-child(1) {
    font-size: 40px;
    color: #ff772b;
    font-weight: bold;
    margin: 0px 0px 41px 0px;
  }
  & > :nth-child(2) {
    display: flex;
    margin: 0px 0px 24px 0px;
  }
`;

export const UserInfoBox = styled.div`
  padding: 5px 0px 0px 24px;
  & > :nth-child(1) {
    font-size: 16px;
    font-weight: bold;
    color: #000;
    padding: 0px 0px 5px 0px;
  }
  & > :nth-child(2) {
    display: flex;
    > * {
      margin: 0px 25px 0px 0px;
    }
  }
`;

export const ActiveButtonBox = styled.div`
  display: flex;
  margin-left: auto;
  & > :nth-child(1) {
    cursor: pointer;
    font-size: 16px;
    line-height: 25px;
    margin: auto 17px;
    padding: 5px 10px;
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
  width: 51px;
  height: 51px;
  border-radius: 10px;
`;

/**도와주세요 댓글 컨테이너 */
export const CommentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CommentBorder = styled.div`
  border: 2px solid #ff772b;
  border-radius: 10px;
  margin: 14px;
  width: 46%;
`;

export const CommentContentBox = styled.div`
  display: flex;
  > * {
    margin: 18px 9px 18px 9px;
  }
  //이미지 박스
  > :nth-child(1) {
    width: 114px;
    height: 114px;
    border-radius: 10px;
    margin-left: 18px;
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
`;

/**정보박스 */
export const CategoryBox = styled.div`
  margin: auto;
  min-width: 100px;
  & > :nth-child(1) {
    font-size: 20px;
    font-weight: bold;
  }
  & > :nth-child(2),
  :nth-child(3),
  :nth-child(4) {
    font-size: 12px;
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
