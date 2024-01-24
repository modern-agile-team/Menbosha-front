import styled from 'styled-components';

export const BodyWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  justify-content: center;
  /* border: 2px solid black; */
`;

export const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenboshaImageBox = styled.div`
  display: flex;
  background-image: url('https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/mainMenbosha.svg');
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  /* z-index: -999; */
  /* border: 2px solid red; */
`;

export const MenboshaTitleBoxColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 5.3em;
  font-weight: 800;
  text-shadow: 0px 0px 5.7px rgba(0, 0, 0, 0.4);
`;

export const MenboshaTitleBoxRow = styled.div`
  display: flex;
  flex-direction: row;
  :nth-child(1) {
    color: #ff772b;
  }
`;
