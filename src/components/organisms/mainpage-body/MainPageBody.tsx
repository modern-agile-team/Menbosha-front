import React, { useEffect, useState } from 'react';
import * as S from './styled';
import BodyContents1 from '@/components/molecules/mainpagebody-contents/BodyContents1';
import BodyContents2 from '@/components/molecules/mainpagebody-contents/BodyContents2';
import BodyContents3 from '@/components/molecules/mainpagebody-contents/BodyContents3';
import BodyContents4 from '@/components/molecules/mainpagebody-contents/BodyContents4';
import BodyContents5 from '@/components/molecules/mainpagebody-contents/BodyContents5';

const MainPageBody = () => {
  return (
    <S.BodyWrapper>
      <S.BodyContainer>
        <BodyContents1 />
        <BodyContents2 />
        <BodyContents3 />
        <S.BetweenGradation />
        <BodyContents4 />
        {/* <BodyContents5 /> */}
        <S.MainContentsContainer5>
          <S.MainContentsTitleArea5>
            <S.MainContents5Left>
              <span>그럼, 시작해볼까요?</span>
              <div>
                멘토와 멘티, 어떤 것이라도 저희는 환영합니다. 멘보샤에서
                여러분의 능력을 마음껏 펼쳐주세요.
              </div>
            </S.MainContents5Left>
            <S.MainContents5Right>
              <img
                src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/gotoup.svg"
                alt="GotoTOP"
              />
            </S.MainContents5Right>
          </S.MainContentsTitleArea5>
        </S.MainContentsContainer5>
      </S.BodyContainer>
    </S.BodyWrapper>
  );
};

export default MainPageBody;
