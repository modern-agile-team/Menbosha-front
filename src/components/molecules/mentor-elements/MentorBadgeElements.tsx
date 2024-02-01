import { MentorBadgeType } from '@/types/mentor';
import * as S from './styled';

const MentorBadgeElement = ({ badgeId, createdAt }: MentorBadgeType) => {
  return (
    <S.BadgeBox>
      <div>{badgeId}</div>
      <div>{createdAt}</div>
    </S.BadgeBox>
  );
};

export default MentorBadgeElement;
