import SubPageHeader from '@/components/common/header/SubPageHeader';
import HelpCategory from '../organisms/help-board/HelpCategory';
import MentorBoardList from '../organisms/mentor-board/MentorBoardCard';
import MentorSideViewer from '../organisms/mentor-board/MentorSideViewer';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const MentorTemplate = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const handleSlide = () => {
    if (currentSlide === 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
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
              <MentorBoardList slide={handleSlide} />
            </div>
            <div>
              <MentorSideViewer slide={handleSlide} />
            </div>
          </SlideBox>
        </SlideContainer>
      </div>
    </>
  );
};

export default MentorTemplate;

const SlideContainer = styled.div`
  overflow: hidden;
  width: 1100px;
`;

const SlideBox = styled.div`
  display: flex;
`;
