import React, { useState } from 'react';
import * as S from './styled';
import Link from 'next/link';
import Image from 'next/image';
import useModal from '@/hooks/useModal';
import LoginModal from '@/components/organisms/auth/LoginModal';
import { useRecoilState } from 'recoil';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';
import AfterLoginModal from '@/components/organisms/auth/AfterLoginModal';
import { ButtonBox } from '../globalStyled/styled';

const id = 0; //초기값 -> 후에 변동 예정

const MainPageHeader = () => {
  const [isLogin, setLogin] = useRecoilState(LoginStateAtom);
  const { isOpenModal: beforeModal, handleModal: handleBeforeModal } =
    useModal();
  const { isOpenModal: afterModal, handleModal: handleAfterModal } = useModal();
  const { isOpenModal: mentorModal, handleModal: handleMentorModal } =
    useModal();
  return (
    <S.HeaderContainer>
      <S.HeaderArea>
        <S.LogoBox>
          <Link
            href={{
              pathname: `/main`,
            }}>
            <Image
              src="/MenboshaLogo2.png"
              alt="LogoIcon"
              width={162}
              height={47}
            />
          </Link>
        </S.LogoBox>
        <S.NavigateBox>
          <div>
            <ButtonBox color="#fff" onClick={handleMentorModal}>
              멘토
            </ButtonBox>
            <S.MentorModal isMentor={mentorModal}>
              <Link href={`/mentor`}>프로필</Link>
              <Link href={`/mentor/board`}>게시글</Link>
              <div onClick={handleMentorModal}></div>
            </S.MentorModal>
          </div>
          <Link href={`/help`}>
            <span>멘티</span>
          </Link>
          <Link href={`/support`}>
            <span>고객지원</span>
          </Link>
          <Link href={`/setting`}>
            <span>설정</span>
          </Link>
        </S.NavigateBox>
        <S.IconBox>
          <Link href={'/chat'}>
            <Image
              src="/chat/ChatIcon-Red.png"
              alt="ChatIcon"
              width="28"
              height="28"
            />
          </Link>
          {isLogin ? (
            <Image
              onClick={handleAfterModal}
              src="/UserIcon-Red.png"
              alt="UserIcon"
              width="28"
              height="28"
            />
          ) : (
            <div onClick={handleBeforeModal}>로그인</div>
          )}
          {beforeModal && (
            <LoginModal
              show={beforeModal}
              hide={handleBeforeModal}></LoginModal>
          )}
          {afterModal && (
            <AfterLoginModal show={afterModal} hide={handleAfterModal} />
          )}
        </S.IconBox>
      </S.HeaderArea>
    </S.HeaderContainer>
  );
};

export default MainPageHeader;
