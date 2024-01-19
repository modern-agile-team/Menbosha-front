import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './styled';
import Image from 'next/image';
import { MentorInfoAtom } from '@/recoil/atoms/MentorInfoAtom';
import { MentorInfoType } from '@/types/chat';
import USER from '@/apis/user';
import { useRecoilState } from 'recoil';
import Link from 'next/link';
import useChatRoomCreate from '@/hooks/useCreateRoom';
import { handleChatIconClickType } from '@/types/chat';
import { ChatRoomListAtom } from '@/recoil/atoms/ChatRoomListAtom';
import CHAT from '@/apis/chatApi/chat';

const MentorListBox = () => {
  const [getMentorList, setGetMentorList] =
    useRecoilState<MentorInfoType[]>(MentorInfoAtom);
  const [expandedStates, setExpandedStates] = useState<{
    [key: number]: boolean;
  }>({});
  const [totalPage, setTotalPage] = useState(0);
  const [load, setLoad] = useState(false);
  const obsRef = useRef<HTMLDivElement>(null); // 옵저버 state
  const preventRef = useRef(true); // 옵저버 중복 방지
  const { handleCreateChatRoom, isLoading, error } = useChatRoomCreate();
  const [chatRoomList, setChatRoomList] = useRecoilState(ChatRoomListAtom);

  // 옵저버 생성
  useEffect(() => {
    const observer = new IntersectionObserver(handleObs, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, [obsRef, getMentorList]);

  // 첫 페이지 불러오기
  useEffect(() => {
    getPage();
  }, []);

  // 무한스크롤 로드
  // useEffect(() => {
  //   getMentorListApi();
  // }, [totalPage]);

  const handleObs = (entries: any) => {
    const target = entries[0];
    if (target.isIntersecting) {
      preventRef.current = false; // 옵저버 중복 실행 방지
      setTotalPage((prev) => prev - 1);
    }
  };

  // 전체 페이지 수 불러오는 api
  const getPage = useCallback(async () => {
    const response = await USER.getMentorListPage();
    setTotalPage(response.totalPage);
  }, []);

  // 옵저버 확인 시 다음 리스트 불러오는 api
  const getMentorListApi = useCallback(async () => {
    setLoad(true); // 로드 시작
    if (totalPage > 0) {
      const result = await USER.getMentorList(3, totalPage);
      const reverseArr = [...result].reverse();
      result && setGetMentorList((prev) => [...prev, ...reverseArr]);
    }
    setLoad(false); // 중복 방지
  }, [totalPage]);

  useEffect(() => {
    if (totalPage) {
      getMentorListApi();
    }
  }, [totalPage, getMentorListApi]);

  /** 멘토 박스 클릭 시 확장 */
  const handleMentorClick = (mentorId: number) => {
    setExpandedStates((prevStates) => ({
      ...prevStates,
      [mentorId]: !prevStates[mentorId] || false,
    }));
  };

  const handleChatIconClick = async ({
    mentorId,
    mentorName,
  }: handleChatIconClickType) => {
    const confirmed = window.confirm(
      `${mentorName}님과 채팅을 시작하시겠습니까?`,
    );
    if (confirmed) {
      await handleCreateChatRoom(mentorId);
      updateChatRoomListApi();
    }
  };

  const updateChatRoomListApi = async () => {
    const res = await CHAT.getChatRoomList();
    setChatRoomList(res.chatRooms);
  };

  return (
    <S.ListContainer>
      {getMentorList.map((mentor) => (
        <S.ListArea
          key={mentor.id}
          onClick={() => handleMentorClick(mentor.id)}
          isExpanded={expandedStates[mentor.id]}>
          <S.MentorInfoArea key={mentor.id}>
            <S.MentorInfoLeft>
              <S.MentorImage isExpanded={expandedStates[mentor.id]}>
                {expandedStates[mentor.id] ? (
                  <img src={mentor.userImage.imageUrl} alt="MentorIcon" />
                ) : (
                  <img src={mentor.userImage.imageUrl} alt="MentorIcon" />
                )}
              </S.MentorImage>
              <S.MentorInfoBox isExpanded={expandedStates[mentor.id]}>
                <span
                  style={{
                    fontSize: '0.65em',
                    fontWeight: '700',
                    marginBottom: '5px',
                  }}>
                  {mentor.name}
                </span>
                <span style={{ fontSize: '0.5em', fontWeight: '400' }}>
                  {mentor.userIntro.mainField}
                </span>
              </S.MentorInfoBox>
            </S.MentorInfoLeft>
          </S.MentorInfoArea>
          {expandedStates[mentor.id] && (
            <S.IconBox isExpanded={expandedStates[mentor.id]}>
              <Link href={'/mypage'}>
                <Image
                  src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/chat/User-white.svg"
                  alt="UserIcon"
                  width="36"
                  height="36"
                />
              </Link>
              <Image
                src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/chat/ChatIcon.svg"
                alt="ChatIcon"
                width="36"
                height="36"
                onClick={() =>
                  handleChatIconClick({
                    mentorId: mentor.id,
                    mentorName: mentor.name,
                  })
                }
              />
            </S.IconBox>
          )}
        </S.ListArea>
      ))}
    </S.ListContainer>
  );
};

export default MentorListBox;
