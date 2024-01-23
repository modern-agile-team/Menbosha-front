// import React from 'react';
// import Slider from 'react-slick';
// import styled from 'styled-components';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const StyledSlider = styled(Slider)`
//   width: 76.8vw;
//   height: 70vh;
//   /* margin-bottom: 80px; */
//   align-items: center;
//   border-radius: 30px;
//   /* border: 2px solid red; */
// `;

// const ImageContainer1 = styled.div`
//   background-image: url('https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/body-1.svg');
//   background-repeat: no-repeat;
//   background-size: 76.7vw 70vh;
//   width: 76.8vw;
//   height: 70vh;
//   /* border: 2px solid gray; */
// `;

// const ImageContainer2 = styled.div`
//   background-image: url('https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/body-2.svg');
//   background-repeat: no-repeat;
//   background-size: 76.7vw 70vh;
//   width: 76.8vw;
//   height: 70vh;
// `;

// const ImageContainer3 = styled.div`
//   background-image: url('https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/body-3.svg');
//   background-repeat: no-repeat;
//   background-size: 76.8vw 70vh;
//   width: 76.8vw;
//   height: 70vh;
// `;

// // 현재 커스텀 Dots 스타일 컴포넌트 부분을 활성화하면 hydration 에러를 뿜어서
// // 주석처리 해놓았습니다. 추후에 useEffect로 구현부 감싸서 서버 사이드 렌더링에
// // 침해받지 않도록 수정할 예정입니다.

// // const CustomDots = styled.ul`
// //   position: absolute;
// //   bottom: 15px;
// //   display: flex;
// //   width: 100%;
// //   padding: 0;
// //   margin: 0;
// //   list-style: none;
// //   justify-content: center;
// // `;

// // const CustomDot = styled.li`
// //   position: relative;
// //   display: inline-block;
// //   width: 20px;
// //   height: 20px;
// //   margin: 0 5px;
// //   cursor: pointer;
// // `;

// // const CustomDotButton = styled.button`
// //   font-size: 0;
// //   line-height: 0;
// //   display: block;
// //   width: 20px;
// //   height: 20px;
// //   padding: 5px;
// //   cursor: pointer;
// //   color: transparent;
// //   border: 0;
// //   outline: none;
// //   background: transparent;

// //   &:hover,
// //   &:focus {
// //     outline: none;
// //   }

// //   &:hover:before,
// //   &:focus:before {
// //     opacity: 1;
// //   }

// //   &:before {
// //     font-family: 'slick';
// //     font-size: 6px;
// //     line-height: 20px;
// //     position: absolute;
// //     top: 0;
// //     left: 0;
// //     width: 20px;
// //     height: 20px;
// //     content: '•';
// //     text-align: center;
// //     opacity: 0.25;
// //     color: black;
// //     -webkit-font-smoothing: antialiased;
// //     -moz-osx-font-smoothing: grayscale;
// //   }

// //   ${(props) =>
// //     props['aria-selected'] === 'true' &&
// //     `
// //     &:before {
// //       opacity: 0.75;
// //       color: #c58940; /* Change color for selected dot */
// //     }
// //   `}

// //   ${(props) =>
// //     props['aria-selected'] === 'false' &&
// //     `
// //     &:before {
// //       opacity: 0.25;
// //       color: black; /* Change color for unselected dot */
// //     }
// //   `}
// // `;

// const MainImageSlider = () => {
//   const settings = {
//     // centerMode: true,
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 7000,
//     // appendDots: (dots: any) => (
//     //   <CustomDots>
//     //     {dots.map((dot: any, index: any) => (
//     //       <CustomDot key={index}>{dot}</CustomDot>
//     //     ))}
//     //   </CustomDots>
//     // ),
//     // customPaging: (i: any) => (
//     //   <CustomDotButton type="button">{i + 1}</CustomDotButton>
//     // ),
//   };

//   return (
//     <StyledSlider {...settings}>
//       <ImageContainer1></ImageContainer1>
//       <ImageContainer2></ImageContainer2>
//       <ImageContainer3></ImageContainer3>
//     </StyledSlider>
//   );
// };

// export default MainImageSlider;
