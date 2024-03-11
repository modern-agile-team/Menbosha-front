import React, { useEffect, useState } from 'react';
import * as S from './styled';
import Link from 'next/link';
import Image from 'next/image';
import useModal from '@/hooks/useModal';
import LoginModal from '@/components/organisms/auth/LoginModal';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';
import { useRouter } from 'next/router';
import AUTH from '@/apis/oauth';

const id = 'home'; //초기값 -> 후에 변동 예정

const MainPageHeader = () => {
  const router = useRouter();
  const isLogin = useRecoilValue(LoginStateAtom);
  const { isOpenModal: beforeModal, handleModal: handleBeforeModal } =
    useModal();
  const [provider, setProvider] = useState('');
  const setLoginState = useSetRecoilState(LoginStateAtom);
  const [isSide, setIsSide] = useState(false);

  const handleLogoutApi = async () => {
    await AUTH.handleLogout(provider);
    window.sessionStorage.removeItem('accessToken');
    window.sessionStorage.removeItem('refreshToken');
    window.sessionStorage.removeItem('provider');
    setLoginState(false);
    router.push(`/main`);
  };

  useEffect(() => {
    const provider = window.sessionStorage.getItem('provider');
    provider && setProvider(provider);
  }, []);

  /**사이드바 핸들러 */
  const handleSideButton = () => {
    setIsSide(!isSide);
  };

  //스크롤시 사이드 바 닫음
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY < 0;
      setIsSide(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <S.HeaderContainer>
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
          <Link href={`/mentor?filterId=1`}>
            <span>멘토 찾기</span>
          </Link>
          <Link href={`/mentor/board?filterId=1`}>
            <span>멘토 게시글</span>
          </Link>
          <Link href={`/help?filterId=1`}>
            <span>도와주세요</span>
          </Link>
          <Link href={`/support`}>
            <span>고객지원</span>
          </Link>
        </S.NavigateBox>
        <S.IconBox>
          {isLogin ? (
            <div>
              <Link
                href={{
                  pathname: `/chat/${id}`,
                }}>
                <Image
                  src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/ChatIcon-orange.svg"
                  alt="ChatIcon"
                  width="24"
                  height="24"
                  style={{ marginRight: 30 }}
                />
              </Link>
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
            <Image
              src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/sign-inBtn.svg"
              alt="sign-in"
              width={24}
              height={24}
              onClick={handleBeforeModal}
            />
          )}
          <S.SideBarButton onClick={handleSideButton} isSide={isSide}>
            <span></span>
            <span></span>
            <span></span>
          </S.SideBarButton>
          {beforeModal && (
            <LoginModal
              show={beforeModal}
              hide={handleBeforeModal}></LoginModal>
          )}
        </S.IconBox>
      </S.HeaderArea>
      <S.SideArea>
        <S.SideBarContainer isSide={isSide}>
          <S.SideBarLogoContainer>
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
            <div onClick={handleSideButton}>X</div>
          </S.SideBarLogoContainer>
          <S.SideBarNavigateContainer>
            <Link href={`/mentor?filterId=1`}>
              <span>멘토 찾기</span>
            </Link>
            <Link href={`/mentor/board?filterId=1`}>
              <span>멘토 게시글</span>
            </Link>
            <Link href={`/help?filterId=1`}>
              <span>도와주세요</span>
            </Link>
            <Link href={`/support`}>
              <span>고객지원</span>
            </Link>
            {isLogin ? (
              <div>
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
              <Image
                src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/sign-inBtn.svg"
                alt="sign-in"
                width={24}
                height={24}
                onClick={handleBeforeModal}
              />
            )}
          </S.SideBarNavigateContainer>
        </S.SideBarContainer>
        {isSide && <S.SideBarBackBg onClick={handleSideButton} />}
      </S.SideArea>
    </S.HeaderContainer>
  );
};

export default MainPageHeader;
