import styled, { css } from 'styled-components';

export const MyRecordContentContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px 363px 0px 159px;
  width: 100%;
  color: #fff;
  height: 120vh;
`;

export const MyRecordTitleBox = styled.div`
  font-size: 2.67em; //64.08px
  font-weight: 900; //Pretendard-Black
  color: #fff;
`;

export const PaginationCountContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px 0px 0px;
  color: #fff;
  & > :nth-child(n) {
    margin: 0px 8px;
    padding-bottom: 5px;
  }
`;

export const SubTitleBox = styled.div`
  text-align: center;
  font-size: 0.85em; //20.4px
  font-weight: 700; //Pretendard-Bold
  margin: 30px 0px 24px 0px;
`;

interface BtnType {
  i: number;
  curPage: number;
}

export const PaginationCardBox = styled.div`
  display: flex;
  & > :nth-child(n) {
    width: 13.6vw;
  }
  //첫 번째 카드
  & > :nth-child(1) {
    margin-right: 12px;
  }
  //두 번째 카드
  & > :nth-child(2) {
    margin: 0px 12px;
  }
  //세 번째 카드
  & > :nth-child(3) {
    margin-left: 12px;
  }
`;

export const MyMentorBoardContainer = styled.div`
  & > :nth-child(1) {
    & > :nth-child(2) {
      //게시글 본문
      & > :nth-child(3) {
        color: #fff;
        font-weight: 400; //Pretendard-Regular
      }
      //게시글 생성 날짜
      & > :nth-child(4) {
        color: #fff;
        font-size: 0.42em; //10.08px
        font-weight: 300; //Pretendard-Light
      }
    }
  }
`;

export const MyHelpBoardContainer = styled.div`
  & > :nth-child(1) {
    & > :nth-child(2) {
      & > :nth-child(1) {
        //게시글 본문
        & > :nth-child(3) {
          color: #fff;
          font-weight: 400; //Pretendard-Regular
        }
        //게시글 생성 날짜
        & > :nth-child(4) {
          color: #fff;
          font-weight: 300; //Pretendard-Light
        }
      }
    }
  }
`;

export const Btn = styled.div<BtnType>`
  color: #fff;
  font-size: 1em;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
  ${(props) =>
    props.i === props.curPage &&
    css`
      padding-bottom: 3px;
      border-bottom: 3px solid #fff;
      font-weight: bold;
      cursor: revert;
      transform: revert;
    `}
`;
