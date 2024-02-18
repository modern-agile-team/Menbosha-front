import Link from 'next/link';
import styled, { css, keyframes } from 'styled-components';

/**유저 페이지 최상위 */
export const UserpageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 90px 0px 90px 0px;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  /* border: 2px solid green; */
`;

export const MyPageTitleBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 16vw;
  height: 12vh;
  text-align: center;
  /* border: 2px solid red; */
  :nth-child(1) {
    margin-bottom: 12px;
    font-size: 64px;
    font-weight: 900;
    line-height: 120%;
    color: rgb(255, 119, 43);
  }
  :nth-child(2) {
    font-size: 20px;
    font-weight: 700;
    color: rgb(255, 119, 43, 0.75);
  }
`;

/**각 기능 구역설정을 위한 style */
export const ElementSection = styled.div`
  width: 49%;
  height: 37vh;
  /* border: 2px solid black; */
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
  border: 5px solid rgb(255, 119, 43);
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
  border: 2px solid rgb(255, 119, 43);
  position: absolute;
  animation: ${bubbleMove} 1s infinite linear;
`;

export const ProfileLinkImg = styled.div`
  background-image: url('https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mypage/myProfile.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 50%;
  height: 90%;
  margin: 4% 0% 0% 43%;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    height: 100%;
    background-image: url('https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mypage/myProfile.svg');
    transition: all 0.5s;
  }
`;

export const ProfileLinkText = styled.div`
  margin: 14% 0% 0% 8%;
  position: absolute;
  color: #ff772b;
`;

export const TempLinkImg = styled.div`
  background-image: url('https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mypage/rank.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 50%;
  height: 90%;
  margin: 8% 0% 0% 33%;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    height: 100%;
    background-image: url('https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mypage/rank.svg');
    transition: all 0.5s;
  }
`;

export const TempLinkText = styled.div`
  margin: 14% 0% 0% 9%;
  position: absolute;
  color: #ff772b;
`;

export const ReviewLinkImg = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mypage/review.svg');
  width: 50%;
  height: 90%;
  margin: 6% 0% 0% 29%;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    height: 100%;
    background-image: url('https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mypage/review.svg');
    transition: all 0.5s;
  }
`;

export const ReviewLinkText = styled.div`
  margin: 14% 0% 0% 11%;
  position: absolute;
  color: #ff772b;
`;

export const ChatLinkImg = styled.div`
  background-image: url('https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mypage/chatting.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 50%;
  height: 80%;
  margin: 3% 0% 0% 10%;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    height: 100%;
    background-image: url('https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mypage/chatting.svg');
    transition: all 0.5s;
  }
`;

export const ChatLinkText = styled.div`
  margin: 14% 0% 0% 11%;
  position: absolute;
  color: #ff772b;
`;

//MyProfileTemplate
export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 100px 0px;
  @media only all and (max-width: 1300px) {
    & > img {
      display: none;
    }
  }
`;

//멘보샤 빵 사진
export const BackgroundContainer = styled.img`
  width: 100vw;
  height: 112vw;
  max-width: 1920px;
  @media only all and (max-width: 1919px) {
    width: 100vw;
    height: 100vw;
  }
  @media only all and (max-width: 1000px) {
    width: 100vw;
    height: 2200px;
  }
`;

//백그라운드 컬러 입히기 전 css 모듈
export const BackContainColor = css`
  width: 1920px;
  @media only all and (max-width: 1920px) {
    width: 100vw;
  }
  height: 100%;
  position: absolute;
`;

/**#ff772b 백그라운드 */
export const MyProfileBack = styled.div`
  ${BackContainColor}
  background-color: #ff772b;
`;

/**#b83a42 백그라운드 */

export const BadgeBack = styled.div`
  ${BackContainColor}
  background-color: #b83a42;
`;

/**#752626 백그라운드 */

export const MyReviewBack = styled.div`
  > :nth-child(2) {
    background-color: #752626;
  }
`;

/**#4e1f1f 백그라운드 */

export const MyRecordBack = styled.div`
  > :nth-child(2) {
    background-color: #4e1f1f;
  }
`;
