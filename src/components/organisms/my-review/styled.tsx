import styled, { css } from 'styled-components';

export const MyReviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px 15.8vw 0px 8vw;
  width: 100%;
`;

export const MyReviewTitleBox = styled.div`
  font-size: 2.67em; //64.08px
  font-weight: 900; //Pretendard-Black
  color: #fff;
`;

export const ReviewCheckListFilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 4.3vh 0px;
`;

export const ReviewCheckListBox = styled.div<{ select: boolean }>`
  ${({ select }) => {
    return css`
      color: ${select ? '#fff' : '#000'};
      background-color: ${select ? 'none' : '#fff'};
    `;
  }}
  font-size: 0.67em; //16.08px
  font-weight: 400; //Pretendard-Regular
  border: 2px solid #fff;
  border-radius: 10px;
  margin: 1.2vh 0.75vw 1.2vh 0px;
  padding: 0.43vh 0.69vw;
  cursor: pointer;
`;

export const MyReviewContentsWrapper = styled.div`
  height: 100vh;
`;

export const MyReviewContainer = styled.div`
  width: 100%;
  border-bottom: 2px solid #fff;
  padding-bottom: 5px;
  margin-bottom: 24px;
`;

export const MyReviewPaginationCountContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0px;
  color: #fff;
  & > :nth-child(n) {
    margin: 0px 8px;
    padding-bottom: 5px;
  }
`;

interface BtnType {
  i: number;
  curPage: number;
}

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
