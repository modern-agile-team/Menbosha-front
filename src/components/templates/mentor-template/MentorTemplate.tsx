import SubPageHeader from '@/components/common/header/SubPageHeader';
import MentorList from '../../organisms/mentor-board/MentorList';
import MentorSideViewer from '../../organisms/mentor-board/MentorSideViewer';
import { useEffect, useRef, useState } from 'react';
import * as S from './styled';
import Category from '../../common/category/Category';
import MentorBoardList from '@/components/organisms/mentor-board/MentorBoardList';
import { FlexBox, TextBox } from '@/components/common/globalStyled/styled';

const MentorTemplate = () => {
  return (
    <>
      <SubPageHeader />
      <Category />
      <S.ContainerWrapper>
        <S.MentorListContainer>
          <TextBox size={30} color="#fff">
            명예의 전당
          </TextBox>
          <MentorList />
        </S.MentorListContainer>
        <S.MentorListContainer>
          <TextBox size={30} color="#fff">
            인기 멘토
          </TextBox>
          <MentorList />
        </S.MentorListContainer>
        <S.MentorListContainer>
          <TextBox size={30} color="#fff">
            전체 멘토
          </TextBox>
          <MentorList />
        </S.MentorListContainer>
      </S.ContainerWrapper>
    </>
  );
};

export default MentorTemplate;
