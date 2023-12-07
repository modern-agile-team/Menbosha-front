import styled from 'styled-components';
import { Google, Kakao, Naver } from '@/components/molecules/auth/AuthProvider';

interface ModalType {
  show: boolean;
  hide: () => void;
}

const LoginModal = ({ show, hide }: ModalType) => {
  return (
    <div>
      <ModalWrapper>
        <div>
          <div onClick={hide}>X</div>
        </div>
        <div>로고</div>
        <div>로그인</div>
        <div>
          <Naver />
          <Kakao />
          <Google />
        </div>
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
  background-color: white;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10000;
  text-align: center;
`;

export const Backdrop = styled.div`
  width: 10000px;
  height: 10000px;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
`;
