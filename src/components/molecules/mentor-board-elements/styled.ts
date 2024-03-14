import styled from 'styled-components';

//멘토 css

export const MentorCardContainer = styled.div`
  display: flex;
  width: 280px;
  height: 159px;
  border-radius: 10px;
  border: 2px solid #f00;
`;

interface ImgType {
  img?: string;
}
export const CardImageBox = styled.div<ImgType>`
  width: 100%;
  height: 23vh;
  background-color: #c5c5c5;
  background-image: url(${({ img }) => img});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  cursor: pointer;
`;

export const MentorBoardCardUserInfoContainer = styled.div`
  margin: 0px 1.5vw;
  //유저 이름
  & > :nth-child(1) {
    font-size: 0.6em;
    font-weight: 700; //Pretendard-Bold
    color: #000;
  }
  //유저 카테고리
  & > :nth-child(2) {
    font-size: 0.5em;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.75);
    margin-top: 5px;
  }
`;

//멘토 게시판 css

export const MentorBoardUserBox = styled.div`
  display: flex;
  margin: 0px 0px 1.2vh 0px;
  cursor: pointer;
  width: 100%;
`;

export const MentorBoardCardContainer = styled.div`
  width: 100%;
  & > :nth-child(1) {
    transition: all 500ms ease;
  }
  overflow: hidden;
  &:hover {
    & > :nth-child(1) {
      background-size: 110%;
      transition: all 500ms ease;
    }
  }
  //게시글 카드 제목
  & > :nth-child(2) {
    font-size: 0.86em;
    font-weight: 700;
    color: #ff772b;
    padding-top: 12px;
  }
  //게시글 생성 시간
  & > :nth-child(4) {
    font-size: 0.5em;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.5);
  }
`;

/**멘토 카드 하트 수 위치 */
export const HeartCountBox = styled.div`
  display: flex;
  margin-left: auto;
  //좋아여 카운트
  & > :nth-child(2) {
    margin: auto 1vw;
    font-size: 0.8em;
    font-weight: 400;
  }
`;
