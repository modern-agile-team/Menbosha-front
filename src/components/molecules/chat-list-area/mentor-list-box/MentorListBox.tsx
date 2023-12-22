import React, { useState } from 'react';
import * as S from './styled';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { MentorInfoAtom } from '@/recoil/atoms/MentorInfoAtom';
import { MentorInfoType } from '@/components/templates/ChatPageTemplate';
// import { getMentorInfoSelector } from '@/recoil/selectors/MentorInfoSelector';

const MentorListBox = () => {
  // const MentorInfo = useRecoilValue<MentorInfoType[]>(getMentorInfoSelector);
  const MentorInfo = useRecoilValue<MentorInfoType[]>(MentorInfoAtom);
  const [expandedStates, setExpandedStates] = useState<{
    [key: number]: boolean;
  }>({});

  const handleMentorClick = (mentorId: number) => {
    setExpandedStates((prevStates) => ({
      ...prevStates,
      [mentorId]: !prevStates[mentorId] || false,
    }));
  };

  return (
    <S.ListContainer>
      {MentorInfo.map((mentor) => (
        <S.ListArea
          key={mentor.id}
          onClick={() => handleMentorClick(mentor.id)}
          isExpanded={expandedStates[mentor.id]}>
          <S.MentorInfoArea key={mentor.id}>
            <S.MentorInfoLeft>
              <S.MentorImage isExpanded={expandedStates[mentor.id]}>
                {expandedStates[mentor.id] ? (
                  <Image
                    src="/userIcon-black.svg"
                    alt="MentorIcon"
                    width="24"
                    height="24"
                  />
                ) : (
                  <Image
                    src="/UserIcon.svg"
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
                src="/UserIcon-black.svg"
                alt="ChatIcon"
                width="36"
                height="36"
              />
              <Image
                src="/ChatIcon-black.svg"
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
