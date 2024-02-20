import { AskShowPropsType } from '@/types/support';
import styled from 'styled-components';

export const AskContentWrapper = styled.div`
  margin-bottom: 28px;
`;

export const BeforeTitleContainer = styled.div`
  display: flex;
  padding-bottom: 12px;
  font-size: 20px;
  border-bottom: 1px solid #ff772b;
  cursor: pointer;
`;

export const AfterTitleContainer = styled.div`
  font-size: 20px;
  cursor: pointer;
  & > :nth-child(1) {
    display: flex;
    font-weight: bold;
    padding-bottom: 12px;
  }
`;

export const ArrowIcon = styled.div<AskShowPropsType>`
  position: relative;
  margin-left: auto;
  margin-right: 25px;
  transition: all 500ms ease;
  &::after {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: 10px; /* 사이즈 */
    height: 10px; /* 사이즈 */
    border-top: 5px solid #000; /* 선 두께 */
    border-right: 5px solid #000; /* 선 두께 */
    transform: ${({ show }) =>
      show ? 'rotate(315deg)' : 'rotate(135deg)'}; /* 각도 */
  }
`;
