import styled from 'styled-components';

const HelpCategory = () => {
  return (
    <CategoryWarpper>
      <CategoryContainer>
        <CategoryBox>카테고리</CategoryBox>
        <CategoryBox>카테고리2</CategoryBox>
        <CategoryBox>카테고리3</CategoryBox>
        <CategoryBox>카테고리4</CategoryBox>
      </CategoryContainer>
    </CategoryWarpper>
  );
};

export default HelpCategory;

const CategoryWarpper = styled.div`
  border: 1px solid #e92;
  display: flex;
  justify-content: center;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: left;
  border: 1px solid #9ff;
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
  font-size: 10px;
`;
