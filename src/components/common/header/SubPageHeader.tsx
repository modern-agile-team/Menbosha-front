import React, { useState } from 'react';
import * as S from './styled';
import Link from 'next/link';
import Image from 'next/image';
import useModal from '@/hooks/useModal';
import LoginModal from '@/components/organisms/auth/LoginModal';
import { useRecoilState } from 'recoil';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';
import AfterLoginModal from '@/components/organisms/auth/AfterLoginModal';

const id = 0; //초기값 -> 후에 변동 예정

const SubPageHeader = () => {
  const [isLogin, setLogin] = useRecoilState(LoginStateAtom);
  const { isOpenModal: afterModal, handleModal: handleAfterModal } = useModal();
  const { isOpenModal: beforeModal, handleModal: handleBeforeModal } =
    useModal();
  const headerElements = ['멘토', '멘티', '고객 지원', '설정'];
  const translationElements: Record<string, string> = {
    멘토: 'mentor',
    멘티: 'help',
    '고객 지원': 'support',
    설정: 'setting',
  };
  return (
    <S.HeaderContainer style={{ marginTop: '20px' }}>
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
          {headerElements.map((element, index) => (
            <Link key={index} href={`/${translationElements[element]}`}>
              <span>{element}</span>
            </Link>
          ))}
        </S.NavigateBox>
        <S.IconBox>
          <Link
            href={{
              pathname: `/chat/${id}`,
              query: { id: 0 },
            }}>
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

export default SubPageHeader;
