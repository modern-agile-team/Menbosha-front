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
  width: 90%;
`;

export const MentorBoardCardContainer = styled.div`
  height: 425px;
  transition: height 500ms ease;
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
  }
`;
