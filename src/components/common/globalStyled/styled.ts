import styled, { css } from 'styled-components';

interface TextType {
  color?: string;
  size?: number;
}

/**
 * 텍스트 상자의 색깔과 size 지정을 위한 style
 * @param color [string]
 *  color='#fff'
 * @param size [number]
 *  size={20}
 * @return color -> color : #fff
 * @return color -> size : 20px
 */
export const TextBox = styled.div<TextType>`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size}px;
`;

interface FlexType {
  type?: string;
  direction?: string;
  col?: string;
  row?: string;
}

/** display속성을 위한 style
 * @param type [string]
 *  type='flex' || 'block' || 'grid
 * @param direction [string]
 *  direction='column' || 'row'
 * @param col [string]
 *  col='left' || 'center' || 'rigth'
 * @param row [string]
 *  row='start' || 'center' || 'left'
 * @return type -> display: flex
 * @return direction -> flex-direction: column
 * @return col -> justify-content : center
 * @return row -> align-items: center
 */
export const FlexBox = styled.div<FlexType>`
  ${({ type, direction, col, row }) => {
    return css`
      display: ${type};
      flex-direction: ${direction};
      justify-content: ${col};
      align-items: ${row};
    `;
  }}
`;
