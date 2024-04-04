import styled, { css } from 'styled-components';

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

//사이드바 컨테이너
export const SideBarContainer = styled.div<{ isSide: boolean }>`
  width: 29vw;
  height: 300vh;
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
  @media only all and (max-width: 600px) {
    display: none;
  }
`;

export const SideBarNavigateContainer = styled.div`
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
