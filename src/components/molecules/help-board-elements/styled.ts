import Link from 'next/link';
import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  color: rgba(0, 0, 0, 0.75);
  //도와주세요 카드 이미지
  & > :nth-child(1) {
    transition: all 500ms ease;
  }
  &:hover {
    & > :nth-child(1) {
      background-size: 110%;
      transition: all 500ms ease;
    }
  }
  //도와주세요 카드 제목
  & > :nth-child(2) {
    font-size: 20px;
    font-weight: bold;
    color: #ff772b;
    padding: 13px 0px;
  }
  //도와주세요 카드 날짜
  & > :nth-child(4) {
    font-size: 10px;
    padding: 10px 0px;
  }
`;

export const CardLink = styled(Link)`
  text-decoration: none;
`;

interface CardImageType {
  src: string;
}

export const CardImageBox = styled.div<CardImageType>`
  width: 360px;
  height: 260px;
  background-color: #c5c5c5;
  border-radius: 10px;
  cursor: pointer;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
`;

export const UserPageLink = styled(Link)`
  display: flex;
  margin: 0px 0px 10px 0px;
  text-decoration: none;
  width: 35%;
  > img {
    width: 56px;
    height: 56px;
    border-radius: 10px;
  }
  > :nth-child(2) {
    color: #000;
    padding: 5px 0px 5px 12px;
    > :nth-child(1) {
      font-size: 16px;
      font-weight: bold;
    }
    > :nth-child(2) {
      font-size: 12px;
    }
  }
`;
