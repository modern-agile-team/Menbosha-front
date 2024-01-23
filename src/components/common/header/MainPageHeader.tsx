import React, { useEffect, useState } from 'react';
import * as S from './styled';
import Link from 'next/link';
import Image from 'next/image';
import useModal from '@/hooks/useModal';
import LoginModal from '@/components/organisms/auth/LoginModal';
import { useRecoilState } from 'recoil';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';
import { useRouter } from 'next/router';
import AUTH from '@/apis/oauth';

const id = 0; //초기값 -> 후에 변동 예정

const MainPageHeader = () => {
  const router = useRouter();
  const [isMain, setIsMain] = useState(false);
  const [isLogin, setLogin] = useRecoilState(LoginStateAtom);
  const { isOpenModal: beforeModal, handleModal: handleBeforeModal } =
    useModal();
  const { isOpenModal: mentorModal, handleModal: handleMentorModal } =
    useModal();
  const [provider, setProvider] = useState('');
  const [isLoginState, setLoginState] = useRecoilState(LoginStateAtom);

  useEffect(() => {
    setIsMain(router.pathname === '/main');
  }, [router.pathname]);

  const handleLogoutApi = async () => {
    await AUTH.handleLogout(provider);
    window.localStorage.removeItem('accessToken');
    window.localStorage.removeItem('refreshToken');
    window.localStorage.removeItem('provider');
    setLoginState(false);
    router.push(`/main`);
  };

  useEffect(() => {
    const provider = window.localStorage.getItem('provider');
    provider && setProvider(provider);
  }, []);

  return (
    <S.HeaderContainer ismain={isMain}>
      <S.HeaderArea>
        <S.LogoBox>
          <Link
            href={{
              pathname: `/main`,
            }}>
            <Image
              src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/MainLogo.svg"
              alt="LogoIcon"
              width={162}
              height={47}
            />
          </Link>
        </S.LogoBox>
        <S.NavigateBox>
          <div>
            <S.MentorNavBox onClick={handleMentorModal}>멘토</S.MentorNavBox>
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
          <Link
            href={{
              pathname: `chat/${id}`,
            }}>
            <Image
              src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/ChatIcon-orange.svg"
              alt="ChatIcon"
              width="24"
              height="24"
              style={{ marginRight: 30 }}
            />
          </Link>
          {isLogin ? (
            <div>
              <Link href={{ pathname: `/mypage` }}>
                <Image
                  src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/User-orange.svg"
                  alt="UserIcon"
                  width="24"
                  height="24"
                  style={{ marginRight: 30 }}
                />
              </Link>
              <Image
                src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/Logout.svg"
                alt="LogoutIcon"
                width="24"
                height="24"
                onClick={handleLogoutApi}
              />
            </div>
          ) : (
            <div onClick={handleBeforeModal} style={{ color: '#000000' }}>
              로그인
            </div>
          )}
          {beforeModal && (
            <LoginModal
              show={beforeModal}
              hide={handleBeforeModal}></LoginModal>
          )}
        </S.IconBox>
      </S.HeaderArea>
    </S.HeaderContainer>
  );
};

export default MainPageHeader;
