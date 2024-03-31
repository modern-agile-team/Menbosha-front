import styled from 'styled-components';
import {
  Google,
  Kakao,
  Naver,
} from '@/components/molecules/auth-elements/AuthProvider';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

interface ModalType {
  show: boolean;
  hide: () => void;
}

const LoginModal = ({ show, hide }: ModalType) => {
  const preventScroll = () => {
    const currentScrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = `-${currentScrollY}px`; // 현재 스크롤 위치
    document.body.style.overflowY = 'scroll';
    return currentScrollY;
  };

  /**
   * 스크롤을 허용하고, 스크롤 방지 함수에서 반환된 위치로 이동한다.
   * @param prevScrollY 스크롤 방지 함수에서 반환된 스크롤 위치
   */
  const allowScroll = (prevScrollY: number) => {
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.top = '';
    document.body.style.overflowY = '';
    window.scrollTo(0, prevScrollY);
  };

  useEffect(() => {
    const prevScrollY = preventScroll();
    return () => {
      allowScroll(prevScrollY);
    };
  }, []);

  useEffect(() => {
    const storage = globalThis?.sessionStorage;
    if (!storage) {
      return;
    }
    const previousUrl = storage.getItem('CURRENT_URL');
    storage.setItem('PREVIOUS_URL', previousUrl as string);
    storage.setItem('CURRENT_URL', globalThis.location.pathname);
  }, []);
  return (
    <>
      <ModalWrapper>
        <ModalHeaderBox>
          <div>로그인</div>
          <div onClick={hide}>X</div>
        </ModalHeaderBox>
        <OAuthBox>
          <Naver />
          <Google />
          <Kakao />
        </OAuthBox>
      </ModalWrapper>
      <Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();

          if (show) {
            hide();
          }
        }}
      />
    </>
  );
};

export default LoginModal;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 337px;
  height: 396px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10000;
  text-align: center;
  cursor: auto;
`;

export const Backdrop = styled.div`
  width: 10000px;
  height: 10000px;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: auto;
`;

export const ModalHeaderBox = styled.div`
  display: flex;
  background-color: #fff;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  //로그인 타이틀 박스
  & > :nth-child(1) {
    font-size: 24px;
    font-weight: bold;
    color: #ff772b;
    padding: 45px 0px 0px 36px;
  }
  //x 모달창 닫기 박스
  & > :nth-child(2) {
    color: #ff772b;
    cursor: pointer;
    margin: 24px 24px 0px auto;
  }
`;

export const LogoBox = styled.div`
  margin: 18px;
`;

export const OAuthBox = styled.div`
  & > * {
    margin: 24px;
  }
`;
