import React, {
  startTransition,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import * as S from './styled';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { MentorInfoAtom } from '@/recoil/atoms/MentorInfoAtom';
import { MentorInfoType } from '@/types/chat';
import USER from '@/apis/user';
import { stringify } from 'querystring';
import { ImageBox } from '@/components/common/globalStyled/styled';

const MentorListBox = () => {
  const MentorInfoMock = useRecoilValue<MentorInfoType[]>(MentorInfoAtom);
  const [getMentorList, setGetMentorList] = useState<MentorInfoType[]>([]);
  const [expandedStates, setExpandedStates] = useState<{
    [key: number]: boolean;
  }>({});
  const [totalPage, setTotalPage] = useState(0);
  const [load, setLoad] = useState(false);
  const obsRef = useRef<HTMLDivElement>(null); // 옵저버 state
  const preventRef = useRef(true); // 옵저버 중복 방지

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
      const result = await USER.getMentorList(4, totalPage);
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
                  <Image
                    src="/UserIcon-White.png"
                    alt="MentorIcon"
                    width="24"
                    height="24"
                  />
                ) : (
                  <Image
                    src="/UserIcon-Red.png"
                    alt="MentorIcon"
                    width="24"
                    height="24"
                  />
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
              <Image
                src="/UserIcon-White.png"
                alt="UserIcon"
                width="36"
                height="36"
              />
              <Image
                src="/ChatIcon-White.png"
                alt="ChatIcon"
                width="36"
                height="36"
              />
            </S.IconBox>
          )}
        </S.ListArea>
      ))}
    </S.ListContainer>
  );
};

export default MentorListBox;
