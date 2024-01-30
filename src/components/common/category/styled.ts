import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  width: 74%;
`;

interface IsCategoryType {
  isCat?: boolean;
}

export const CategoryBox = styled.div<IsCategoryType>`
  padding: 7px;
  border: 2px solid #ff772b;
  border-radius: 10px;
  color: #000;
  width: auto;
  background-color: ${({ isCat }) => (isCat ? '#c63d2f' : '#fff')};
  margin: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: all 300ms ease;
  &:hover {
    border: 2px solid #c63d2f;
    transition: all 300ms ease;
  }
`;
