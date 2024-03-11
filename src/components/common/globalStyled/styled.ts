import Link from 'next/link';
import styled, { createGlobalStyle, css } from 'styled-components';

/**각각 font-weight별로 사용
 * 사용하고 싶은 곳에서 font-weight를 주면 자동 적용됩니다.
 */
export const GlobalFont = createGlobalStyle`
  @font-face {
  font-family: 'Pretendard', sans-serif;
  src: url('/public/fonts/Pretendard-Black.woff2') format('woff2');
  font-weight: 900;
  font-style: normal;
  font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard', sans-serif;
    src: url('/public/fonts/Pretendard-ExtraBold.woff2') format('woff2');
    font-weight: 800;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard', sans-serif;
    src: url('/public/fonts/Pretendard-Bold.woff2') format('woff2');
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard', sans-serif;
    src: url('/public/fonts/Pretendard-SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard', sans-serif;
    src: url('/public/fonts/Pretendard-Medium.woff2') format('woff2');
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard', sans-serif;
    src: url('/public/fonts/Pretendard-Regular.woff2') format('woff2');
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard', sans-serif;
    src: url('/public/fonts/Pretendard-Light.woff2') format('woff2');
    font-weight: 300;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard', sans-serif;
    src: url('/public/fonts/Pretendard-ExtraLight.woff2') format('woff2');
    font-weight: 200;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard', sans-serif;
    src: url('/public/fonts/Pretendard-Thin.woff2') format('woff2');
    font-weight: 100;
    font-display: swap;
  }
`;

//전체 Pretendard적용
export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Pretendard";
  }
`;

interface TextType {
  color?: string;
  size?: number;
}

/**
 * 텍스트 상자의 색깔과 size 지정을 위한 style
 * @param color [string]
 *  color='#fff'
 * @param size [number]
 *  size={20}
 * @return color -> color : #fff
 * @return color -> size : 20px
 */
export const TextBox = styled.div<TextType>`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size}px;
`;

interface ButtonType {
  color?: string;
  size?: number;
}

/**
 * 텍스트 상자의 색깔과 size 지정을 위한 style
 * @param color [string]
 *  color='#fff'
 * @param size [number]
 *  size={20}
 * @return color -> color : #fff
 * @return color -> size : 20px
 */
export const ButtonBox = styled.div<ButtonType>`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size}px;
  cursor: pointer;
`;

interface FlexType {
  type?: string;
  direction?: string;
  col?: string;
  row?: string;
}

/** display속성을 위한 style
 * @param type [string]
 *  type='flex' || 'block' || 'grid
 * @param direction [string]
 *  direction='column' || 'row'
 * @param col [string]
 *  col='left' || 'center' || 'rigth'
 * @param row [string]
 *  row='start' || 'center' || 'left'
 * @return type -> display: flex
 * @return direction -> flex-direction: column
 * @return col -> justify-content : center
 * @return row -> align-items: center
 */
export const FlexBox = styled.div<FlexType>`
  ${({ type, direction, col, row }) => {
    return css`
      display: ${type};
      flex-direction: ${direction};
      justify-content: ${col};
      align-items: ${row};
    `;
  }}
`;

interface ImageType {
  src?: string;
  width?: string;
  height?: string;
  size?: string;
}

/** backgroun-image를 위한 style
 * @param src [string]
 *  src="이미지경로"
 * @param width [string]
 *  [default] width : 250px
 *  width="100px" || "100vw" || "100%"
 * @param height [string]
 *  [default] height : 250px
 *  height="100px" || "100vh" || "100%"
 * @param size [string]
 *  [default] size : cover
 * @returns src-> background-image:url('src');
 * @returns width-> width: 100px;
 * @returns height-> height: 100px;
 * @returns size-> background-size: cover;
 */
export const ImageBox = styled.div<ImageType>`
  background-image: url(${({ src }) => src});
  background-color: #999;
  width: ${({ width }) => (width !== undefined ? width : `100%`)};
  height: ${({ height }) => (height !== undefined ? height : `100%`)};
  background-size: ${({ size }) => (size !== undefined ? size : 'contain')};
  background-repeat: no-repeat;
`;

interface LinkType {
  color?: string;
  size?: string;
}

/**
 * Link태그를 스타일 하기위한 전역 스타일
 * @param color [string]
 *  color='#fff'
 * @param size [number]
 *  size={20}
 * @return color -> color : #fff
 * @return color -> font-size : 20px
 */
export const LinkBox = styled(Link)<LinkType>`
  color: ${({ color }) => color};
  size: ${({ size }) => size};
  text-decoration: none;
`;

/**전역 컨테이너 wrapper */
export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 204px;
  @media only all and (max-width: 1900px) {
    margin: 0px 10.625%; //0 204
  }
`;

/**전역 제목 컨테이너 */
export const HeadTitleContainer = styled.div`
  margin: 65px 204px 0px 204px;
  @media only all and (max-width: 1900px) {
    margin: 3.365% 10.5591% 0px 10.5591%; //65 204 0 204
  }
  > :nth-child(1) {
    display: flex;
    width: 100%;
    //페이지 대 제목
    > :nth-child(1) {
      color: #ff772b;
      font-size: 2.67em; //64px
      font-weight: 900;
    }
    //페이지 소 제목
    > :nth-child(2) {
      color: #ff792bbf;
      font-size: 0.85em; //20px
      font-weight: 700;
      display: flex;
      align-items: end;
      margin-left: 10px;
    }
  }
`;

/**전역 카테고리 컨테이너 */
export const GlobalCategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  background-color: #fff;
  top: 0px;
  margin: 0px 204px;
  margin-top: 25px;
  @media only all and (max-width: 1900px) {
    margin: 0px 10.625%; //0 204
  }
`;

/**게시글 생성 아이콘 */
export const CreateIconLink = styled.div`
  margin: 9px 0px 0px 0px;
`;

//html태그 불러오기
export const HTMLtext = styled.div`
  font-size: 0.5em;
  font-weight: 400;
  width: 100%;
  color: rgba(0, 0, 0, 0.75);
  font-weight: none;
  overflow: visible;
  text-overflow: ellipsis;
  padding-bottom: 10px;
  h1,
  h2,
  ol,
  li,
  p,
  span,
  strong,
  u {
    font-size: 1em;
    font-weight: 400;
    text-decoration: none;
  }
`;
