import React, { useState } from 'react';
import * as S from './styled';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { getMentorInfoSelector } from '@/recoil/selectors/MentorInfoSelector';

type MentorInfoType = {
  id: number;
  name: string;
  image: string;
  mainField: string;
};

const MentorListBox = () => {
  const MentorInfo = useRecoilValue<MentorInfoType[]>(getMentorInfoSelector);
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
          {expandedStates[mentor.id] && <div></div>}
        </S.ListArea>
      ))}
    </S.ListContainer>
  );
};

export default MentorListBox;
