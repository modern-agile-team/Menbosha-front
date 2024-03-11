import styled from 'styled-components';

/**오른쪽 화살표 아이콘  [ > ]*/
export const ArrowIcon = styled.div`
  margin-top: 0.4%;
  position: relative;
  &::after {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: 8px; /* 사이즈 */
    height: 8px; /* 사이즈 */
    border-top: 4px solid #000; /* 선 두께 */
    border-right: 4px solid #000; /* 선 두께 */
    transform: rotate(45deg); /* 각도 */
  }
`;

export const SupportContainer = styled.div`
  width: 100%;
  margin-top: 64px;
`;

export const SupportHeaderBox = styled.div`
  display: flex;
  & > :nth-child(1) {
    font-size: 2.67em; //64.08px
    font-weight: 900; //Pretendard-Black
    color: #ff772b;
  }
  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 0px 24px;
    font-size: 0.84em; //20.16px
    font-weight: 700; //Pretendard-Bold
    color: rgb(255, 119, 43, 0.75);
  }
`;

export const SupportButtonContainer = styled.div`
  display: flex;
  margin-top: 6vh;
  justify-content: center;
  //이미지 모두
  & > :nth-child(n) {
    cursor: pointer;
    text-decoration: none;
    padding: 2vw 5vw 1vw 5vw;
    background-color: #ff772b;
    border-radius: 10px;
    color: #fff;
    //질문이미지
    & > img {
      width: 10vw;
      padding-bottom: 30px;
    }
    //이미지 상위 박스
    & > :nth-child(1) {
      text-align: center;
    }
    //질문이름
    & > :nth-child(2) {
      font-size: 0.84em; //20.16px
      font-weight: 700; //Pretendard-Bold
      text-align: center;
    }
    //도움말보기
    & > :nth-child(3) {
      text-align: center;
    }
  }
  & > :nth-child(1) {
    margin: 0px 1.65vw 0px 0px;
  }
  & > :nth-last-child(1) {
    margin: 0px 0px 0px 1.65vw;
  }
  & > :not(:nth-child(1), :nth-last-child(1)) {
    margin: 0px 1.65vw;
  }
`;

export const SupportEtcContainer = styled.div`
  //기타 지원 제목
  & > :nth-child(1) {
    font-size: 1.25em; //30px
    font-weight: 700; //Pretendard-Bold
    color: #ff772b;
    margin: 60px 0px 25px 0px;
  }
  //기타 지원 서비스
  & > :not(:nth-child(1)) {
    font-size: 0.84em; //20.16px
    font-weight: 400; //Pretendard-Regular
    display: flex;
    border-bottom: 2px solid #ff772b;
    margin: 14px 0px;
  }
`;

export const SupportElementBox = styled.div`
  cursor: pointer;
  text-decoration: none;
  color: #000;
  padding: 0px 5px 15px 0px;
`;

//QnA Container
export const QnAContainer = styled.div`
  width: 80%;
  margin: 64px 204px;
  //제목
  & > :nth-child(1) {
    font-size: 2.67em; //64.08px
    font-weight: 900; //Pretendard-Black
    color: #ff772b;
    padding-bottom: 27px;
    border-bottom: 2px solid #ff772b;
  }
`;

export const QnAContentNListWrapper = styled.div`
  display: flex;
`;

export const ListContainer = styled.div`
  border-right: 2px solid #ff772b;
  height: 50vh;
  @media only all and (max-width: 1100px) {
    display: none;
  }
  & > :nth-child(n) {
    text-align: center;
    padding: 0px 6vh;
    margin: 3vh 0px;
    font-size: 0.84em; //20.16px
    font-weight: 700; //Pretendard-Bold
    cursor: pointer;
  }
`;

export const ReactListContainer = styled.div`
  display: none;
  @media only all and (max-width: 1100px) {
    display: flex;
  }
  & > :nth-child(n) {
    text-align: center;
    padding: 3vw 0px;
    margin: 0px 3vh;
    font-size: 0.84em; //20.16px
    font-weight: 700; //Pretendard-Bold
    cursor: pointer;
  }
`;

export const ContentsContainer = styled.div`
  width: 70%;
  @media only all and (max-width: 1100px) {
    width: 100%;
    margin: 0px;
  }
  margin: 3vh 0px 0px 6.5vw;
  & > :nth-child(1) {
    font-size: 2em; //48px
    font-weight: 700; //Pretendard-Bold
    color: #ff772b;
  }
  & > :nth-child(2) {
    margin: 4vh 1vw;
    @media only all and (max-width: 1100px) {
      margin: 0px;
    }
  }
`;

export const HelpLabelBox = styled.span`
  font-size: 0.5em; //12px
  font-weight: 400; //Pretendard-Regular
  color: #ffffffbf;
  border-bottom: 1px solid #fff;
`;
