import React from 'react';
import * as S from './styled';

const BodyContents3 = () => {
  return (
    <S.MainContentsContainer3>
      <S.MainContents3Left src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/mainLeaf.svg" />
      <S.MainContents3Right>
        <div>가볍지만 체계적으로.</div>
        <div>
          단순하고 가벼운 시스템에서도 사소한 사고가 발생하지 않도록 체계적인
          시스템을 구축했습니다. 나쁜 경험이 없도록 최선을 다하는 멘보샤입니다.
        </div>
        <S.MainContents3InfoContainer>
          <S.InfoBox>
            <S.InfoTitleBox>
              원활한 의사소통을 위한
              <br /> 선택적 채팅 시스템
            </S.InfoTitleBox>
            <S.InfoTextBox>
              글만 쓰고 기다리기엔 답답할 때, 바로 멘토와 1대1 채팅을 시작할 수
              있는 시스템. 불필요한 과정을 제외해 서로의 이해 관계를 쉽게 보충할
              수 있습니다.
            </S.InfoTextBox>
          </S.InfoBox>
          <S.InfoBox>
            <S.InfoTitleBox>
              멘토가 마음에 들었다면?
              <br /> 채팅 종료 후 리뷰 진행
            </S.InfoTitleBox>
            <S.InfoTextBox>
              마음에 드는 멘토와 대화를 나눈 후, 채팅을 종료하면 리뷰가 바로
              진행됩니다. 간단한 카테고리만 선택해도 좋고, 더욱 마음에 들었다면
              짧은 글을 남겨주세요.
            </S.InfoTextBox>
          </S.InfoBox>
          <S.InfoBox>
            <S.InfoTitleBox>
              멘토로서 신뢰도를 얻을 수<br /> 있는 랭크 표시 시스템
            </S.InfoTitleBox>
            <S.InfoTextBox>
              복잡한 리뷰도 신뢰도에 중요한 영향이 있지만, 이를 종합해 자신이
              믿을만 한 사람인지 한눈에 볼 수 있도록 그래픽으로 표시하는
              시스템을 도입했습니다.
            </S.InfoTextBox>
          </S.InfoBox>
          <S.InfoBox>
            <S.InfoTitleBox>
              알려주기만 하면 뭐해?
              <br /> 최고의 멘토에 대한 보상
            </S.InfoTitleBox>
            <S.InfoTextBox>
              멘보샤의 특성상 멘토들은 멘티를 많이 가르쳐도 보상이 적습니다.
              달마다 최고의 멘토를 가려내 멘보샤 측에서 보상을 제공합니다.
            </S.InfoTextBox>
          </S.InfoBox>
        </S.MainContents3InfoContainer>
      </S.MainContents3Right>
    </S.MainContentsContainer3>
  );
};

export default BodyContents3;
