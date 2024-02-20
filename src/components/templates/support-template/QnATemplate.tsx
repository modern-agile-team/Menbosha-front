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
const askElements: AskElementsType[] = [
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
  {
    id: 3,
    name: '멘티',
    list: [
      {
        id: 1,
        title: '어떻게 도움을 요청해야 하나요?',
        description: '멘티가 있어야 굴러갑니다',
      },
      {
        id: 2,
        title: '멘토와 채팅은 어떻게 하나요?',
        description:
          '도와주세요에 가셔서 원하시는 게시글을 클릭하셔서 멘티의 게시글 맨밑 도와줄게요 아이콘을 남기시면 됩니다.',
      },
      {
        id: 3,
        title: '회원탈퇴는 어떻게 하나요?',
        description:
          '도와주세요에 가셔서 원하시는 게시글을 클릭하셔서 멘티의 게시글 맨밑 도와줄게요 아이콘을 남기시면 됩니다.',
      },
      {
        id: 4,
        title: '도움이 오질 않아요. 어떻게 해야 하나요?',
        description:
          '도와주세요에 가셔서 원하시는 게시글을 클릭하셔서 멘티의 게시글 맨밑 도와줄게요 아이콘을 남기시면 됩니다.',
      },
      {
        id: 5,
        title: '전문적이지 않은 질문을 해도 되나요?',
        description: '123',
      },
      {
        id: 6,
        title: '멘토에서 멘티로 전환해도 칭호/뱃지가 남아있나요?',
        description: '321',
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
          '멘토와 채팅하기를 끝나시면 후기 체크리스트 팝업창이 뜹니다. 후기 체크리스트 하단에 후기를 써주세요에 멘토분에게 감사인사에 대해 적어주시면 멘토 프로필에 고객님이 적으신 후기 글을 남겨집니다.',
      },
      {
        id: 2,
        title: '회원탈퇴는 어떻게 하나요?',
        description:
          '도와주세요에 가셔서 원하시는 게시글을 클릭하셔서 멘티의 게시글 맨밑 도와줄게요 아이콘을 남기시면 됩니다.',
      },
      {
        id: 3,
        title: '회원탈토 하면 다시 계정 복구 할 수 있나요?',
        description:
          '도와주세요에 가셔서 원하시는 게시글을 클릭하셔서 멘티의 게시글 맨밑 도와줄게요 아이콘을 남기시면 됩니다.',
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
          '멘토와 채팅하기를 끝나시면 후기 체크리스트 팝업창이 뜹니다. 후기 체크리스트 하단에 후기를 써주세요에 멘토분에게 감사인사에 대해 적어주시면 멘토 프로필에 고객님이 적으신 후기 글을 남겨집니다.',
      },
      {
        id: 2,
        title: '불법성 게시글 및 불법 촬영물',
        description:
          '도와주세요에 가셔서 원하시는 게시글을 클릭하셔서 멘티의 게시글 맨밑 도와줄게요 아이콘을 남기시면 됩니다.',
      },
    ],
  },
  {
    id: 6,
    name: '기타',
    list: [
      {
        id: 1,
        title: '어떻게 도움을 요청해야 하나요?',
        description:
          '멘토와 채팅하기를 끝나시면 후기 체크리스트 팝업창이 뜹니다. 후기 체크리스트 하단에 후기를 써주세요에 멘토분에게 감사인사에 대해 적어주시면 멘토 프로필에 고객님이 적으신 후기 글을 남겨집니다.',
      },
      {
        id: 2,
        title: '멘토와 채팅은 어떻게 하나요?',
        description:
          '도와주세요에 가셔서 원하시는 게시글을 클릭하셔서 멘티의 게시글 맨밑 도와줄게요 아이콘을 남기시면 됩니다.',
      },
      {
        id: 3,
        title: '기타타타',
        description:
          '도와주세요에 가셔서 원하시는 게시글을 클릭하셔서 멘티의 게시글 맨밑 도와줄게요 아이콘을 남기시면 됩니다.',
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
    </div>
  );
};

export default QnATemplate;
