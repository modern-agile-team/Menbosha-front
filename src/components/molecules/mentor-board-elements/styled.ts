import Link from 'next/link';
import styled from 'styled-components';

//멘토 css

export const MentorCardContainer = styled.div`
  display: flex;
  width: 280px;
  height: 159px;
  border-radius: 10px;
  border: 2px solid #f00;
`;

export const MentorCardContentBox = styled.div`
  width: 140px;
`;

export const MentorCardImageBox = styled.div`
  width: 114px;
  height: 135px;
  background-color: #999;
`;
interface ImgType {
  img?: string;
}
export const CardImageBox = styled.div<ImgType>`
  width: 280px;
  height: 290px;
  background-color: #999;
  background-image: url(${({ img }) => img});
  background-size: auto;
  border-radius: 10px;
  cursor: pointer;
`;

//멘토 게시판 css

export const MentorBoardUserBox = styled.div`
  display: flex;
  margin: 0px 0px 12px 0px;
  cursor: pointer;
  width: 100%;
`;

export const MentorBoardCardContainer = styled.div`
  height: 425px;
  width: 80%;
  //디자인쪽에서 안쓰길래 우선 주석처리
  /* transition: height 500ms ease;
  & > :nth-child(1) {
    height: 290px;
    transition: height 500ms ease;
  }
  &:hover {
    height: 517px;
    & > :nth-child(1) {
      height: 370px;
      transition: height 500ms ease;
    }
  } */
`;

/**멘토 카드 하트 수 위치//근뎅 */
export const HeartCountBox = styled.div`
  margin: 12px 5px 0px 8px;
`;
