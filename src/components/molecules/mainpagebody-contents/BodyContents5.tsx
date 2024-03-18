import React, { useEffect, useState } from 'react';
import * as S from './styled';
import ScrollToTopButton from '@/components/common/scroll-to-top/ScrollToTopButton';
import useModal from '@/hooks/useModal';
import { useRecoilValue } from 'recoil';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';
import LoginModal from '@/components/organisms/auth/LoginModal';
import { useRouter } from 'next/router';

const BodyContents5 = () => {
  const { isOpenModal, handleModal } = useModal();
  const isLogin = useRecoilValue(LoginStateAtom);
  const router = useRouter();

  const handleRouteMypage = () => {
    router.push('/mypage');
  };

  return (
    <S.MainContentsContainer5>
      <S.MainContentsTitleArea5>
        <S.MainContents5Left>
          <span>그럼, 시작해볼까요?</span>
          <div>
            멘토와 멘티, 어떤 것이라도 저희는 환영합니다. 멘보샤에서 여러분의
            능력을 마음껏 펼쳐주세요.
          </div>
        </S.MainContents5Left>
        {!isLogin ? (
          <S.GoToRouteBox>
            <img
              onClick={handleModal}
              src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/sign-inBtn.svg"
              alt="SignIn"
            />
            <div>로그인 하러가기</div>
          </S.GoToRouteBox>
        ) : (
          <S.GoToRouteBox onClick={handleRouteMypage}>
            <img
              src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/User-orange.svg"
              alt="UserIcon"
            />
            <div>프로필 수정하러 가기</div>
          </S.GoToRouteBox>
        )}
        {isOpenModal && <LoginModal show={isOpenModal} hide={handleModal} />}
      </S.MainContentsTitleArea5>
    </S.MainContentsContainer5>
  );
};

export default BodyContents5;
