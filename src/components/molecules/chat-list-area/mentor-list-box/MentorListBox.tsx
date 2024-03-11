import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './styled';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import Link from 'next/link';
import useChatRoomCreate from '@/hooks/useCreateRoom';
import { handleChatIconClickType } from '@/types/chat';
import { ChatRoomListAtom } from '@/recoil/atoms/ChatRoomListAtom';
import CHAT from '@/apis/chat';
import { MentorListType, MentorPaginationParamsType } from '@/types/mentor';
import MENTORS from '@/apis/mentors';

const MentorListBox = () => {
  const [getMentorList, setGetMentorList] = useState<
    MentorListType['userWithImageAndIntroDtos']
  >([]);
  const [expandedStates, setExpandedStates] = useState<{
    [key: number]: boolean;
  }>({});
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const obsRef = useRef<HTMLDivElement>(null); // 옵저버 state
  const [load, setLoad] = useState(false);
  const preventRef = useRef(true); // 옵저버 중복 방지
  const { handleCreateChatRoom, isLoading, error } = useChatRoomCreate();
  const [chatRoomList, setChatRoomList] = useRecoilState(ChatRoomListAtom);
  const pageSize = 100;

  // 옵저버 생성
  useEffect(() => {
    const observer = new IntersectionObserver(handleObs, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, [obsRef, getMentorList]);

  // 무한 스크롤 로드
  useEffect(() => {
    getMentorListApi();
  }, [page]);

  const handleObs = (entries: any) => {
    const target = entries[0];
    if (target.isIntersecting) {
      //옵저버 중복 실행 방지
      preventRef.current = false; //옵저버 중복 실행 방지
      setPage((prev) => prev + 1); //페이지 값 증가
    }
  };

  const getMentorListApi = useCallback(async () => {
    const params: MentorPaginationParamsType = {
      page: page,
      pageSize: 10,
      activityCategoryId: 1,
      orderField: 'id',
      sortOrder: 'DESC',
    };
    setLoad(true);
    if (page <= totalPage) {
      const response = await MENTORS.getMentorPagination(params);
      setGetMentorList((prev: any) => [
        ...prev,
        ...response.userWithImageAndIntroDtos,
      ]);
      setTotalPage(response.lastPage);
    }
    setLoad(false);
  }, [page]);

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
    const res = await CHAT.getChatRoomList(page, pageSize);
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
                  <img src={`${mentor.userImage.imageUrl}`} alt="MentorIcon" />
                ) : (
                  <img src={`${mentor.userImage.imageUrl}`} alt="MentorIcon" />
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
                  {mentor.userIntro.shortIntro}
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
