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
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    /* width: 10px; */
    background: gray;
    border-radius: 10px;
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
