import styled from 'styled-components';

export const CreateHelpContainer = styled.div`
  width: 80%;
  max-width: 1512px;
`;

export const CreateTitle = styled.div`
  border-bottom: 2px solid #ffbb5c;
  font-size: 48px;
  margin: 0px 0px 64px 0px;
  padding: 64px 0px 24px 0px;
  color: #ffffff;
`;

export const CreateHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const CreateHeadValue = styled.input`
  width: 100%;
  border: 2px solid #ffbb5c;
  padding: 10px;
  margin: 16px 0px 16px 0px;
  outline: none;
  background-color: #252525;
  border-radius: 15px;
  &::placeholder {
    color: #ffffff50;
  }
`;

export const Test = styled.div`
  border: 3px solid #fe3;
  margin: 20px 0px 100px 0px;
`;

export const SubmitBox = styled.div`
  cursor: pointer;
`;
