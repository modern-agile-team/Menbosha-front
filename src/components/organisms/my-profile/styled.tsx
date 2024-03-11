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
  /* margin: 0px 363px 0px 159px; */
  margin: 0px 19vw 0px 8vw;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 2fr 0.5fr 1fr 1fr 1fr;
  color: #fff;
  //페이지 이름
  & > :nth-child(1) {
    font-size: 2.7em; //64px
    font-size: 3.33vw;
    font-weight: 900; //Pretendard-Black
  }
  //본인 이미지
  & > :nth-child(2) {
    width: 14.6vw; //280.31px
    height: 33.4vh; //360.71px
    border-radius: 10px;
  }
  //프로필 설정(프로필 변경)
  & > :nth-child(3) {
    padding-left: 1.2vw; //23.04px
    align-self: self-end;
    & > :nth-child(1) {
      width: 2vw;
    }
  }
  //본인 이름, 멘토 여부
  & > :nth-child(5) {
    > :nth-child(1) {
      font-size: 2.1vw; //40.32px
      font-weight: 700; //Pretendard-Bold
    }
    > :nth-child(2) {
      font-size: 0.83vw; //15.936px
      font-weight: 400; //Pretendard-Regular
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
      font-size: 1.05vw; //20.16px
      font-weight: 700; //Pretendard-Bold
      padding: 0px 0px 24px 0px;
    }
    > :nth-child(2) {
      font-size: 0.83vw; //15.936px
      font-weight: 400; //Pretendard-Regular
    }
  }
  & > :nth-child(9) {
    grid-column: 1 / 4;
  }
  & > :nth-child(11) {
    grid-column: 2 / 4;
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

/**업데이트 프로필 타이틀 */
export const UpdateProfileTitleBox = styled.div`
  font-size: 2.7em; //64.8px
  font-weight: 900; //Pretendard-Black
  color: #ff772b;
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
    font-size: 0.85em; //20.4px
    font-weight: 700; //Pretendard-Bold
    color: #ff772b;
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
      font-size: 0.85em; //20.4px
      font-weight: 700; //Pretendard-Bold
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
      font-size: 0.85em; //20.4px
      font-weight: 700; //Pretendard-Bold
      color: #ff772b;
      padding-bottom: 12px;
    }
    //업데이트 박스
    & > :nth-child(2) {
      border: 1px solid #ff772b;
      resize: none;
      font-size: 0.5em; //12px
      font-weight: 400; //Pretendard-Regular
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
  font-size: 1vw;
  margin-left: 0.5vw;
`;

//이메일 상자
export const EmailBox = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.5);
  color: #000;
  border-radius: 10px;
  padding: 15px;
  font-size: 16px;
`;

//멘토 멘티 토글 버튼구현
export const ToggleWrapper = styled.div<{ value: boolean }>`
  position: relative;
  cursor: pointer;
  border-radius: 50px;
  width: 88px;
  border: 2px solid #ff772b;
  span {
    position: absolute;
    width: 41px;
    height: 41px;
    top: 2px;
    border-radius: 50px;
    background-color: #ff772b;
    transition: all 0.6s ease-in-out;
    z-index: 1;
    ${(
      { value }, //props에 따른 삼항연산자 처리
    ) =>
      value
        ? 'transform: translateX(0px);left: 3px;'
        : 'transform: translateX(48px);left: -3px;'}
  }
`;

export const ToggleButton = styled.button`
  position: relative;
  border: none;
  background-color: #fff;
  height: 45px;
  color: rgba(255, 121, 43, 0.75);
  font-weight: 700;
  font-size: 14px;
  border-radius: 50px;
  margin-left: 2px;
  cursor: pointer;
  z-index: 0;
`;

interface IsCategoryType {
  isCategory?: boolean;
}
//희망 카테고리 리스트
export const HopeCategoryContainer = styled.div<IsCategoryType>`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  font-size: 16px;
`;

//카테고리 박스 (nth-child때문에 적용이 안돼서 !import값을 줌)
export const CategoryBox = styled.div<IsCategoryType>`
  padding: 4px 12px !important;
  border: 1px solid #ff772b !important;
  border-radius: 10px !important;
  margin: 9px 18px 9px 0px !important;
  font-size: 16px !important;
  font-weight: bold !important;
  color: #000 !important;
  cursor: pointer !important;
  background-color: ${({ isCategory }) =>
    isCategory ? '#ff772b' : '#fff'} !important;
  transition: all 300ms ease !important;
`;
