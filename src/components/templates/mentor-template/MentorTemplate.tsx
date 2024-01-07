import SubPageHeader from '@/components/common/header/SubPageHeader';
import MentorList from '../../organisms/mentor-board/MentorList';
import MentorSideViewer from '../../organisms/mentor-board/MentorSideViewer';
import { useEffect, useRef, useState } from 'react';
import * as S from './styled';
import Category from '../../common/category/Category';
import MentorBoardList from '@/components/organisms/mentor-board/MentorBoardList';

const MentorTemplate = () => {
  const [isSlide, setSlide] = useState(false);

  const handleSlide = () => {
    setSlide(!isSlide);
  };

  return (
    <>
      <SubPageHeader />
      <Category />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100vw',
        }}>
        <S.MentorListContainer>
          <MentorList slide={handleSlide} />
          <S.HiddenSlide isSlide={isSlide}>
            <MentorSideViewer slide={handleSlide} />{' '}
            {/*이 부분은 제거 예정 아닐 수 도 있고?*/}
          </S.HiddenSlide>
        </S.MentorListContainer>
        <S.MentorBoardListContainer>
          <MentorBoardList />
        </S.MentorBoardListContainer>
      </div>
    </>
  );
};

export default MentorTemplate;
