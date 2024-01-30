import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  width: 70vw;
  padding: 10px;
`;

export const HeaderContentsBox = styled.div`
  width: 35%;
  height: 460px;
`;

export const BodyContentsBox = styled.div`
  width: 35%;
  height: 120px;
`;

export const DetailBox = styled.div`
  width: 80%;
  min-height: 120px;
  height: auto;
`;

export const ShareBox = styled.div`
  width: 45%;
  height: 120px;
`;

interface DropType {
  drag: boolean;
}

export const DropDownImageBox = styled.label<DropType>`
  display: flex;
  border: 1px solid #ffbb5c;
  color: #000;
  width: 280px;
  height: 350px;
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
