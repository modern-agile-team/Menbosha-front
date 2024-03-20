import styled, { css } from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: inherit;
  height: 7.5vh; // 실제 렌더링되는 화면의 비율이 너무 구리다. 일단 절반 값으로 변경
  justify-content: center;
  background-color: #ffffff;
  border-bottom: 2px solid #ff772b;
`;

export const HeaderArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-width: 20px;
  height: 7.5vh;
  margin: 0px 204px;
  justify-content: space-between;
  @media only all and (max-width: 1900px) {
    margin: 0px 10.625%; //0 204
  }
`;

export const LogoBox = styled.div`
  display: flex;
  width: 10vw;
  height: inherit;
  align-items: center;
  justify-content: space-between;
  /* border: 2px solid yellow; */
`;

export const NavigateBox = styled.div`
  display: flex;
  width: 40vw;
  justify-content: space-between;
  align-items: center;
  & > a {
    text-decoration: none;
    color: #ff772b;
    font-weight: 500;
    font-size: 0.83em;
    &:hover {
      font-weight: 600;
    }
  }
  //반응형 sidebar구현
  @media only all and (max-width: 1200px) {
    display: none;
  }
`;

export const IconBox = styled.div`
  display: flex;
  height: inherit;
  justify-content: center;
  align-items: center;
  & > * {
    &:hover {
      cursor: pointer;
    }
  }
`;

//사이드바 버튼 (햄버거)
export const SideBarButton = styled.div<{ isSide: boolean }>`
  display: none;
  color: #000;
  position: relative;
  margin-left: 25px;
  @media only all and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
  span {
    display: inline-block;
    box-sizing: border-box;
    position: relative;
    width: 20px;
    height: 4px;
    background-color: #ff772b;
    margin: 2px 10px;
    border-radius: 10px;
  }
`;
