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

export const HeadTextBox = styled.div`
  > :nth-child(1) {
    margin: 0px 0px 5px 12px;
  }
  > :nth-child(2) {
    margin: 0px 12px 0px 12px;
    > * {
      margin: 0px 20px 0px 0px;
    }
  }
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
  width: 43%;
  display: flex;
  align-items: center;
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
  //랭크 박스
  > :nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70px;
  }
  //이름, 카테고리 박스
  > :nth-child(3) {
    width: 100px;
  }
  //채팅창 버튼, 삭제 버튼
  > :nth-child(4) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    > div {
      cursor: pointer;
      > div {
        margin: 25px 0px;
      }
    }
  }
`;
