import Link from 'next/link';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 36px;
  justify-content: center;
  border: 2px solid black;
`;

export const HeaderArea = styled.div`
  display: flex;
  width: 1512px;
  margin: 0px 197.5px;
  border: 2px solid green;
`;

export const LogoBox = styled.div`
  display: flex;
  width: 100px;
  height: 30px;
  justify-content: center;
  border: 2px solid yellow;
`;

export const NavigateBox = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  border: 2px solid blue;
  & > span {
    font-size: 24px;
  }
`;
