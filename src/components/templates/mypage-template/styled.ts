import Link from 'next/link';
import styled, { keyframes } from 'styled-components';

/**유저 페이지 최상위 */
export const UserpageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 90px 0px 90px 0px;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
`;

/**각 기능 구역설정을 위한 style */
export const ElementSection = styled.div`
  width: 49%;
  height: 37vh;
`;

/**물결 움직임을 위한 keyframes */
const move = keyframes`
    100% {
		transform: rotate(180deg);
	}
`;

/**물결 움직임을 위한 style */
export const Wave = styled.div`
  border-radius: 49.5%;
  animation: ${move} 15s infinite linear;
  width: 1030vw;
  height: 1030vw;
  position: absolute;
  top: -1027vw;
  background-color: #fff;
  border: 5px solid #fe2;
  z-index: -1;
`;

/**버블 움직임을 위한 keyframes */
const bubbleMove = keyframes`
    0% {
        padding: 0px;
    }
    50% {
        padding: 2px;
    }
    100% {
        padding: 0px;
    }
`;

interface BubbleSizeType {
  size: string;
}
/**버블 움직임을 위한 style */
export const Bubble = styled.div<BubbleSizeType>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  border: 2px solid #fe2;
  position: absolute;
  animation: ${bubbleMove} 1s infinite linear;
`;

export const ProfileLinkImg = styled.div`
  background-image: url('/profileLinkIcon.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 50%;
  height: 90%;
  margin: 4% 0% 0% 43%;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    height: 100%;
    background-image: url('/profileLinkIcon.png');
    transition: all 0.5s;
  }
`;

export const ProfileLinkText = styled.div`
  margin: 14% 0% 0% 8%;
  position: absolute;
  color: #fff;
`;

export const TempLinkImg = styled.div`
  background-image: url('/tempIcon.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 50%;
  height: 90%;
  margin: 8% 0% 0% 33%;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    height: 100%;
    background-image: url('/tempIcon.png');
    transition: all 0.5s;
  }
`;

export const TempLinkText = styled.div`
  margin: 14% 0% 0% 9%;
  position: absolute;
  color: #fff;
`;

export const ReviewLinkImg = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('/reviewLinkIcon.png');
  width: 50%;
  height: 90%;
  margin: 6% 0% 0% 29%;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    height: 100%;
    background-image: url('/reviewLinkIcon.png');
    transition: all 0.5s;
  }
`;

export const ReviewLinkText = styled.div`
  margin: 14% 0% 0% 11%;
  position: absolute;
  color: #fff;
`;

export const ChatLinkImg = styled.div`
  background-image: url('/chatLinkIcon.png');
  background-size: contain;
  background-repeat: no-repeat;
  width: 50%;
  height: 90%;
  margin: 3% 0% 0% 10%;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    height: 100%;
    background-image: url('/chatLinkIcon.png');
    transition: all 0.5s;
  }
`;

export const ChatLinkText = styled.div`
  margin: 14% 0% 0% 11%;
  position: absolute;
  color: #fff;
`;
