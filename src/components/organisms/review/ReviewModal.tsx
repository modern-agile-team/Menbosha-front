import styled from 'styled-components';
import {
  Google,
  Kakao,
  Naver,
} from '@/components/molecules/auth-elements/AuthProvider';
import { useEffect } from 'react';
import CreateReview from '../review-element/CreateReview';

interface ModalType {
  show: boolean;
  hide: () => void;
  mentorId: number;
}

const ReviewModal = ({ show, hide, mentorId }: ModalType) => {
  useEffect(() => {
    if (!mentorId) {
      alert('멘토와 채팅을 시작해야 후기 작성이 가능합니다.');
      hide();
    }
  }, []);

  return (
    <>
      <ModalWrapper>
        <ModalHeaderBox>
          <div>후기 체크리스트</div>
          <div onClick={hide}>X</div>
        </ModalHeaderBox>
        <CreateReview mentorId={mentorId} />
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

export default ReviewModal;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 35vw;
  @media only all and (max-width: 800px) {
    width: 80vw;
  }
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 11000;
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
  background-color: #ff772b;
  padding: 12px;
  //로그인 타이틀 박스
  & > :nth-child(1) {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  }
  //x 모달창 닫기 박스
  & > :nth-child(2) {
    color: #fff;
    cursor: pointer;
    margin-left: auto;
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
