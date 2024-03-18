import styled from 'styled-components';

export const SlideContain = styled.div`
  overflow: hidden;
  width: 45vw;
  height: 34vh;
`;

export const SlidImages = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const ImageNextNPrevButton = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: colum;
  cursor: pointer;
  margin: 0px 25px;
  font-size: 64px;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BodyImages = styled.img`
  width: 45vw;
  height: 34vh;
  object-fit: scale-down;
  background-color: #999;
`;

export const BodyContentBox = styled.div`
  width: 46vw;
  margin: 24px 0px;
  :nth-child(1) {
    overflow-wrap: break-word;
    width: 100%;
  }
`;

//멘토 게시글
export const MentorBoardTitleInfo = styled.div`
  width: 50vw;
  & > :nth-child(1) {
    font-size: 0.45em; //10.8px
    font-weight: 300; //Pretendard-Light
    color: rgba(0, 0, 0, 0.5);
  }
  & > :nth-child(2) {
    font-size: 1.7em; //40.8px
    font-weight: 700;
    color: #ff772f;
  }
`;

/**멘토 게시글 작성 유저 */
export const MentorBoardOwnerUser = styled.div`
  display: flex;
  margin: 41px 0px 24px 0px;
  width: 50vw;
  & > img {
    width: 51px;
    height: 51px;
    border-radius: 10px;
  }
`;

export const HeadProfile = styled.div`
  padding: 0px 0px 0px 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //이름
  & > :nth-child(1) {
    font-size: 0.67em; //16.08px
    font-weight: 700; //Pretendard-Bold
  }
  //카테고리
  & > :nth-child(2) {
    font-size: 0.5em; //12px
    font-weight: 400; //Pretendard-Regular
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-left: auto;
  & > img {
    width: 24px;
    height: 24px;
    margin: auto 18px;
    cursor: pointer;
  }
`;

export const LikeContainer = styled.div`
  margin: 94px 0px 50px auto;
  display: flex;
  & > img {
    cursor: pointer;
  }
  //카운트
  & > :nth-child(2) {
    margin: auto 10px;
    font-size: 0.58em; //13.92px
    font-weight: 400; //Pretendard-Regular
  }
`;

export const MentorInfoCardContainer = styled.div`
  border: 2px solid #ff772b;
  border-radius: 10px;
  padding: 24px;
  text-align: center;
  height: 42vh;
  //멘토 이미지
  & > img {
    width: 13vw;
    height: 23vh;
    border-radius: 10px;
  }
  //멘토 info박스
  & > :nth-child(2) {
    display: flex;
    padding: 27px 0px 0px 5px;
    @media only all and (max-width: 800px) {
      display: block;
    }
  }
`;

export const MentorRankInfo = styled.div`
  //랭크이미지
  & > :nth-child(1) {
    width: 2.8vw;
    height: 5vh;
  }
  //랭크 이름
  & > :nth-child(2) {
    font-size: 0.67em; //16.08px
    font-weight: 500; //Pretendard-Medium
  }
  & > :nth-child(3) {
    font-size: 0.5em; //12px
    font-weight: 400; //Pretendard-Regular
  }
`;

export const MentorInfoBox = styled.div`
  text-align: left;
  //유저 info의 이름
  & > :nth-child(1) {
    font-size: 0.84em; //20.16px
    font-weight: 700; //Pretendard-Bold
  }
  //유저 info의 정보 박스
  & > :nth-child(2) {
    padding: 12px 0px;
    color: #000000;
    @media only all and (max-width: 600px), (max-height: 500px) {
      display: none;
    }
    & > :nth-child(1),
    :nth-child(2) {
      @media only all and (max-width: 1400px), (max-height: 1000px) {
        display: none;
      }
    }
  }
  & > :not(:nth-child(1)) {
    font-size: 0.5em; //12px
    font-weight: 400; //Pretendard-Regular
    color: rgba(0, 0, 0, 0.75);
  }
`;

export const MentorRecordCountContainer = styled.div`
  display: flex;
  @media only all and (max-width: 1400px), (max-height: 700px) {
    display: none;
  }
  //카운트 각각 요소
  & > :nth-child(n) {
    width: 4vw;
    margin-right: 2vw;
    display: flex;
    & > :nth-child(2) {
      font-size: 0.42em; //10.08px
      font-weight: 400; //Pretendard-Regular
      color: rgba(0, 0, 0, 0.5);
      margin: auto 0px auto 10px;
    }
  }
`;

export const MentorOtherBoardsContainer = styled.div`
  margin: 1.8vw;
  //다른 게시물 상위 타이틀
  & > :nth-child(1) {
    color: #ff772b;
    font-size: 1em;
    font-weight: 700;
  }
  //게시물들
  & > :nth-child(2) {
    display: flex;
  }
`;

export const MentorBoardCardWrapper = styled.div`
  width: 15vw;
  margin: 14px;
`;
