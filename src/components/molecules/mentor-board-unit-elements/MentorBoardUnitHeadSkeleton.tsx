import * as S from './style';

import SkeletonUI from '@/components/common/skeletonUI/SkeletonUI';

const MentorBoardUnitHeadSkeleton = () => {
  return (
    <div>
      <S.MentorBoardTitleInfo>
        <SkeletonUI width="80%" height="1.9vh" count={1} />
      </S.MentorBoardTitleInfo>
      <S.MentorBoardOwnerUser>
        <SkeletonUI width="51px" height="5vh" count={1} />
        <S.HeadProfile>
          <SkeletonUI width="150px" height="1.4vh" count={1} />
        </S.HeadProfile>
      </S.MentorBoardOwnerUser>
    </div>
  );
};

export default MentorBoardUnitHeadSkeleton;
