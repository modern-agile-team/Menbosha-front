import React, { useState } from 'react';
import * as S from './styled';
import Link from 'next/link';
import Image from 'next/image';
import useModal from '@/hooks/useModal';
import LoginModal from '@/components/organisms/auth/LoginModal';
import { useRecoilState } from 'recoil';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';

const id = 0; //초기값 -> 후에 변동 예정

const SubPageHeader = () => {
  const [isLogin, setLogin] = useRecoilState(LoginStateAtom);
  const { handleModal, isOpenModal } = useModal();
  const headerElements = ['멘토', '멘티', '콘텐츠', '고객 지원'];
  const translationElements: Record<string, string> = {
    멘토: 'mentor',
    멘티: 'help',
    콘텐츠: 'contents',
    '고객 지원': 'support',
  };
  return (
    <S.HeaderContainer style={{ marginTop: '20px' }}>
      <S.HeaderArea>
        <S.LogoBox>
          <Link
            href={{
              pathname: `/main`,
            }}>
            <Image src="/LogoIcon.svg" alt="LogoIcon" width="36" height="36" />
            <Image
              src="/LogoText.svg"
              alt="LogoText"
              width="110"
              height="18"
              style={{ marginBottom: '8px' }}
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
            <Image src="/ChatIcon.svg" alt="ChatIcon" width="28" height="28" />
          </Link>
          {isLogin ? (
            <Link
              href={{
                pathname: `/userpage`,
              }}>
              <Image
                src="/UserIcon.svg"
                alt="UserIcon"
                width="28"
                height="28"
              />
            </Link>
          ) : (
            <div onClick={handleModal}>로그인</div>
          )}
          {isOpenModal && (
            <LoginModal show={isOpenModal} hide={handleModal}></LoginModal>
          )}
        </S.IconBox>
      </S.HeaderArea>
    </S.HeaderContainer>
  );
};

export default SubPageHeader;
