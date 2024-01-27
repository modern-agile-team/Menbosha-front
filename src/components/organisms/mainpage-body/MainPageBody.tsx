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
            <div>
              멘보샤는 질문 - 채팅 - 해결이라는 직관적이고 빠른 시스템으로
              문제를 해결하는데 소요되는 시간을 많이 단축시킬 수 있습니다. 마감
              시간이 다가올 때, 내일 당장 무언가를 해야할 때 멘보샤를 통해
              빠르게 답변을 받아보세요.
            </div>
            <S.MainContents2RightBottom />
          </S.MainContents2Right>
        </S.MainContentsContainer2>
        <S.MainContentsContainer3>
          <S.MainContents3Left src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/mainLeaf.svg" />
          <S.MainContents3Right>
            <span>가볍지만 체계적으로.</span>
            <div>
              단순하고 가벼운 시스템에서도 사소한 사고가 발생하지 않도록
              체계적인 시스템을 구축했습니다. 나쁜 경험이 없도록 최선을 다하는
              멘보샤입니다.
            </div>
            <S.MainContents3InfoContainer>
              <S.InfoBox>
                <span>원활한 의사소통을 위한 선택적 채팅 시스템</span>
              </S.InfoBox>
              <S.InfoBox>
                멘토가 마음에 들었다면? 채팅 종료 후 리뷰 진행
              </S.InfoBox>
              <S.InfoBox>
                멘토로서 신뢰도를 얻을 수 있는 온도 표시 시스템
              </S.InfoBox>
              <S.InfoBox>
                알려주기만 하면 뭐해? 최고의 멘토에 대한 보상
              </S.InfoBox>
            </S.MainContents3InfoContainer>
          </S.MainContents3Right>
        </S.MainContentsContainer3>
      </S.BodyContainer>
    </S.BodyWrapper>
  );
};

export default MainPageBody;
