import styled from 'styled-components';

const HelpCategory = () => {
  return (
    <CategoryWarpper>
      <CategoryContainer>
        <CategoryBox>카테고리</CategoryBox>
        <CategoryBox>카테고리2123123</CategoryBox>
        <CategoryBox>카테고리3</CategoryBox>
        <CategoryBox>카테고리4</CategoryBox>
      </CategoryContainer>
    </CategoryWarpper>
  );
};

export default HelpCategory;

const CategoryWarpper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0px 25px 0px;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: left;
  min-width: 500px;
  width: 1532px;
`;

const CategoryBox = styled.div`
  padding: 7px;
  border: 1px solid #fff;
  border-radius: 10px;
  color: #fff;
  width: auto;
  margin: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: all 300ms ease;
  &:hover {
    background-color: #c63d2f;
    transition: all 300ms ease;
  }
`;
