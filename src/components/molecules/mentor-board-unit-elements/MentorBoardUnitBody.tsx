import { ButtonBox } from '@/components/common/globalStyled/styled';
import useCarousel from '@/hooks/useCarousel';
import { MBUnitBodyPropsType } from '@/types/mentor';
import * as S from './style';
import { useEffect, useState } from 'react';
import MENTOR from '@/apis/mentor';
import axios from 'axios';

const MentorBoardUnitBody = (props: MBUnitBodyPropsType) => {
  const { slideRef, handleSlidePrev, handleSlideNext } = useCarousel(
    props.image,
  );
  const [isHtml, setHtml] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isLike, setIsLike] = useState(props.isLike);

  useEffect(() => {
    setHtml(true);
    setLikeCount(props.likes);
  }, []);

  const handleLike = async () => {
    if (isLike) {
      setLikeCount(likeCount - 1);
      setIsLike(false);
      await MENTOR.deleteLike(props.id);
    } else {
      try {
        await MENTOR.createLike(props.id);
        setLikeCount(likeCount + 1);
        setIsLike(true);
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          alert(`${err.response.data.message}`);
        }
      }
    }
  };

  return (
    <S.BodyContainer>
      {props.image.length >= 0 && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {props.image.length >= 2 && (
            <ButtonBox color="#000" onClick={handleSlidePrev}>
              이전
            </ButtonBox>
          )}
          <S.SlideContain>
            <S.SlidImages ref={slideRef}>
              {props.image.map((data: any) => {
                return (
                  <div key={data.id}>
                    <S.BodyImages src={data.imageUrl} alt="이미지" />
                  </div>
                );
              })}
            </S.SlidImages>
          </S.SlideContain>
          {props.image.length >= 2 && (
            <ButtonBox color="#000" onClick={handleSlideNext}>
              다음
            </ButtonBox>
          )}
        </div>
      )}
      <S.BodyContentBox>
        {isHtml && (
          <div
            dangerouslySetInnerHTML={{
              __html: props.body as string,
            }}></div>
        )}
      </S.BodyContentBox>
      <ButtonBox onClick={handleLike}>
        {!isLike ? (
          <img src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/board/emptyHeart.svg" />
        ) : (
          <img src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/board/fullHeart.svg" />
        )}
        {likeCount}
      </ButtonBox>
    </S.BodyContainer>
  );
};

export default MentorBoardUnitBody;
