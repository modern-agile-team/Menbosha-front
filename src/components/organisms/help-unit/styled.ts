import Slider from 'react-slick';
import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: right;
  padding: 130px;
`;

export const SliderContainer = styled.div`
  display: flex;
  justify-content: right;
`;

export const StyledSlider = styled(Slider)`
  display: flex;
  width: 46.8vw;
  height: 40vh;
  margin: 50px 0px 0px 0px;
  border-radius: 30px;
  justify-content: right;
`;
