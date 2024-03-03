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
  height: 290px;
  background-color: #999;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
  width: 100%;
  & > :nth-child(1) {
    transition: all 500ms ease;
  }
  &:hover {
    & > :nth-child(1) {
      background-size: 110%;
      transition: all 500ms ease;
    }
  }
`;

/**멘토 카드 하트 수 위치//근뎅 */
export const HeartCountBox = styled.div`
  margin: 12px 5px 0px 8px;
`;
