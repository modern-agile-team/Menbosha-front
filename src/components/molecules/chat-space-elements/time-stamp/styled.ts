import styled from 'styled-components';

export const TimeStampContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 2vh;
  margin: 10px 0px;
  justify-content: center;
  align-items: center;
  /* border: 2px solid blue; */
`;

export const TimeLine = styled.div`
  width: 38vw;
  height: 0px;
  border: 1px solid #ffbb5c;
  opacity: 0.2;
`;

export const TimeStampArea = styled.div`
  width: 6vw;
  height: 2vh;
  text-align: center;
  /* border: 1px solid white; */
  /* font-family: 'Pretendard';
  font-style: normal; */
  font-weight: 400;
  font-size: 0.5em;
  line-height: 150%;
  opacity: 0.7; // 추후에 font-weight로 조정할 예정
`;
