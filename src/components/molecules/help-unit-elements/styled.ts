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
