import { badge_list } from '@/components/common/badge-list/badge';
import { NotificationAtom } from '@/recoil/atoms/NotificationAtom';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './styled';

interface NotificationType {
  acquired: number;
}

const BadgeNotification = ({ acquired }: NotificationType) => {
  const [isNewBadge, setIsNewBadge] = useRecoilState(NotificationAtom);
  const [newBadge, setNewBadge] = useState({
    name: '',
    color: '',
  });

  useEffect(() => {
    const acquiredBadge = badge_list.find((data) => data.id === acquired);
    acquiredBadge &&
      setNewBadge(() => {
        return {
          name: acquiredBadge?.badge_name,
          color: acquiredBadge?.color,
        };
      });
    setTimeout(() => {
      setIsNewBadge(false);
    }, 3000);
  }, [acquired]);

  return (
    <S.NotificationContainer color={newBadge.color}>
      <div>새로운 칭호!!</div>
      <div>{newBadge.name}발견!</div>
      <div>새로고침 해 보세요!</div>
    </S.NotificationContainer>
  );
};

export default BadgeNotification;
