import styled from 'styled-components';

export const MentoCardContainer = styled.div`
  display: flex;
  width: 1560px;
  min-height: 500px;
  flex-wrap: wrap;
`;

export const MentorCardWrapper = styled.div`
  width: 290px;
  height: 460px;
  margin: 8px;
`;

interface ImageType {
  width?: string;
  height?: string;
}

/**MentorUni */
export const CustomImageBox = styled.img<ImageType>`
  width: ${({ width }) => (width ? width : '100px')};
  height: ${({ height }) => (height ? height : '100px')};
  border: 1px solid #ffbef2;
`;

export const HeaderContentsBox = styled.div`
  width: 35%;
  height: 460px;
`;

export const BodyContentsBox = styled.div`
  width: 35%;
  height: 120px;
`;

export const DetailBox = styled.div`
  width: 80%;
  min-height: 120px;
  height: auto;
`;

export const ShareBox = styled.div`
  width: 45%;
  height: 120px;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 50vw;
  padding: 10px;
`;

export const BadgeContainer = styled.div`
  display: flex;
`;
