import Link from 'next/link';
import styled from 'styled-components';

export const CardContainer = styled.div`
  height: 425px;
  transition: height 500ms ease;
  & > :nth-child(1) {
    height: 290px;
    transition: height 500ms ease;
  }
  &:hover {
    height: 517px;
    & > :nth-child(1) {
      height: 370px;
      transition: height 500ms ease;
    }
  }
`;

export const CardLink = styled(Link)`
  text-decoration: none;
`;

interface CardImageType {
  src: string;
}

export const CardImageBox = styled.div<CardImageType>`
  width: 280px;
  height: 290px;
  background-color: #999;
  border-radius: 10px;
  cursor: pointer;
  background-image: url(${({ src }) => src});
  background-size: cover;
`;
