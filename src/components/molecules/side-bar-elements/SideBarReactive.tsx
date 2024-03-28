import Image from 'next/image';
import * as S from './styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';
import useModal from '@/hooks/useModal';
import { useEffect, useState } from 'react';
import { ButtonBox } from '@/components/common/globalStyled/styled';

interface SideBarType {
  handleLogoutApi: () => void;
  handleSideButton: () => void;
  isSide: boolean;
  provider: string;
}

const SideBarReactive = ({
  handleLogoutApi,
  handleSideButton,
  isSide,
}: SideBarType) => {
  const router = useRouter();
  const [isLogin, setLoginState] = useRecoilState(LoginStateAtom);
  const { isOpenModal: beforeModal, handleModal: handleBeforeModal } =
    useModal();

  return (
    <S.SideArea>
      <S.SideBarContainer isSide={isSide}>
        <S.SideBarLogoContainer>
          <Link
            href={{
              pathname: `/`,
            }}>
            <Image
              src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/MainLogo.svg"
              alt="LogoIcon"
              width={162}
              height={47}
            />
          </Link>
          <ButtonBox onClick={handleSideButton}>X</ButtonBox>
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
                  pathname: `/chat/home`,
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
  );
};

export default SideBarReactive;
