import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  /* border: 2px solid white; */
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
      <div>
        <Image src="/body-1.svg" alt="Body Image 1" width={1307} height={600} />
      </div>
      <div>
        <Image src="/body-2.svg" alt="Body Image 2" width={1307} height={600} />
      </div>
      <div>
        <Image src="/body-3.svg" alt="Body Image 3" width={1307} height={600} />
      </div>
    </StyledSlider>
  );
};

export default MainImageSlider;
