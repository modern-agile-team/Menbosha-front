import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: inherit;
  height: 10vh; // 실제 렌더링되는 화면의 비율이 너무 구리다. 일단 절반 값으로 변경
  margin-top: 40px;
  /* margin-bottom: 20px; */
  justify-content: center;
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
    color: #c58940;
    font-size: 1em;
    font-weight: bold;
    transition: color 0.3s ease;
    &:hover {
      color: #ffac60;
    }
  }
`;

export const IconBox = styled.div`
  display: flex;
  width: 100px;
  height: inherit;
  justify-content: space-between;
  align-items: center;
  /* border: 2px solid red; */
  & > * {
    &:hover {
      cursor: pointer;
    }
  }
`;
