import { ContainerWrapper } from '@/components/common/globalStyled/styled';
import MainPageHeader from '@/components/common/header/MainPageHeader';
import Image from 'next/image';
import styled from 'styled-components';

const Custom404 = () => {
  return (
    <div>
      <MainPageHeader />
      <NotFountContainer>
        <Image
          src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/logo404.svg"
          width={250}
          height={250}
          alt="404로고"
        />
        <div>죄송합니다. 해당 페이지를 찾을 수 없습니다.</div>
        <div>
          <div>
            찾으시려는 페이지의 주소가 잘못 입력되었거나, 주소 변경 혹은 삭제로
            인해 사용하실 수 없습니다.
          </div>
          <div>입력하신 페이지 주소가 정확한지 확인해 주십시오.</div>
        </div>
      </NotFountContainer>
    </div>
  );
};

export default Custom404;

const NotFountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 8vh 0px;
  //죄송 문구
  & > :nth-child(2) {
    font-size: 2em; //48px
    font-weight: 700; //Pretendard-Bold
    color: rgba(0, 0, 0, 0.75);
    margin: 2vh 0px;
  }
  & > :nth-child(3) {
    font-size: 0.84em; //20.16px
    font-weight: 700; //Pretendard-Bold
    line-height: 150%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
