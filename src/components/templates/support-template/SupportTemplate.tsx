import { ContainerWrapper } from '@/components/common/globalStyled/styled';
import MainPageHeader from '../../common/header/MainPageHeader';
import MainPageFooter from '@/components/common/footer/Footer';
import * as S from './styled';
import Link from 'next/link';

const SupportTemplate = () => {
  return (
    <div>
      <MainPageHeader />
      <ContainerWrapper>
        <S.SupportContainer>
          <S.SupportHeaderBox>
            <div>고객지원</div>
            <div>궁금한점을 빠르게 확인해보세요</div>
          </S.SupportHeaderBox>
          <S.SupportButtonContainer>
            <Link href={`/support/QnA`}>
              <img
                src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/support/qnaIcon.svg"
                alt="자주하는질문 아이콘"
              />
              <div>자주하는 질문</div>
            </Link>
            <Link href={``}>
              <img
                src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/support/mentoNmenteeIcon.svg"
                alt="멘토 멘티 아이콘"
              />
              <div>멘토 멘티</div>
            </Link>
            <Link href={``}>
              <img
                src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/support/chatSupportIcon.svg"
                alt="채팅하기 아이콘"
              />
              <div>채팅하기</div>
            </Link>
            <Link href={``}>
              <img
                src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/support/reportSupIcon.svg"
                alt="신고하기 아이콘"
              />
              <div>신고하기</div>
            </Link>
          </S.SupportButtonContainer>
          <S.SupportEtcContainer>
            <div>기타</div>
            <div>
              <S.SupportElementBox>이용약관</S.SupportElementBox>
              <div>&gt;</div>
            </div>
            <div>
              <S.SupportElementBox>개인정보 처리</S.SupportElementBox>
              <div>&gt;</div>
            </div>
            <div>
              <S.SupportElementBox>회원탈퇴</S.SupportElementBox>
              <div>&gt;</div>
            </div>
          </S.SupportEtcContainer>
        </S.SupportContainer>
      </ContainerWrapper>
    </div>
  );
};

export default SupportTemplate;
