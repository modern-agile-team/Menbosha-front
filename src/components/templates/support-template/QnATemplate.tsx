import { ContainerWrapper } from '@/components/common/globalStyled/styled';
import MainPageHeader from '@/components/common/header/MainPageHeader';
import * as S from './styled';
import { useEffect, useState } from 'react';
import {
  AskElementsPropsType,
  AskElementsType,
  AskListType,
} from '@/types/support';
import SupportComboBox from '@/components/organisms/support-combo-box/SupportComboBox';
import { useRouter } from 'next/router';
import MainPageFooter from '@/components/common/footer/Footer';
//질문 리스트
const askList: AskListType[] = [
  {
    id: 1,
    name: '공통',
  },
  {
    id: 2,
    name: '멘토',
  },
  {
    id: 3,
    name: '멘티',
  },
  {
    id: 4,
    name: '계정관리',
  },
  {
    id: 5,
    name: '신고하기',
  },
  {
    id: 6,
    name: '기타',
  },
];
//각 리스트별 개별사항
const askElements: AskElementsType[] = [
  {
    id: 1,
    name: '공통',
    list: [
      {
        id: 1,
        title: '채팅은 왜 있는건가요?',
        description:
          '채팅은 멘토와 멘티가 소통하기 위해 존재합니다. 모르는게 있다면 멘토에게 채팅을 보내보세요.',
      },
      {
        id: 2,
        title: '핸드폰에서 화면이 깨져요',
        description:
          '죄송하지만 아직 휴대폰에 대한 최적화 작업이 이루어 지지 않았습니다. 노트북이나, 컴퓨터를 이용해 접속해 주시면 감사하겠습니다.',
      },
      {
        id: 3,
        title: '멘보샤는 어떤 의미인가요?',
        description:
          '새우를 그냥 튀긴 것보다 양쪽에 빵을 붙여 튀겨서 더 맛있게 만드는 것처럼 서로가 서로에게 빵과 새우의 존재가 될 수 있도록 도와주는 것을 목표로하는 사이트입니다.',
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
      {
        id: 3,
        title: '멘토를 하면 무엇이 좋나요?',
        description:
          '멘토를 진행하시면, 후기로 남겨진 체크리스트롤 통해서 랭크를 올릴 수 있습니다. 랭크를 올려서 주변지인들에게 자랑해 보세요.',
      },
      {
        id: 4,
        title: '멘토를 하려면 어떻게 해야 하나요?',
        description:
          '본인 프로필 설정에들어가 멘토를 체크로 설정해주시면, 모두에게 멘토로 보일 수 있습니다. 단, 멘토로 선택한 순간 멘토리스트로 모두에게 보일 수 있다는 점 인지하시길 바랍니다.',
      },
    ],
  },
  {
    id: 3,
    name: '멘티',
    list: [
      {
        id: 1,
        title: '어떻게 도움을 요청해야 하나요?',
        description:
          '"도와주세요 게시판"에 가서 도움이 필요한 새로운 글을 작성해보세요. 멘토들이 "도와줄게요 댓글"을 달아줄 거예요.',
      },
      {
        id: 2,
        title: '멘토와 채팅은 어떻게 하나요?',
        description:
          '본인이 올린 "도와주세요 게시글"에 달린 댓글을 통해서 채팅을 시작하거나, "멘토 게시글"을 통해서 어떤 멘토인지 파악하고, "멘토 프로필"에서 멘토와 채팅을 시작해 보세요.',
      },
      {
        id: 3,
        title: '멘티는 어떻게 하는건가요?',
        description:
          '최초 로그인 시 기본적으로 멘티로 설정됩니다. 만약 멘토로 설정되어있다면, 본인 프로필 > 프로필 설정 > 멘토에서 멘티로 변경하시면 됩니다.',
      },
      {
        id: 4,
        title: '도움이 오질 않아요. 어떻게 해야 하나요?',
        description:
          '본인의 도와주세요 게시글에는 끌어올리기 기능이 존재합니다. 해당 기능을 사용해서 본인의 게시글의 최신상태를 유지하세요.',
      },
      {
        id: 5,
        title: '전문적이지 않은 질문을 해도 되나요?',
        description:
          '저희 사이트는 모두가 멘토, 멘티가 될 수 있습니다. 궁금한게 있다면 편하게 물어보고, 조금이라도 알고계신게 있다면 다른 사람들에게 공유해보세요.',
      },
      {
        id: 6,
        title: '멘토에서 멘티로 전환해도 칭호/뱃지가 남아있나요?',
        description:
          '칭호/뱃지는 계정별로 유지가 됩니다. 멘토에서 멘티로 전환한다고해서 사라지지 않습니다. 단, 칭호를 올리기 위해서는 멘토로 활동해 후기를 받아야 합니다.',
      },
    ],
  },
  {
    id: 4,
    name: '계정관리',
    list: [
      {
        id: 1,
        title: '회원가입을 어떻게 하나요?',
        description:
          '저희 사이트 자체적인 로그인/회원가입 서비스는 지원하지 않고 있습니다. 하지만, 소셜로그인을 통해서 로그인이 가능합니다.',
      },
      {
        id: 2,
        title: '회원탈퇴는 어떻게 하나요?',
        description:
          '고객지원 > 회원탈퇴 > 회원탈퇴 진행 회원탈퇴 후 30일 후 모든 정보가 제거됩니다.',
      },
      {
        id: 3,
        title: '회원탈퇴 하면 다시 계정 복구 할 수 있나요?',
        description:
          '회원탈퇴 후 30일 이전에 다시 로그인하면 계정 복구가 완료됩니다.',
      },
    ],
  },
  {
    id: 5,
    name: '신고하기',
    list: [
      {
        id: 1,
        title: '신고는 어떻게 하나요?',
        description:
          '현재 개발중인 단계에 있습니다. 신속하게 끝낼 수 있도록 노력하겠습니다.',
      },
    ],
  },
  {
    id: 6,
    name: '기타',
    list: [
      {
        id: 1,
        title: '약관은 어디서 확인하나요?',
        description:
          '약관은 고객지원 > 이용약관 페이지를 이용하거나, 사이트 하단의 이용약관으로 이동하는 링크를 클릭하시면 됩니다.',
      },
      {
        id: 2,
        title: '개인정보 처리방침은 어디서 확인하나요?',
        description:
          '개인정보 처리방침은 고객지원 > 개인청보처리 페이지를 이용하거나, 사이트 하단의 개인정보처림방침으로 이동하는 링크를 클릭하시면 됩니다.',
      },
      {
        id: 3,
        title: '사이트에 오류사항이 있어요',
        description:
          '사이트 오류 발생시 menbosha.kr@gmail.com 해당 이메일로 연락주시면 신속하게 처리하겠습니다.',
      },
    ],
  },
];
const QnATemplate = () => {
  const router = useRouter();
  const [ask, setAsk] = useState({
    num: 0,
    name: '',
  });
  const [askElement, setAskElement] = useState<AskElementsType['list']>([]);

  const handleQnAList = (num: number) => {
    setAskElement([]);
    const askTemp = askElements.find((data) => data.id === num);
    const askName = askList.find((data) => data.id === num)?.name;
    askName &&
      setAsk((prev) => {
        return {
          ...prev,
          num: num,
          name: askName,
        };
      });
    askTemp !== undefined && setAskElement([...askTemp.list]);
  };

  useEffect(() => {
    router.isReady &&
      setAskElement([...askElements[Number(router.query.elementNum) - 1].list]);
    router.isReady &&
      setAsk((prev) => {
        return {
          ...prev,
          num: Number(router.query.elementNum),
          name: String(router.query.QnAListElement),
        };
      });
  }, []);

  return (
    <div>
      <ContainerWrapper>
        <MainPageHeader />
        <S.QnAContainer>
          <div>자주하는 질문</div>
          <S.QnAContentNListWrapper>
            <S.ListContainer>
              {askList.map((data) => {
                return (
                  <div>
                    <div onClick={() => handleQnAList(data.id)}>
                      {data.name}
                    </div>
                  </div>
                );
              })}
            </S.ListContainer>
            <S.ContentsContainer>
              <div>{ask.name}</div>
              <div>
                {askElement.map((data) => {
                  const temp: AskElementsPropsType = {
                    id: data.id,
                    title: data.title,
                    description: data.description,
                  };
                  return <SupportComboBox {...temp} />;
                })}
              </div>
            </S.ContentsContainer>
          </S.QnAContentNListWrapper>
        </S.QnAContainer>
      </ContainerWrapper>
      <MainPageFooter color={true} />
    </div>
  );
};

export default QnATemplate;
