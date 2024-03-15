import styled from 'styled-components';

export const ScrollTopBox = styled.div<{ isVisible: boolean }>`
  position: fixed;
  bottom: 4px;
  right: 4px;
  transition-duration: 200ms;
  transition-property: opacity;
  opacity: ${({ isVisible }) => (isVisible ? '100' : '0')};
  cursor: ${({ isVisible }) => (isVisible ? 'pointer' : '')};
  & > img {
    width: 10vw;
    height: 16vh;
  }
`;
