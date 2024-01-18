import styled from 'styled-components';

export const SlideContain = styled.div`
  overflow: hidden;
  width: 700px;
  height: 350px;
`;

export const SlidImages = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const BodyImages = styled.img`
  width: 700px;
  height: 350px;
  background-size: cover;
  object-fit: scale-down;
  background-color: #999;
`;

export const HeadTextBox = styled.div`
  > :nth-child(1) {
    margin: 0px 0px 5px 12px;
  }
  > :nth-child(2) {
    margin: 0px 12px 0px 12px;
    > * {
      margin: 0px 20px 0px 0px;
    }
  }
`;
