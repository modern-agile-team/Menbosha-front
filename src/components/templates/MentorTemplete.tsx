import SubPageHeader from '@/components/common/header/SubPageHeader';
import HelpCategory from '../organisms/help-board/HelpCategory';
import MentoBoardList from '../organisms/mentor-board/MentorBoardCard';
import MentorSideViewer from '../organisms/mentor-board/MentorSideViewer';
import MentorBoardUnit from '../organisms/mentor-board/MentorBoardUnit';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const MenteeTemplete = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const handleSlideNext = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const handleSlidePrev = () => {
    setCurrentSlide(currentSlide - 1);
  };

  useEffect(() => {
    if (slideRef.current !== null) {
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    }
  }, [currentSlide]);

  return (
    <>
      <SubPageHeader />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100vw',
          border: '2px solid #fff',
        }}>
        <SlideContainer>
          <SlideBox ref={slideRef}>
            <div>
              <HelpCategory />
              <MentoBoardList slide={handleSlideNext} />
            </div>
            <div>
              <MentorSideViewer next={handleSlideNext} prev={handleSlidePrev} />
            </div>
            <div>
              <MentorBoardUnit slide={handleSlidePrev} />
            </div>
          </SlideBox>
        </SlideContainer>
      </div>
    </>
  );
};

export default MenteeTemplete;

const SlideContainer = styled.div`
  overflow: hidden;
  width: 1512px;
`;

const SlideBox = styled.div`
  display: flex;
`;
