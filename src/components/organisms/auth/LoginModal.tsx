import styled from 'styled-components';
import {
  Google,
  Kakao,
  Naver,
} from '@/components/molecules/auth-elements/AuthProvider';
import { useEffect } from 'react';
import Image from 'next/image';
import { TextBox } from '@/components/common/globalStyled/styled';

interface ModalType {
  show: boolean;
  hide: () => void;
}

const LoginModal = ({ show, hide }: ModalType) => {
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
    <div>
      <ModalWrapper>
        <ModalHeaderBox>
          <TextBox size={21}>로그인/회원가입</TextBox>
          <TextBox
            size={21}
            style={{ marginLeft: 'auto', cursor: 'pointer' }}
            onClick={hide}>
            X
          </TextBox>
        </ModalHeaderBox>
        <LogoBox>
          <Image
            src="/MenboshaLogo.png"
            alt="로고아이콘"
            width={75}
            height={68}
          />
        </LogoBox>
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
    </div>
  );
};

export default LoginModal;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #252525;
  width: 362px;
  height: 280px;
  border: 2px solid #ff9b50;
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
  padding: 24px;
  background-color: #ff9b50;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const LogoBox = styled.div`
  margin: 18px;
`;

export const OAuthBox = styled.div`
  display: flex;
  justify-content: center;
  & > * {
    margin: 24px;
  }
`;
