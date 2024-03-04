import styled, { keyframes } from 'styled-components';

interface SkeletonType {
  width: string;
  height: string;
  count: number;
}

const loading = keyframes`
    from {
        left: -200px;
    }
    to {
        left: -100%;
    }
`;

const StyledSkeleton = styled.div<Partial<SkeletonType>>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: rgba(153, 153, 153, 0.5);
  box-sizing: 1px 1px 20px rgba(0, 0, 0, 2);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  margin: 0px 16px;
  & ::before {
    content: '';
    display: block;
    position: absolute;
    left: -200px;
    top: 0px;
    height: 100%;
    width: 200px;
    background: linear-gradient(
      to right,
      rgba(153, 153, 153) 0%,
      rgba(rgba(153, 153, 153, 0.5)) 40%,
      rgba(153, 153, 153) 90%
    );
    animation: ${loading} 1000ms ease-in-out infinite;
  }
`;

const SkeletonUI = ({ width, height, count }: SkeletonType) => {
  return count ? (
    [...Array(count)].map((_, idx) => {
      return (
        <StyledSkeleton
          width={width}
          height={height}
          key={idx}></StyledSkeleton>
      );
    })
  ) : (
    <StyledSkeleton width={width} height={height}></StyledSkeleton>
  );
};

export default SkeletonUI;
