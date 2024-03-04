import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  width: 100%;
`;

interface IsCategoryType {
  isCat?: boolean;
}

export const CategoryBox = styled.div<IsCategoryType>`
  padding: 4px 12px;
  border: 2px solid #ff772b;
  border-radius: 10px;
  color: #000;
  width: auto;
  background-color: ${({ isCat }) => (isCat ? '#c63d2f' : '#fff')};
  margin: 9px;
  font-size: 0.67em; //16px
  font-weight: 400; //Pretendard-Regular
  cursor: pointer;
  transition: all 300ms ease;
  &:hover {
    border: 2px solid #c63d2f;
    transition: all 300ms ease;
  }
`;
