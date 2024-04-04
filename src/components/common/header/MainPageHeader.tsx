import React, { useEffect, useState } from 'react';
import * as S from './styled';
import Link from 'next/link';
import Image from 'next/image';
import useModal from '@/hooks/useModal';
import LoginModal from '@/components/organisms/auth/LoginModal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';
import { useRouter } from 'next/router';
import AUTH from '@/apis/oauth';
import { ChatContentsAtom } from '@/recoil/atoms/ChatContentsAtom';
import USER from '@/apis/user';
import { UserIdAtom } from '@/recoil/atoms/UserIdAtom';
import CHAT from '@/apis/chat';
import { ChatRoomListType } from '@/types/chat';
import { ChatRoomListAtom } from '@/recoil/atoms/ChatRoomListAtom';
import {
  FlexBox,
  ToolTipContainer,
  Tooltip,
  TooltipImage,
} from '../globalStyled/styled';
import SideBarReactive from '@/components/molecules/side-bar-elements/SideBarReactive';

const MainPageHeader = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useRecoilState(LoginStateAtom);
  const { isOpenModal: beforeModal, handleModal: handleBeforeModal } =
    useModal();
  const [provider, setProvider] = useState('');
  const [isSide, setIsSide] = useState(false);
  const [myId, setMyId] = useRecoilState(UserIdAtom);
  const [chatRoomList, setChatRoomList] =
    useRecoilState<ChatRoomListType[]>(ChatRoomListAtom);
  const chatContents = useRecoilValue(ChatContentsAtom);
  const [showNotificationIcon, setShowNotificationIcon] = useState(false);

  const handleLogoutApi = async () => {
    const logout = confirm('정말로 로그아웃하시겠습니까?');
    if (logout) {
      try {
        await AUTH.handleLogout(provider);
      } catch {
      } finally {
        window.localStorage.removeItem('accessToken');
        window.localStorage.removeItem('provider');
        setIsLogin(false);
        router.push(`/`);
      }
    }
  };
  /** 본인 id넘버 조회 api */
  const getMyIdApi = async () => {
    if (isLogin) {
      const res = await USER.getMyInfo();
      setMyId(res.id);
    }
  };

  /** 채팅룸 전체조회 api */
  const getChatRoomListApi = async () => {
    if (isLogin) {
      const page = 1;
      const pageSize = 100;
      const res = await CHAT.getChatRoomList(page, pageSize);
      setChatRoomList(res.chatRooms);
    }
  };

  useEffect(() => {
    getMyIdApi();
    getChatRoomListApi();
  }, [isLogin]);

  // 미완성
  /** unreadMessage 있을 때 채팅 알람 아이콘으로 변경 */
  // useEffect(() => {
  //   setShowNotificationIcon(true);
  // }, [chatContents]);

  useEffect(() => {
    const provider = window.localStorage.getItem('provider');
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
              pathname: `/`,
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
            <FlexBox type="flex">
              <Link
                href={{
                  pathname: `/chat/home`,
                }}>
                <ToolTipContainer hoverBox="image">
                  <TooltipImage
                    src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/ChatIcon-orange.svg"
                    alt="ChatIcon"
                    width="24"
                    height="24"
                    style={{ marginRight: 30 }}
                  />
                  <Tooltip>채팅룸</Tooltip>
                </ToolTipContainer>
              </Link>
              <Link href={{ pathname: `/mypage` }}>
                <ToolTipContainer hoverBox="image">
                  <TooltipImage
                    src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/User-orange.svg"
                    alt="UserIcon"
                    width="24"
                    height="24"
                    style={{ marginRight: 30 }}
                  />
                  <Tooltip>마이페이지</Tooltip>
                </ToolTipContainer>
              </Link>
              <ToolTipContainer hoverBox="image">
                <TooltipImage
                  src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/Logout.svg"
                  alt="LogoutIcon"
                  width="24"
                  height="24"
                  onClick={handleLogoutApi}
                />
                <Tooltip>로그아웃</Tooltip>
              </ToolTipContainer>
            </FlexBox>
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
      <SideBarReactive
        handleLogoutApi={handleLogoutApi}
        handleSideButton={handleSideButton}
        isSide={isSide}
        provider={provider}
      />
    </S.HeaderContainer>
  );
};

export default MainPageHeader;
