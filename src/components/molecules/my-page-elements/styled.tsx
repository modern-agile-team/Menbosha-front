import { AskShowPropsType } from '@/types/support';
import styled, { css } from 'styled-components';

//마이 랭크
export const MyRankWrapper = styled.div`
  display: grid;
  grid-template-columns: 16.6vw 16.6vw 16.6vw;
  grid-template-rows: 1fr;
  //페이지 타이틀
  & > :nth-child(1) {
    font-size: 3.33vw; //64.8px
    font-weight: 900; //Pretendard-Black
    color: #fff;
    margin-right: 4.5vw;
  }
  //랭크 이미지
  & > :nth-child(2) {
    width: 11vw;
    height: 11vw;
    padding: 2vw;
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
    font-size: 1.88vw; //36px
    font-weight: 700; //Pretendard-Bold
  }
  & > :nth-child(2) {
    font-size: 0.83vw; //15.936px
    font-weight: 400; //Pretendard-Regular
    margin-top: 5px;
  }
`;

//랭크 레벨, 해금 단계 컨테이너
export const RankLevelLockContainer = styled.div`
  display: grid;
  margin-top: 5vh;
  grid-template-columns: 10vw 10vw 10vw 10vw 10vw;
  grid-template-rows: 1fr 0fr 1fr;
  //해금 랭크 이미지들
  & > :nth-child(1),
  :nth-child(2),
  :nth-child(3),
  :nth-child(4),
  :nth-child(5) {
    text-align: center;
    & > img {
      width: 5vw;
      height: 5vw;
    }
  }
  //그라데이션 바
  & > :nth-child(6) {
    width: 50vw;
    grid-column: 1/ 6;
    border: 5px solid transparent;
    border-radius: 10px;
    margin: 2.1vh 0px;
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
  //해금 랭크 이름
  & > :nth-child(7),
  :nth-child(8),
  :nth-child(9),
  :nth-child(10),
  :nth-child(11) {
    text-align: center;

    & > :nth-child(1) {
      font-size: 1.25vw; //24px
      font-weight: 700; //Pretendard-Bold
      color: #fff;
    }
    & > :nth-child(2) {
      font-size: 0.83vw; //15.936px
      font-weight: 400; //Pretendard-Regular
      margin-top: 5px;
      color: #fff;
    }
  }
`;

//내 칭호
export const BadgeListWrapper = styled.div`
  display: grid;
  grid-template-columns: 10vw 10vw 10vw 10vw 10vw;
  place-items: center;
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

export const UnlockBadgeBox = styled.div`
  & > :nth-child(1) {
    width: 10vw;
    height: 9.5vh;
    margin-top: 5px;
  }
`;

export const UnlockBadgePreviewBox = styled.div`
  & > :nth-child(1) {
    display: block;
    width: 10vw;
    height: 11vh;
  }
  & > :nth-child(2) {
    display: none;
    width: 10vw;
    height: 11vh;
  }
  &:hover {
    & > :nth-child(1) {
      display: none;
      width: 8vw;
      height: 11vh;
    }
    & > :nth-child(2) {
      display: block;
      width: 8vw;
      height: 11vh;
    }
  }
`;

interface BtnType {
  i: number;
  curPage: number;
}

export const Btn = styled.div<BtnType>`
  color: #fff;
  font-size: 1em;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
  ${(props) =>
    props.i === props.curPage &&
    css`
      padding-bottom: 3px;
      border-bottom: 3px solid #fff;
      font-weight: bold;
      cursor: revert;
      transform: revert;
    `}
`;
