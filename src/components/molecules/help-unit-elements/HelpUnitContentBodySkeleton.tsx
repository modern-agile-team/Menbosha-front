import SkeletonUI from '@/components/common/skeletonUI/SkeletonUI';

const HelpUnitContentBodySkeleton = () => {
  return (
    <div>
      <SkeletonUI width="100%" height="26vh" count={1} />
      <br />
      <SkeletonUI width="80%" height="1.3vh" count={1} />
      <br />
      <SkeletonUI width="50%" height="1.3vh" count={1} />
    </div>
  );
};

export default HelpUnitContentBodySkeleton;
