import styled from 'styled-components';

export const ChatSpaceHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 9vh;
  justify-content: center;
  align-items: center;
  background: #ff772b;
  border-radius: 0px 0px 10px 10px;
  /* border: 2px solid lightGreen; */
`;

export const ChatSpaceHeaderArea = styled.div`
  display: flex;
  width: 40vw;
  height: 6vh;
  justify-content: space-between;
  /* border: 2px solid red; */
`;

export const ChatSpaceHeaderLeft = styled.div`
  display: flex;
  width: 10vw;
  height: inherit;
  /* justify-content: center; */
  align-items: center;
  /* border: 2px solid blue; */
  & > span {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 0.83em;
    color: #ffffff;
  }
`;

export const ChatSpaceHeaderGuestImage = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border: 2px solid #ffffff;
  border-radius: 10px;
`;

export const ChatSpaceHeaderRight = styled.div`
  display: flex;
  width: 5vw;
  height: inherit;
  margin-right: 10px;
  justify-content: space-between;
  align-items: center;
  /* border: 2px solid blue; */
`;
