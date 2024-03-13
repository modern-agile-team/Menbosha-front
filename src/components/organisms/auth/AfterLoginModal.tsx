import styled from 'styled-components';
import {
  ButtonBox,
  FlexBox,
  LinkBox,
  TextBox,
} from '@/components/common/globalStyled/styled';
import AUTH from '@/apis/oauth';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';
import { useRouter } from 'next/router';

interface ModalType {
  show: boolean;
  hide: () => void;
}

const AfterLoginModal = ({ show, hide }: ModalType) => {
  const [provider, setProvider] = useState('');
  const [isLoginState, setLoginState] = useRecoilState(LoginStateAtom);
  const router = useRouter();

  const handleLogoutApi = async () => {
    await AUTH.handleLogout(provider);
    window.sessionStorage.removeItem('accessToken');
    window.sessionStorage.removeItem('refreshToken');
    window.sessionStorage.removeItem('provider');
    setLoginState(false);
    hide();
    router.push(`/`);
  };

  useEffect(() => {
    const provider = window.sessionStorage.getItem('provider');
    provider && setProvider(provider);
  }, []);

  return (
    <div>
      <ModalWrapper>
        <FlexBox type="flex">
          <TextBox
            size={21}
            style={{ marginLeft: 'auto', cursor: 'pointer' }}
            onClick={hide}>
            X
          </TextBox>
        </FlexBox>
        <LinkBox href={{ pathname: `/mypage` }} color="#fff">
          마이페이지
        </LinkBox>
        <ButtonBox color="#fff" onClick={handleLogoutApi}>
          로그아웃
        </ButtonBox>
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

export default AfterLoginModal;

export const ModalWrapper = styled.div`
  padding: 10px;
  position: absolute;
  top: 144px;
  transform: translate(-50%, -50%);
  background-color: #252525;
  width: 120px;
  height: 120px;
  border: 2px solid #ff9b50;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1;
  text-align: center;
  cursor: auto;
`;

export const Backdrop = styled.div`
  width: 10000px;
  height: 10000px;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0);
  cursor: auto;
`;

export const ModalHeaderBox = styled.div`
  display: flex;
  padding: 24px;
  background-color: #ff9b50;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;
