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
    font-size: 0.9em; //21px
    font-weight: 700; //Pretendard-Bold
    color: #ff772b;
    padding: 13px 0px;
  }
  //도와주세요 카드 날짜
  & > :nth-child(4) {
    font-size: 0.4em; //12px
    font-weight: 300; //Pretendard-Light
    color: rgba(0, 0, 0, 0.5);
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
  width: 100%;
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
  cursor: pointer;
  width: 100%;
  > img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }
  > :nth-child(2) {
    color: #000;
    padding: 5px 0px 5px 12px;
    //유저 이름
    > :nth-child(1) {
      font-size: 0.7em;
      font-weight: 700; //Pretendard-Bold
    }
    //유저 카테고리
    > :nth-child(2) {
      font-size: 0.5em;
      font-weight: 400; //Pretendard-Regular
      color: rgba(0, 0, 0, 0.75);
    }
  }
`;
