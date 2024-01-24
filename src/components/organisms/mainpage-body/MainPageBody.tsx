import React from 'react';
import * as S from './styled';

const MainPageBody = () => {
  return (
    <S.BodyWrapper>
      <S.BodyContainer>
        <S.MainContentsContainer1>
          <S.MenboshaTitleBoxColumn>
            <S.MenboshaTitleBoxRow>
              <span>멘보샤</span>
              <span>처럼 맛있게,</span>
            </S.MenboshaTitleBoxRow>
            <span>당신만의 멘토링.</span>
          </S.MenboshaTitleBoxColumn>
        </S.MainContentsContainer1>
        <S.MainContentsContainer2>
          <S.MainContents2Left src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/mainLeaf.svg" />
          <S.MainContents2Right>
            <span>바로 해결하는 멘토링.</span>
            <span>
              멘보샤는 질문 - 채팅 - 해결이라는 직관적이고 빠른 시스템으로
              문제를 해결하는데 소요되는 시간을 많이 단축시킬 수 있습니다. 마감
              시간이 다가올 때, 내일 당장 무언가를 해야할 때 멘보샤를 통해
              빠르게 답변을 받아보세요.
            </span>
            <S.MainContents2RightBottom>
              <span>질문 작성</span>
              <span>멘토 확인 및 1대1 채팅</span>
              <span>해결</span>
            </S.MainContents2RightBottom>
          </S.MainContents2Right>
        </S.MainContentsContainer2>
      </S.BodyContainer>
    </S.BodyWrapper>
  );
};

export default MainPageBody;
