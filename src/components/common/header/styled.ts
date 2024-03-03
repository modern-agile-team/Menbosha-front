import styled, { css } from 'styled-components';
import { PretendardMedium } from '../globalStyled/styled';

export const HeaderContainer = styled.div`
  /* position: relative; */
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
  ${PretendardMedium};
  display: flex;
  width: 40vw;
  justify-content: space-between;
  align-items: center;
  & > a {
    text-decoration: none;
    color: #ff772b;
    font-size: 0.83em;
    &:hover {
      font-weight: 600;
    }
  }
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

//1200px 반응형
//사이드바 영역
export const SideArea = styled.div`
  display: none;
  color: #000;
  @media only all and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0px;
    top: 0px;
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
    :nth-of-type(1) {
      top: 0;
      ${({ isSide }) => {
        return css`
          transform: ${isSide && 'translateY(20xpx) rotate(-45deg)'};
          transform: ${isSide && 'translateY(20px) rotate(-45deg)'};
        `;
      }}
    }
    :nth-of-type(2) {
      top: 20;
    }
    :nth-of-type(3) {
      bottom: 0;
    }
  }
`;

//사이드바 컨테이너
export const SideBarContainer = styled.div<{ isSide: boolean }>`
  width: 30vw;
  height: 100vh;
  position: absolute;
  transition: all 0.6s ease;
  left: ${({ isSide }) => (isSide ? '0px' : '-30vw')};
  background-color: #fff;
  border-right: 2px solid #ff772b;
  z-index: 5;
  @media only all and (max-width: 600px) {
    left: ${({ isSide }) => (isSide ? '0px' : '-40vw')};
  }
`;

//사이드바 밖 영역(클릭 시 사이드바 닫힘)
export const SideBarBackBg = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 4;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const SideBarLogoContainer = styled.div`
  display: flex;
  & > :nth-child(1) {
    margin: 15px 0px 0px 15px;
  }
  & > :nth-child(2) {
    margin: 20px 15px 0px auto;
    color: #ff772b;
  }
`;

export const SideBarNavigateContainer = styled.div`
  ${PretendardMedium}
  display: flex;
  flex-direction: column;
  margin: 50px 0px;
  & > :nth-child(n) {
    margin: 10px auto;
    text-decoration: none;
    color: #ff772b;
    cursor: pointer;
    &:hover {
      font-weight: 600;
    }
  }
  & > :nth-last-child(1) {
    margin-top: 65vh;
  }
  @media only all and (max-height: 1000px) {
    & > :nth-last-child(1) {
      margin-top: 30vh;
    }
  }
`;
