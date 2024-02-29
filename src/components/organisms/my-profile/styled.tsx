import styled from 'styled-components';

//마이페이지
export const MyInfoContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0px 363px 0px 159px;
`;

export const MyInfoHeaderBox = styled.div`
  display: flex;
  //페이지 이름
  & > :nth-child(1) {
    font-size: 52px;
    font-weight: bold;
    color: #fff;
    padding-right: 114px;
  }
  & > :nth-child(2) {
    width: 280px;
    height: 360px;
    border-radius: 10px;
  }
  //프로필 설정(프로필 변경)
  & > :nth-child(3) {
    margin: 0px 244px 0px 28px;
  }
`;

export const MyInfoBodyBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MyInfoFooterBox = styled.div`
  display: flex;
`;

export const MyInfoGridContainer = styled.div`
  display: grid;
  margin: 0px 363px 0px 159px;
  grid-template-columns: 280px 280px 280px;
  grid-template-rows: 2fr 0.5fr 1fr 1fr 1fr;
  color: #fff;
  //페이지 이름
  & > :nth-child(1) {
    font-size: 64px;
    font-weight: bold;
  }
  //본인 이미지
  & > :nth-child(2) {
    width: 280px;
    height: 360px;
    border-radius: 10px;
  }
  //프로필 설정(프로필 변경)
  & > :nth-child(3) {
    padding-left: 24px;
    align-self: self-end;
  }
  //본인 이름, 멘토 여부
  & > :nth-child(5) {
    > :nth-child(1) {
      font-size: 40px;
      font-weight: bold;
    }
    > :nth-child(2) {
      font-size: 16px;
    }
    grid-column: 2 / 4;
  }
  //소개
  & > :nth-child(6),
  :nth-child(7),
  :nth-child(8),
  :nth-child(9),
  :nth-child(10),
  :nth-child(11) {
    > :nth-child(1) {
      font-size: 20px;
      font-weight: bold;
      padding: 0px 0px 24px 0px;
    }
    > :nth-child(2) {
      font-size: 16px;
    }
  }
  & > :nth-child(9) {
    grid-column: 1 / 4;
  }
  & > :nth-child(11) {
    grid-column: 2 / 4;
  }
  @media only all and (max-width: 1650px) {
    gap: 10px 0px;
  }
`;

//업데이트 마이페이지
interface DropType {
  drag: boolean;
}

export const DropDownImageBox = styled.label<DropType>`
  display: flex;
  color: #000;
  border-radius: 10px;
  width: 280px;
  height: 350px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ drag }) => (drag ? '#999' : '#DADADA')};
  > :nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    //이미지 수정 box내부 텍스트1
    > :nth-child(1) {
      font-size: 55px;
    }
    //이미지 수정 box내부 텍스트1
    > :nth-child(2),
    :nth-child(3) {
      font-size: 12px;
    }
  }
`;

export const UpdateProfileContainer = styled.div`
  display: grid;
  justify-content: center;
  gap: 60px 0px;
  color: #000;
  width: 100%;
  margin: 0px 300px 0px 128px;
  grid-template-columns: 280px 280px 280px;
  grid-template-rows: 0px 2fr 0.5fr 1fr 1fr 0.3fr;
  textarea::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
  //이미지 타이틀
  & > :nth-child(2) {
    grid-column: 2 / 4;
    padding-bottom: 16px;
  }
  & > :nth-child(4) {
    img {
      width: 280px;
      height: 2fr;
    }
  }
  //멘토 멘티 변경 버튼
  & > :nth-child(5) {
    align-self: self-end;
    margin-left: 24px;
  }
  //카테고리 선택
  & > :nth-child(6) {
    & > :nth-child(1) {
      font-size: 20px;
      font-weight: bold;
      color: #ff772b;
    }
    grid-column: 1 / 4;
  }
  //수정 박스들
  & > :nth-child(7), //소개 박스
  :nth-child(8), //주요 경력 박스
  :nth-child(9)//관심카테고리 박스
  {
    //소제목
    & > :nth-child(1) {
      font-size: 20px;
      font-weight: bold;
      color: #ff772b;
      padding-bottom: 12px;
    }
    //업데이트 박스
    & > :nth-child(2) {
      border: 1px solid #ff772b;
      resize: none;
      font-size: 12px;
      color: rgba(0, 0, 0);
      border-radius: 10px;
      height: 108px;
      width: 90%;
      padding: 9px;
    }
    margin: 0px 8px;
  }
  //세부사항 수정 box
  & > :nth-child(10) {
    //소제목
    & > :nth-child(1) {
      font-size: 20px;
      font-weight: bold;
      color: #ff772b;
      padding-bottom: 12px;
    }
    //업데이트 박스
    & > :nth-child(2) {
      border: 1px solid #ff772b;
      font-size: 12px;
      resize: none;
      color: rgba(0, 0, 0);
      border-radius: 10px;
      height: 108px;
      padding: 9px;
      width: 96%;
    }
    grid-column: 1 / 4;
  }
  //포트폴리오 수정 box
  & > :nth-child(11) {
    grid-column: 1 / 2;
  }
  //sns수정 box
  & > :nth-child(12) {
    grid-column: 3 / 4;
  }
  & > :nth-child(11), //포트폴리오 박스
  :nth-child(12), //sns박스
  :nth-child(13) //휴대폰 인증 박스
  {
    //소제목
    & > :nth-child(1) {
      font-size: 20px;
      font-weight: bold;
      color: #ff772b;
      padding-bottom: 12px;
    }
    //업데이트 박스
    & > :nth-child(2) {
      border: 1px solid #ff772b;
      font-size: 12px;
      resize: none;
      color: rgba(0, 0, 0, 0.5);
      border-radius: 10px;
      padding: 9px;
    }
  }
  //저장버튼
  & > :nth-child(15) {
    justify-self: self-end;
    align-self: self-end;
    //버튼
    & > :nth-child(1) {
      border-radius: 10px;
      background-color: #ff772b;
      padding: 6px 60px;
      cursor: pointer;
    }
  }
`;

export const iIcon = styled.div`
  font-size: 15px;
  margin-left: 10px;
`;

export const EmailBox = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.5);
  color: #000;
  border-radius: 10px;
  padding: 15px;
  font-size: 16px;
`;
