import React, { useState } from 'react';
import * as S from './styled';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { MentorInfoAtom } from '@/recoil/atoms/MentorInfoAtom';
import { MentorInfoType } from '@/types/chat';

const MentorListBox = () => {
  const MentorInfoMock = useRecoilValue<MentorInfoType[]>(MentorInfoAtom);
  // const [getMentorInfo, setGetMentorInfo] = useState<MentorInfoType[]>([])
  const [expandedStates, setExpandedStates] = useState<{
    [key: number]: boolean;
  }>({});

  /** 멘토리스트 불러오는 api */
  // const getMentorListApi =

  const handleMentorClick = (mentorId: number) => {
    setExpandedStates((prevStates) => ({
      ...prevStates,
      [mentorId]: !prevStates[mentorId] || false,
    }));
  };

  return (
    <S.ListContainer>
      {MentorInfoMock.map((mentor) => (
        <S.ListArea
          key={mentor.id}
          onClick={() => handleMentorClick(mentor.id)}
          isExpanded={expandedStates[mentor.id]}>
          <S.MentorInfoArea key={mentor.id}>
            <S.MentorInfoLeft>
              <S.MentorImage isExpanded={expandedStates[mentor.id]}>
                {expandedStates[mentor.id] ? (
                  <Image
                    src="/userIcon-White.png"
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
                  {mentor.mainField}
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
