import * as S from './style';
import SkeletonUI from '@/components/common/skeletonUI/SkeletonUI';

const MentorBoardUnitBodySkeleton = () => {
  return (
    <S.BodyContainer>
      <SkeletonUI width="100%" height="300px" count={1} />
      <S.BodyContentBox>
        <SkeletonUI width="100%" height="15px" count={1} />
        <br />
        <SkeletonUI width="80%" height="15px" count={1} />
        <br />
        <SkeletonUI width="30%" height="15px" count={1} />
      </S.BodyContentBox>
      <S.LikeContainer>
        <img
          src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/board/emptyHeart.svg"
          alt="하트"
        />
      </S.LikeContainer>
    </S.BodyContainer>
  );
};

export default MentorBoardUnitBodySkeleton;
