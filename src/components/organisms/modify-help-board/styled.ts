import styled from 'styled-components';

export const CreateHelpContainer = styled.div`
  max-width: 1512px;
`;

export const CreateTitle = styled.div`
  border-bottom: 2px solid #ffbb5c;
  font-size: 48px;
  margin: 0px 0px 64px 0px;
  padding: 64px 0px 24px 0px;
  color: #000;
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
  background-color: #fff;
  border-radius: 15px;
  color: #000;
  &::placeholder {
    color: #ffffff50;
  }
`;

export const QuillBox = styled.div`
  border: 2px solid #ffbb5c;
  border-radius: 15px;
  padding: 26px 16px;
  height: 100%;
`;

export const ImageUploadBox = styled.div`
  border: 2px solid #ffbb5c;
  border-radius: 10px;
  padding: 24px;
  width: 100%;
`;

export const SubmitBox = styled.div`
  color: #000;
  cursor: pointer;
`;

interface DropType {
  drag: boolean;
}

export const DropDownImageBox = styled.label<DropType>`
  display: flex;
  border: 1px solid #ffbb5c;
  color: #000;
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ drag }) => (drag ? '#999' : '#FFF')};
  > :nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    > :nth-child(1) {
      font-size: 55px;
    }
    > :nth-child(2),
    :nth-child(3) {
      font-size: 12px;
    }
  }
`;
