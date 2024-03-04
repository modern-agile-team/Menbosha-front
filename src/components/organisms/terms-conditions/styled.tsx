import styled from 'styled-components';

export const TermsConditionsContainer = styled.div`
  margin: 140px auto 0px 0px;
  width: 100%;
  //이용약관 타이틀
  & > :nth-child(1) {
    font-size: 48px;
    font-weight: bold;
    color: #ff772b;
    padding-bottom: 28px;
    border-bottom: 1px solid #ff772b;
  }
`;

export const TermConditionsWrapper = styled.div`
  margin: 64px 0px;
`;

export const TermsConditionElementsBox = styled.div`
  //각 조항 타이틀
  & > :nth-child(1) {
    font-size: 20px;
    font-weight: bold;
    margin: 15px 0px;
  }
  //각 조항 세부사항
  & > :nth-child(2) {
    font-size: 16px;
    margin: 15px 0px;
  }
  & > :nth-child(3) {
    font-size: 16px;
    margin: 15px 0px;
    & > :nth-child(n) {
      margin: 5px 0px;
    }
  }
`;

export const SupplementaryProvision = styled.div`
  font-size: 20px;
  margin-bottom: 40px;
`;

interface GridCountType {
  count: number;
}

export const DescriptionTable = styled.div<GridCountType>`
  display: grid;
  grid-template-columns: ${({ count }) => `repeat(${count}, 1fr)`};
  border: 1px solid #ff772b;
  margin: 25px 0px;
  & > :nth-child(n) {
    font-size: 20px;
    padding: 5px 0px;
    border: 1px solid #ff772b;
    width: 100%;
    text-align: center;
    vertical-align: middle;
  }
`;
