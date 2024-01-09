import SubPageHeader from '@/components/common/header/SubPageHeader';
import MentorList from '../../organisms/mentor-board/MentorList';
import MentorSideViewer from '../../organisms/mentor-board/MentorSideViewer';
import { useEffect, useRef, useState } from 'react';
import * as S from './styled';
import Category from '../../common/category/Category';
import MentorBoardList from '@/components/organisms/mentor-board/MentorBoardList';
import { FlexBox, TextBox } from '@/components/common/globalStyled/styled';

const MentorBoardTemplate = () => {
  return (
    <>
      <SubPageHeader />
      <Category />
      <S.ContainerWrapper>
        <S.MentorBoardListContainer>
          <TextBox size={30} color="#fff">
            멘토가 들려주는 꿀통 대방출~!~!
          </TextBox>
        </S.MentorBoardListContainer>
        <S.MentorBoardListContainer>
          <TextBox size={30} color="#fff">
            최근 인기 멘토글
          </TextBox>
        </S.MentorBoardListContainer>
        <S.MentorBoardListContainer>
          <TextBox
            size={30}
            color="#fff"
            style={{ padding: '0px 0px 24px 6px' }}>
            전체 멘토 게시글
          </TextBox>
          <MentorBoardList />
        </S.MentorBoardListContainer>
      </S.ContainerWrapper>
    </>
  );
};

export default MentorBoardTemplate;
