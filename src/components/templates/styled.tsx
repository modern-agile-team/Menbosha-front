import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;

  color: white;
  &::-webkit-scrollbar {
    width: 14px;
    background: rgb(255, 255, 255, 0.5);
  }
  &::-webkit-scrollbar-thumb {
    /* width: 10px; */
    background: rgb(128, 128, 128, 0.7);
    border-radius: 4px;
  }
`;

export const PageWrapperRaw = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  color: white;
`;
