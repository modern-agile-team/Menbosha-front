import {
  ContainerWrapper,
  LinkBox,
} from '@/components/common/globalStyled/styled';
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
            <Link
              href={{
                pathname: `/support/QnA`,
                query: {
                  elementNum: 1,
                  QnAListElement: '공통',
                },
              }}>
              <img
                src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/support/qnaIcon.svg"
                alt="자주하는질문 아이콘"
              />
              <div>자주하는 질문</div>
              <div>
                <S.HelpLabelBox>도움말보기</S.HelpLabelBox>
              </div>
            </Link>
            <Link
              href={{
                pathname: `/support/QnA`,
                query: {
                  elementNum: 2,
                  QnAListElement: '멘토',
                },
              }}>
              <img
                src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/support/mentoNmenteeIcon.svg"
                alt="멘토 아이콘"
              />
              <div>멘토</div>
              <div>
                <S.HelpLabelBox>도움말보기</S.HelpLabelBox>
              </div>
            </Link>
            <Link
              href={{
                pathname: `/support/QnA`,
                query: {
                  elementNum: 3,
                  QnAListElement: '멘티',
                },
              }}>
              <img
                src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/support/mentoNmenteeIcon.svg"
                alt="멘티 아이콘"
              />
              <div>멘티</div>
              <div>
                <S.HelpLabelBox>도움말보기</S.HelpLabelBox>
              </div>
            </Link>
            <Link
              href={{
                pathname: `/support/QnA`,
                query: {
                  elementNum: 5,
                  QnAListElement: '신고하기',
                },
              }}>
              <img
                src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/support/reportSupIcon.svg"
                alt="신고하기 아이콘"
              />
              <div>신고하기</div>
              <div>
                <S.HelpLabelBox>도움말보기</S.HelpLabelBox>
              </div>
            </Link>
          </S.SupportButtonContainer>
          <S.SupportEtcContainer>
            <div>기타</div>
            <LinkBox href={`/support/terms-conditions`}>
              <S.SupportElementBox>이용약관</S.SupportElementBox>
              <S.ArrowIcon></S.ArrowIcon>
            </LinkBox>
            <LinkBox href={`/support/privacy-policy`}>
              <S.SupportElementBox>개인정보 처리</S.SupportElementBox>
              <S.ArrowIcon></S.ArrowIcon>
            </LinkBox>
            <LinkBox href={`/support/withdrawal`}>
              <S.SupportElementBox>회원탈퇴</S.SupportElementBox>
              <S.ArrowIcon></S.ArrowIcon>
            </LinkBox>
          </S.SupportEtcContainer>
        </S.SupportContainer>
      </ContainerWrapper>
    </div>
  );
};

export default SupportTemplate;
