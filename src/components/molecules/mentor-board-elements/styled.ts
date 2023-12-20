import styled from 'styled-components';

export const CardContainer = styled.div`
  height: 425px;
  transition: height 500ms ease;
  & > :nth-child(1) {
    height: 290px;
    transition: height 500ms ease;
  }
  &:hover {
    height: 517px;
    & > :nth-child(1) {
      height: 370px;
      transition: height 500ms ease;
    }
  }
`;

export const CardImageBox = styled.div`
  width: 280px;
  height: 290px;
  background-color: #999;
  border-radius: 10px;
  cursor: pointer;
`;

interface CardTextBoxType {
  size: number;
  color: string;
  padding: string;
}

/** CardTextBox
 * @params size={number}
 * @params color={string}
 * @params padding={string}
 *
 * @returns size -> font-size
 * @returns color -> color
 * @returns padding -> padding
 *
 * @example size={20}
 * @example color={#fff}
 * @example padding={5px || 5px 5px || 5px 5px 5px 5px}
 */
export const CardTextBox = styled.div<CardTextBoxType>`
  font-weight: bold;
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  cursor: pointer;
`;
