import styled, { css } from 'styled-components';

export const ReviewWrapper = styled.div`
  color: #000;
  padding: 15px;
`;

/**체크리스트 컨테이너 */
export const CheckListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;

interface StyledCheckType {
  isCheck: boolean;
}

/**체크리스트 박스 */
export const CheckBox = styled.div<StyledCheckType>`
  border: 1px solid #ff772b;
  cursor: pointer;
  border-radius: 10px;
  padding: 6px 12px;
  margin: 15px;
  transition: all 200ms ease-in-out;
  ${({ isCheck }) => {
    return css`
      background-color: ${isCheck ? '#ff772b' : '#fff'};
      color: ${isCheck ? '#000' : '#fff'};
    `;
  }}
  background-color: ${({ isCheck }) => (isCheck ? '#fff' : '#ff772b')};
  @media only all and (max-width: 1900px) {
    margin: 2%;
    font-size: 12px;
  }
`;

/**체크리스트 경고문구 */
export const CheckWarning = styled.div`
  text-align: start;
  color: rgb(255, 119, 43, 0.75);
  font-size: 14px;
  margin: 0px 15px 15px 15px;
`;

/**후기 작성 컨테이너 */
export const ReviewInputContainer = styled.div`
  margin: 45px 15px 15px 15px;
`;

interface CountType {
  isCount: boolean;
}

export const ReviewInputTitle = styled.div<CountType>`
  display: flex;
  & > :nth-child(1) {
    font-size: 16px;
    font-weight: bold;
    color: #000;
    text-align: left;
  }
  & > :nth-child(2) {
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    margin-left: 20px;
    //200자를 넘어가면 빨간글씨
    color: ${({ isCount }) => (isCount ? '#000' : '#f00')};
  }
`;

/**후기 작성 area */
export const ReviewAreaBox = styled.textarea`
  border: 2px solid #ff772b;
  border-radius: 10px;
  margin: 12px 0px 0px 0px;
  font-size: 15px;
  width: 97%;
  resize: none;
  outline: none;
  //스크롤 바 숨김
  &::-webkit-scrollbar {
    display: none;
  }
  height: 24vh;
  //1900px 반응형
  @media only all and (max-width: 1900px) {
    height: 200px;
  }
  padding: 15px 13px 15px 13px;
`;

/**submit버튼 */
export const SubmitButton = styled.div`
  border: 1px solid #ff772b;
  border-radius: 10px;
  padding: 6px 12px;
  font-size: 16px;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  //submit버튼 hover
  &:hover {
    background-color: #ff772b;
    color: #fff;
    transition: all 200ms ease-in-out;
  }
`;
