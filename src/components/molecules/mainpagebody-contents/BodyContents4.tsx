import React from 'react';
import * as S from './styled';
import CategoryMarquee from '@/components/organisms/mainpage-body/marquee/CategoryMarquee';

const BodyContents4 = () => {
  return (
    <S.MainContentsContainer4>
      <S.MainContentsTitleArea4>
        <S.MainContents4Left src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/mainLeaf.svg" />
        <S.MainContents4Right>
          <div>세상의 모든 것을 다루다.</div>
          <div>
            가벼운 취미에 대한 질문부터 내 미래의 전공에 대한 질문까지. 멘보샤는
            모든 분야를 다루기 때문에, 모든 것을 해결할 수 있습니다.
          </div>
        </S.MainContents4Right>
      </S.MainContentsTitleArea4>
      <CategoryMarquee />
    </S.MainContentsContainer4>
  );
};

export default BodyContents4;
