import { ContainerWrapper } from '@/components/common/globalStyled/styled';
import MainPageHeader from '@/components/common/header/MainPageHeader';
import * as S from './styled';

const QnATemplate = () => {
  const askData = [
    {
      id: 1,
      name: '공통',
      list: [
        {
          id: 1,
          title: '회원가입은 어떻게 이루어지나요?',
          description:
            '회원가입은 네이버, 구글, 카카오 로그인 서비스를 이용하고 있습니다. 기존 계정으로 간단히 회원가입 하실 수 있습니다. 회원가입 시 제공 받는 회원 정보는 약관 및 개인정보 보호 카테고리에 자세한 내용이 나와있으니 참고 부탁드립니다. ',
        },
        {
          id: 2,
          title: '회원탈퇴를 하고 싶어요.',
          description: '회원탈퇴는 고객지원 하단 버튼을 통해서 가능합니다.',
        },
      ],
    },
    {
      id: 2,
      name: '멘토',
      list: [
        {
          id: 1,
          title: '멘토에게 감사 인사를 남길려면 어떻게 해야하나요?',
          description:
            '멘토와 채팅하기를 끝나시면 후기 체크리스트 팝업창이 뜹니다. 후기 체크리스트 하단에 후기를 써주세요에 멘토분에게 감사인사에 대해 적어주시면 멘토 프로필에 고객님이 적으신 후기 글을 남겨집니다.',
        },
        {
          id: 2,
          title: '어떻게하면 멘티에게 도와줄게요를 남길 수 있나요?',
          description:
            '도와주세요에 가셔서 원하시는 게시글을 클릭하셔서 멘티의 게시글 맨밑 도와줄게요 아이콘을 남기시면 됩니다.',
        },
      ],
    },
  ];
  return (
    <div>
      <ContainerWrapper>
        <MainPageHeader />
        <S.QnAContainer>
          <div>자주하는 질문</div>
          <div>
            <div>
              {askData.map((data) => {
                return <div>{data.name}</div>;
              })}
            </div>
            <div>
              <div>공통</div>
              <div></div>
            </div>
          </div>
        </S.QnAContainer>
      </ContainerWrapper>
    </div>
  );
};

export default QnATemplate;
