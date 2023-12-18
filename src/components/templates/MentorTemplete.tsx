import SubPageHeader from '@/components/common/header/SubPageHeader';
import HelpCategory from '../organisms/help-board/HelpCategory';
import MentoBoardList from '../organisms/mentor-board/MentorBoardCard';
import MentorSideViewer from '../organisms/mentor-board/MentorSideViewer';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const MenteeTemplete = () => {
  const [isSlide, setSlide] = useState(false);

  const handleSlide = () => {
    setSlide(!isSlide);
  };

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
          <ContentList>
            <HelpCategory />
            <MentoBoardList slide={handleSlide} />
          </ContentList>
          <HiddenSlide isSlide={isSlide}>
            <MentorSideViewer slide={handleSlide} />
          </HiddenSlide>
        </SlideContainer>
      </div>
    </>
  );
};

export default MenteeTemplete;

const SlideContainer = styled.div`
  display: flex;
  width: 1560px;
`;

const ContentList = styled.div`
  position: relative;
`;

interface SlideType {
  isSlide: boolean;
}

const HiddenSlide = styled.div<SlideType>`
  height: 100%;
  /* width: 0px; */
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #252525;
  overflow-x: hidden;
  transform: ${({ isSlide }) =>
    isSlide ? 'translateX(260px)' : 'translateX(2000px)'};
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
`;
