import { useEffect, useRef, useState } from 'react';

const useCarousel = (image: any) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const handleSlideNext = () => {
    if (currentSlide === image.length - 1) {
      setCurrentSlide(0);
      // alert('마지막 사진 입니다.');
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleSlidePrev = () => {
    if (currentSlide === 0) {
      setCurrentSlide(image.length - 1);
      // alert('맨 앞 사진 입니다.');
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    if (slideRef.current !== null) {
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    }
  }, [currentSlide]);

  return [slideRef, handleSlidePrev, handleSlideNext];
};

export default useCarousel;
