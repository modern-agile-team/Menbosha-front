import styled from 'styled-components';

//멘토 css
export const MentorCardContainer = styled.div`
  display: flex;
  width: 96.5%;
  border-radius: 10px;
  border: 2px solid #ff792bbf;
  cursor: pointer;
  transition: all 250ms ease;
  &:hover {
    border: 5px solid #ff792bbf;
  }
  & > :nth-child(1) {
    width: 114px;
    height: 114px;
    border-radius: 10px;
    margin: 12px;
  }
`;

export const MentorCardContentBox = styled.div`
  width: 40%;
  padding: 24px 0px 0px 0px;
  font-size: 12px;
  color: #000;
  height: 111px;
  //전체 멘토 카드 중, name
  & > :nth-child(1) {
    font-size: 16px;
    font-weight: bold;
  }
  //전체 멘토 카드 중, content
  & > :nth-child(2) {
    font-size: 12px;
    padding: 5px 0px;
  }
`;

export const TotalMentorCountBox = styled.div`
  display: flex;
  color: rgba(0, 0, 0, 0.5);
  //멘토 카드 카운트 아이콘
  & > :nth-child(n) {
    display: flex;
    margin: 0px 12px 0px 0px;
    //카운트의 개수
    & > :nth-child(2) {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-left: 5px;
      width: 25px;
      font-weight: bold;
    }
  }
`;

export const ProfileContentBox = styled.div`
  display: flex;
  width: 80%;
  height: 110px;
  //카드 중 user Content 반응형 1200px
  @media only all and (max-width: 1200px) {
    display: block;
  }
`;

export const RankBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > :nth-child(2) {
    font-size: 15px;
  }
  > :nth-child(3) {
    font-size: 12px;
  }
`;

export const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;
  color: #000;
  //card 이름 부분
  & > :nth-child(1) {
    font-size: 20px;
    font-weight: bold;
    padding: 6px 0px;
  }
  //card 커스텀 카테고리 부분
  & > :nth-child(2) {
    font-size: 12px;
    padding: 10px 0px;
    @media only all and (max-width: 1200px) {
      display: none;
    }
  }
  //card shortIntro 부분
  & > :nth-child(3) {
    flex-wrap: wrap;
    font-size: 12px;
    padding: 0px 0px 10px 0px;
    //카운트 box 1200px 없어짐 반응형
    @media only all and (max-width: 1200px) {
      display: none;
    }
  }
`;

export const CountContainer = styled.div`
  display: flex;
  margin: auto auto auto 30px;
  justify-content: space-between;
  //카운트 box 1200px 없어짐 반응형
  @media only all and (max-width: 1200px) {
    display: none;
  }
`;

export const CountBox = styled.div`
  display: flex;
  margin-right: 30px;
  //카운트 박스 중 아이콘
  & > :nth-child(1) {
    margin-right: 6px;
  }
  //카운트 박스 중 카운트 수
  & > :nth-child(2) {
    margin-right: 18px;
    font-size: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const PopularMentorCardContainer = styled.div`
  height: 100%;
  border-radius: 10px;
  border: 2px solid #ff792bbf;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  transition: all 250ms ease;
  &:hover {
    border: 5px solid #ff792bbf;
  }
  //이미지 크기 1700이하 반응형
  & > :nth-child(1) {
    margin: 12px;
    border-radius: 10px;
    @media only all and (max-width: 1700px) {
      width: 85%;
      height: 45%;
    }
  }
`;

export const BadgeBox = styled.div`
  width: 30.3%;
  margin: 14px;
  & > img {
    border-radius: 15px;
    height: 166px;
    width: 100%;
  }
`;
