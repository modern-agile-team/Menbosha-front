import styled, { css } from 'styled-components';

export const HeaderContainer = styled.div<{ isMain: boolean }>`
  display: flex;
  flex-wrap: wrap;
  width: inherit;
  height: 10vh; // 실제 렌더링되는 화면의 비율이 너무 구리다. 일단 절반 값으로 변경
  margin-top: ${({ isMain }) => (isMain ? '40px' : '20px')};
  /* margin-bottom: 20px; */
  justify-content: center;
  transition: margin-top 0.3s ease;
  /* border: 2px solid white; */
`;

export const HeaderArea = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  width: 80vw;
  min-width: 20px;
  height: 9vh;
  margin: 0px 197.5px;
  justify-content: space-between;
  /* border: 2px solid green; */
`;

export const LogoBox = styled.div`
  display: flex;
  width: 146px;
  height: inherit;
  align-items: center;
  justify-content: space-between;
  /* border: 2px solid yellow; */
`;

export const NavigateBox = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  width: 520px;
  margin-right: 75px;
  justify-content: space-around;
  align-items: center;
  /* border: 2px solid blue; */
  & > a {
    text-decoration: none;
    color: #ff772b;
    font-size: 1em;
    font-weight: 500;
    /* transition:
      color 0.3s ease, font-weight 0.3s ease; */
    &:hover {
      /* color: #ffac60; */
      font-weight: 600;
    }
  }
`;

export const MentorNavBox = styled.div`
  color: #ff772b;
  font-weight: 500;
  /* transition:
    color 0.3s ease, font-weight 0.3s ease; */
  cursor: pointer;
  &:hover {
    /* color: #ffac60; */
    font-weight: 600;
  }
`;

export const IconBox = styled.div`
  display: flex;
  width: 8vw;
  height: inherit;
  justify-content: center;
  align-items: center;
  /* border: 2px solid red; */
  & > * {
    &:hover {
      cursor: pointer;
    }
  }
`;

interface MentorType {
  isMentor: boolean;
}

export const MentorModal = styled.div<MentorType>`
  display: flex;
  position: absolute;
  flex-direction: column;
  border-radius: 10px;
  text-align: center;
  z-index: 2;
  overflow: hidden;
  height: ${({ isMentor }) => (isMentor ? '100px' : '0px')};
  transition: all 500ms ease;
  > * {
    text-decoration: none;
    z-index: 2;
    cursor: pointer;
    color: #c58940;
    font-weight: bold;
    padding: 10px;
    &:hover {
      color: #ffac60;
    }
  }
  :nth-child(3) {
    ${({ isMentor }) => {
      return css`
        display: ${isMentor ? 'block' : 'none'};
        width: ${isMentor ? '10000px' : '0px'};
        height: ${isMentor ? '10000px' : '0px'};
      `;
    }}
    position: fixed;
    z-index: 1;
    left: 0px;
    top: 0px;
    background-color: rgba(0, 0, 0, 0);
    cursor: auto;
  }
`;
