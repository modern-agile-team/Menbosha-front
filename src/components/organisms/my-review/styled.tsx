import styled, { css } from 'styled-components';

export const MyReviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px 304px 0px 159px;
  width: 100%;
`;

export const ReviewCheckListFilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 45px 0px;
  & > :nth-child(n) {
    color: #fff;
    border: 2px solid #fff;
    border-radius: 10px;
    margin: 12px 16px 12px 0px;
    padding: 4px 12px;
  }
`;

export const MyReviewContentsWrapper = styled.div`
  height: 70vh;
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