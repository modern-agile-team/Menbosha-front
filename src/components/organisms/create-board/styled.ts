import styled from 'styled-components';

export const CreateBoardWrapper = styled.div`
  width: 100%;
`;

export const CreateHelpContainer = styled.div`
  margin: 0px 153px;
`;

export const CreateTitle = styled.div`
  font-size: 48px;
  font-weight: bold;
  margin: 64px 0px;
  color: #ff772b;
`;

export const CreateHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const CreateHeadValue = styled.input`
  width: 100%;
  border: 2px solid #ff772b;
  padding: 10px;
  margin: 16px 0px 16px 0px;
  outline: none;
  background-color: #fff;
  border-radius: 15px;
  color: #000;
`;

export const QuillBox = styled.div`
  border: 2px solid #ff772b;
  border-radius: 15px;
  padding: 26px 16px;
  height: 100%;
`;

export const ImageUploadBox = styled.div`
  border: 2px solid #ff772b;
  border-radius: 10px;
  padding: 24px;
  width: 100%;
`;

export const SubmitBox = styled.div`
  color: #ff772b;
  cursor: pointer;
`;

interface DropType {
  drag: boolean;
}

export const DropDownImageBox = styled.label<DropType>`
  display: flex;
  border: 1px solid #ff772b;
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
