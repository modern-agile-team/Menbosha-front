import SubPageHeader from '@/components/common/header/SubPageHeader';
import MentorList from '../../organisms/mentor-board/MentorList';
import MentorSideViewer from '../../organisms/mentor-board/MentorSideViewer';
import { useEffect, useRef, useState } from 'react';
import * as S from './styled';
import Category from '../../common/category/Category';
import MentorBoardList from '@/components/organisms/mentor-board/MentorBoardList';
import { FlexBox, TextBox } from '@/components/common/globalStyled/styled';

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
        <TextBox size={30} color="#fff">
          멘토
        </TextBox>
        <S.MentorListContainer>
          <FlexBox type="flex">
            <MentorList slide={handleSlide} />
            <S.HiddenSlide isSlide={isSlide}>
              <MentorSideViewer slide={handleSlide} />{' '}
              {/*이 부분은 제거 예정 아닐 수 도 있고?*/}
            </S.HiddenSlide>
          </FlexBox>
        </S.MentorListContainer>
        <S.MentorBoardListContainer>
          <TextBox size={30} color="#fff">
            멘토게시물
          </TextBox>
          <MentorBoardList />
        </S.MentorBoardListContainer>
      </div>
    </>
  );
};

export default MentorTemplate;
