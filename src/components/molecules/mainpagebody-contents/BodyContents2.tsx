import React from 'react';
import * as S from './styled';

const BodyContents2 = () => {
  return (
    <S.MainContentsContainer2>
      <S.MainContents2Left src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/mainLeaf.svg" />
      <S.MainContents2Right>
        <span
          style={{
            fontSize: '4em',
            fontWeight: '700',
            marginBottom: '2vh',
          }}>
          {/* 아니 이거왜그런지 모르겠는데 이 부분 span태그만 css코드가 안먹네요;; */}
          바로 해결하는 멘토링.
        </span>
        <div>
          멘보샤는 질문 - 채팅 - 해결이라는 직관적이고 빠른 시스템으로 문제를
          해결하는데 소요되는 시간을 많이 단축시킬 수 있습니다. 마감 시간이
          다가올 때, 내일 당장 무언가를 해야할 때 멘보샤를 통해 빠르게 답변을
          받아보세요.
        </div>
        <S.MainContents2RightBottom />
      </S.MainContents2Right>
    </S.MainContentsContainer2>
  );
};

export default BodyContents2;
