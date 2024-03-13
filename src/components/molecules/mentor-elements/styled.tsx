import styled from 'styled-components';

//멘토 css
export const MentorCardContainer = styled.div`
  display: flex;
  border-radius: 10px;
  border: 2px solid #ff792bbf;
  cursor: pointer;
  transition: all 250ms ease;
  height: 13vh;
  width: 100%;
  &:hover {
    border: 5px solid #ff792bbf;
    margin: -3px;
  }
  //이미지
  & > :nth-child(1) {
    width: 41.31%; //114
    border-radius: 10px;
    margin: 4.35%;
    background-color: #999;
  }
`;

export const MentorCardContentBox = styled.div`
  width: 40%;
  padding: 12px 0px 0px 0px;
  color: #000;
  height: 10vh;
  //전체 멘토 카드 중, name
  & > :nth-child(1) {
    font-size: 0.67em; //16px
    font-weight: 700; //Pretendard-Bold
  }
  //전체 멘토 카드 중, content
  & > :nth-child(2) {
    @media only all and (max-width: 1600px), (max-height: 800px) {
      overflow: hidden;
      text-overflow: ellipsis;
    }
    font-size: 0.5em;
    font-weight: 400; //Pretendard-Regular
    color: rgba(0, 0, 0, 0.75);
    height: 6vh;
    padding: 5px 0px;
    & > :nth-child(2) {
      @media only all and (max-height: 800px) {
        display: none;
      }
    }
  }
`;

export const TotalMentorCountBox = styled.div`
  display: flex;
  color: rgba(0, 0, 0, 0.5);
  //멘토 카드 카운트 아이콘
  & > :nth-child(n) {
    @media only all and (max-width: 1100px), (max-height: 850px) {
      display: none;
    }
    display: flex;
    margin: 0px 12px 0px 0px;
    //카운트의 개수
    & > :nth-child(2) {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-left: 5px;
      width: 25px;
      font-size: 0.42em; //10px
      font-weight: 400; //Pretendard-Regular
    }
  }
`;

export const ProfileContentBox = styled.div`
  display: flex;
  width: 80%;
  //카드 중 user Content 반응형 1200px
  @media only all and (max-width: 1200px) {
    display: block;
  }
`;

export const RankBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 4vw;
  //랭크 이미지
  > :nth-child(1) {
    width: 4vw;
    height: 4vh;
  }
  //랭크 이름
  > :nth-child(2) {
    font-size: 0.63em;
    font-weight: 500; //Medium
  }
  //랭크 점수
  > :nth-child(3) {
    font-size: 0.5em; //Regular
    font-weight: 400;
    color: rgba(0, 0, 0, 0.75);
  }
`;

export const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  color: #000;
  width: 10vw;
  height: 10vh;
  margin-left: 30px;
  //card 이름 부분
  & > :nth-child(1) {
    font-size: 0.85em; //20px
    font-weight: 700; //Bold
    padding: 6px 0px;
  }
  //card 커스텀 카테고리 부분
  & > :nth-child(2) {
    font-size: 0.5em;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.75);
    padding: 10px 0px;
    @media only all and (max-height: 1000px), (max-width: 500px) {
      display: none;
    }
  }
  //card shortIntro 부분
  & > :nth-child(3) {
    flex-wrap: wrap;
    font-size: 0.5em;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.75);
    //카운트 box 1200px 없어짐 반응형
    @media only all and (max-width: 1200px) {
      display: none;
    }
  }
`;

export const CountContainer = styled.div`
  display: flex;
  margin: 24px auto 32px 30px;
  margin: auto 0px;
  justify-content: space-between;
  //카운트 box 1200px 없어짐 반응형
  @media only all and (max-width: 1300px), (max-height: 600px) {
    display: none;
  }
`;

export const CountBox = styled.div`
  display: flex;
  margin-right: 30px;
  //카운트 박스 중 아이콘
  & > :nth-child(1) {
    margin-right: 6px;
    width: 2vw;
    height: 2vh;
  }
  //카운트 박스 중 카운트 수
  & > :nth-child(2) {
    font-size: 0.4em;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const PopularMentorCardContainer = styled.div`
  height: 45vh;
  border-radius: 10px;
  border: 2px solid #ff792bbf;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  transition: all 250ms ease;
  &:hover {
    border: 5px solid #ff792bbf;
    margin: -3px;
  }
  //이미지 크기 1700이하 반응형
  & > :nth-child(1) {
    width: 232px;
    height: 232px;
    margin: 24px;
    @media only all and (max-width: 1900px) {
      width: 82.86%; //232
      height: 47.809%; //232 */
      margin: 4.29%; //24
    }
    background-color: #999;
    border-radius: 10px;
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
