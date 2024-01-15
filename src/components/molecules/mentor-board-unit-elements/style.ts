import styled from 'styled-components';

export const HeadProfile = styled.div`
  > :nth-child(1) {
    padding: 0px 0px 3px 12px;
  }
  > :nth-child(2) {
    width: 140px;
    justify-content: space-evenly;
  }
`;

export const SlideContain = styled.div`
  overflow: hidden;
  width: 46vw;
  min-width: 434px;
  height: 290px;
`;

export const SlidImages = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
`;

export const BodyImages = styled.img`
  min-width: 434px;
  width: 46vw;
  height: 290px;
  object-fit: scale-down;
  background-color: #999;
`;

export const BodyContentBox = styled.div`
  min-width: 434px;
  width: 46vw;
  :nth-child(1) {
    overflow-wrap: break-word;
    width: 100%;
  }
`;
