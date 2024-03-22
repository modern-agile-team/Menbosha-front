import styled from 'styled-components';

//멘토 css
export const MentorCardContainer = styled.div`
  display: flex;
  border-radius: 10px;
  border: 2px solid #ff792bbf;
  cursor: pointer;
  transition: all 250ms ease;
  height: 13vh;
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
  @media only all and (max-width: 500px) and (max-height: 600px) {
    overflow: hidden;
  }
  //전체 멘토 카드 중, name
  & > :nth-child(1) {
    @media only all and (max-width: 500px), (max-height: 800px) {
      font-size: 0.4em;
    }
    font-size: 0.67em; //16px
    font-weight: 700; //Pretendard-Bold
  }
  //전체 멘토 카드 중, content
  & > :nth-child(2) {
    @media only all and (max-width: 500px), (max-height: 800px) {
      font-size: 0.3em;
    }
    font-size: 0.5em;
    font-weight: 400; //Pretendard-Regular
    color: rgba(0, 0, 0, 0.75);
    padding: 5px 0px;
    & > :nth-child(2) {
      @media only all and (max-width: 1700px), (max-height: 900px) {
        display: none;
      }
    }
  }
`;

export const TotalMentorCountBox = styled.div`
  display: flex;
  color: rgba(0, 0, 0, 0.5);
  & > :nth-child(n) {
    display: flex;
    width: 100%;
    //멘토 카드 카운트 아이콘
    & > :nth-child(1) {
      width: 1.2vw;
      height: 2.3vh;
    }
    //카운트의 개수
    & > :nth-child(2) {
      margin: auto;
      font-size: 0.42em; //10px
      font-weight: 400; //Pretendard-Regular
    }
  }
`;

export const ProfileContentBox = styled.div`
  display: flex;
  width: 80%;
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
    @media only all and (max-width: 600px), (max-height: 600px) {
      display: none;
    }
    font-size: 0.63em;
    font-weight: 500; //Medium
  }
  //랭크 점수
  > :nth-child(3) {
    @media only all and (max-width: 600px), (max-height: 600px) {
      display: none;
    }
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
    @media only all and (max-width: 600px), (max-height: 600px) {
      font-size: 0.5em;
    }
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
    @media only all and (max-height: 1000px), (max-width: 1200px) {
      display: none;
    }
  }
  //card shortIntro 부분
  & > :nth-child(3) {
    @media only all and (max-width: 600px), (max-height: 600px) {
      font-size: 0.3em;
    }
    flex-wrap: wrap;
    font-size: 0.5em;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.75);
  }
`;

export const CountContainer = styled.div`
  display: flex;
  margin: 2.4vh auto 3.2vh 2vw;
  justify-content: space-between;
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
  transition: all 0.3s ease;
  &:hover {
    border: 5px solid #ff792bbf;
    margin: -3px;
  }
  //이미지 크기 1700이하 반응형
  & > :nth-child(1) {
    width: 12vw; //232
    height: 20vh; //232 */
    margin: 1.3vw 0px; //24
    @media only all and (max-width: 700px) {
      width: 20vw;
    }
    background-color: #999;
    border-radius: 10px;
  }
`;

export const BadgeBox = styled.div`
  margin: 14px;
  & > img {
    border-radius: 15px;
    height: 13vh;
  }
`;
