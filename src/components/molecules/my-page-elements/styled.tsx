import { AskShowPropsType } from '@/types/support';
import styled from 'styled-components';

//마이 랭크
export const MyRankWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  //페이지 타이틀
  & > :nth-child(1) {
    font-size: 64px;
    font-weight: bold;
    color: #fff;
    margin-right: 80px;
  }
  //랭크 이미지
  & > :nth-child(2) {
    width: 228px;
    height: 228px;
    padding: 41px;
    background-color: #fff;
    border-radius: 19px;
  }
`;

//랭크 이름 점수
export const MyRankNameAndScore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  color: #fff;
  margin-left: 55px;
  & > :nth-child(1) {
    font-size: 36px;
    font-weight: bold;
  }
  & > :nth-child(2) {
    font-size: 16px;
  }
`;

//랭크 레벨, 해금 단계 컨테이너
export const RankLevelLockContainer = styled.div`
  display: grid;
  margin-top: 50px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 0fr 1fr;
  & > :nth-child(1),
  :nth-child(2),
  :nth-child(3),
  :nth-child(4),
  :nth-child(5) {
    text-align: center;
  }
  & > :nth-child(6) {
    grid-column: 1/ 6;

    border: 5px solid transparent;
    border-radius: 10px;
    margin: 23px 0px;
    background-image: linear-gradient(#fff, #fff),
      linear-gradient(
        to right,
        #3da2ff 0%,
        #4fffaa 29%,
        #fff200 67%,
        #ff4e00 85%,
        #ff0000 100%
      );
    background-origin: border-box;
    background-clip: content-box, border-box;
  }
  & > :nth-child(7),
  :nth-child(8),
  :nth-child(9),
  :nth-child(10),
  :nth-child(11) {
    text-align: center;

    & > :nth-child(1) {
      font-size: 24px;
      font-weight: bold;
      color: #fff;
    }
    & > :nth-child(2) {
      font-size: 16px;
      color: #fff;
    }
  }
`;

//내 칭호
export const BadgeListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  place-items: center;
  gap: 0px 10px;
  color: #fff;
`;

export const PageCountContainer = styled.div`
  display: flex;
  grid-column: 1 / 6;
  & > :nth-child(n) {
    color: #fff;
    margin: 10px;
  }
`;
