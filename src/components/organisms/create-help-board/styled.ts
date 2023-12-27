import styled from 'styled-components';

export const CreateHelpContainer = styled.div`
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
  color: #fff;
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
  color: #fff;
  cursor: pointer;
`;

interface DropType {
  drag: boolean;
}

export const DropDownImageBox = styled.label<DropType>`
  display: flex;
  border: 1px solid #ffbb5c;
  color: #fff;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ drag }) => (drag ? '#999' : '#252525')};
`;
