import styled from 'styled-components';

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

export const CardImageBox = styled.div`
  width: 280px;
  height: 290px;
  background-color: #999;
  border-radius: 10px;
  cursor: pointer;
`;

export const MentorBoardCardContainer = styled.div`
  height: 425px;
  transition: height 500ms ease;
  & > :nth-child(2) {
    height: 290px;
    transition: height 500ms ease;
  }
  &:hover {
    height: 517px;
    & > :nth-child(2) {
      height: 370px;
      transition: height 500ms ease;
    }
  }
`;
