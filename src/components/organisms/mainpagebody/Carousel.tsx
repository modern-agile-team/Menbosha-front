import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StyledSlider = styled(Slider)`
  width: 76.8vw;
  height: 65vh;
  align-items: center;
  border-radius: 30px;
`;

const ImageContainer1 = styled.div`
  background-image: url('/body-1.svg');
  background-repeat: no-repeat;
  background-size: 76.7vw 70vh;
  width: 76.8vw;
  height: 70vh;
`;
const ImageContainer2 = styled.div`
  background-image: url('/body-2.svg');
  background-repeat: no-repeat;
  background-size: 76.7vw 70vh;
  width: 76.8vw;
  height: 70vh;
`;
const ImageContainer3 = styled.div`
  background-image: url('/body-3.svg');
  background-size: 76.7vw 70vh;
  width: 76.8vw;
  height: 70vh;
`;

const MainImageSlider = () => {
  const settings = {
    // centerMode: true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };

  return (
    <StyledSlider {...settings}>
      <ImageContainer1></ImageContainer1>
      <ImageContainer2></ImageContainer2>
      <ImageContainer3></ImageContainer3>
    </StyledSlider>
  );
};

export default MainImageSlider;
