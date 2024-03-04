import { MentorBadgeType } from '@/types/mentor';
import * as S from './styled';
import { useEffect, useState } from 'react';
import { badge_list } from '@/components/common/badge-list/badge';

const MentorBadgeElement = ({ badgeId, createdAt }: MentorBadgeType) => {
  const [getBadge, setBadge] = useState('');

  const getBadgeElement = () => {
    const temp = badge_list.find((data) => {
      if (data.id === badgeId) {
        return data.image;
      }
    });
    console.log(temp);
    temp && setBadge(temp.image);
  };

  useEffect(() => {
    getBadgeElement();
  }, []);

  return (
    <S.BadgeBox>
      <img src={getBadge} alt={`뱃지${badgeId}`} />
    </S.BadgeBox>
  );
};

export default MentorBadgeElement;
