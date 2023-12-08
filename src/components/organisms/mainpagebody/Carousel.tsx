import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

const MainImageSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <Image
            src="/body-1.svg"
            alt="Body Image 1"
            width="1053"
            height="500"
          />
        </div>
        <div>
          <Image
            src="/body-2.svg"
            alt="Body Image 2"
            width="1053"
            height="500"
          />
        </div>
        <div>
          <Image
            src="/body-3.svg"
            alt="Body Image 3"
            width="1053"
            height="500"
          />
        </div>
      </Slider>
    </div>
  );
};

export default MainImageSlider;
