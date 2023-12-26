import Link from 'next/link';
import styled from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 10vw;
  height: 100vh;
  justify-content: space-between;
  /* border: 2px solid white; */
`;

export const NavbarTop = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  height: 50vh;
  margin-top: 20px;
  align-items: center;
  /* border: 2px solid red; */
`;

export const TopLogoBox = styled(Link)`
  display: flex;
  width: inherit;
  height: 5vh;
  justify-content: center;
  align-items: center;
  /* border: 2px solid white; */
`;

export const TopNavBox = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  height: 45vh;
  justify-content: space-around;
  align-items: center;
  /* border: 2px solid lightGreen; */
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

export const NavbarBottom = styled.div`
  display: flex;
  width: inherit;
  height: 9vh;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  /* border: 2px solid yellow; */
  &:hover {
    cursor: pointer;
  }
`;
