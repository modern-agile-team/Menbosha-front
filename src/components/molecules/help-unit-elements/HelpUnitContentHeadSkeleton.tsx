import * as S from './styled';
import SkeletonUI from '@/components/common/skeletonUI/SkeletonUI';

const HelpUnitContentHeadSkeleton = () => {
  return (
    <S.HelpHeadContainer>
      <div>
        <SkeletonUI width="46vw" height="15px" count={1} />
        <br />
      </div>
      <div>
        <SkeletonUI width="51px" height="51px" count={1} />
        <S.UserInfoBox>
          <SkeletonUI width="100%" height="10px" count={1} />
          <div>
            <SkeletonUI width="100px" height="10px" count={1} />
          </div>
        </S.UserInfoBox>
      </div>
    </S.HelpHeadContainer>
  );
};

export default HelpUnitContentHeadSkeleton;
