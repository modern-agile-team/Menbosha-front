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
  const [like, setLike] = useState({
    count: 0,
    isLike: props.isLike,
  });

  useEffect(() => {
    setHtml(true);
    setLike((prev) => {
      return {
        ...prev,
        count: props.likes,
      };
    });
  }, []);

  /**좋아요 핸들러 */
  const handleLike = async () => {
    if (!like.isLike) {
      try {
        await MENTOR.createLike(props.id, props.userId);
        setLike((prev) => {
          return {
            ...prev,
            count: like.count + 1,
            isLike: true,
          };
        });
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          alert('본인의 게시물에는 좋아요를 할 수 없습니다.');
        }
      }
    } else {
      await MENTOR.deleteLike(props.id, props.userId);
      setLike((prev) => {
        return {
          ...prev,
          count: like.count - 1,
          isLike: false,
        };
      });
    }
  };

  return (
    <S.BodyContainer>
      {props.image.length > 0 ? (
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
      ) : (
        <div></div>
      )}
      <S.BodyContentBox>
        {isHtml && (
          <div
            dangerouslySetInnerHTML={{
              __html: props.body as string,
            }}></div>
        )}
      </S.BodyContentBox>
      <S.LikeContainer>
        {!like.isLike ? (
          <img
            onClick={handleLike}
            src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/board/emptyHeart.svg"
          />
        ) : (
          <img
            onClick={handleLike}
            src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/board/fullHeart.svg"
          />
        )}
        {like.count}
      </S.LikeContainer>
    </S.BodyContainer>
  );
};

export default MentorBoardUnitBody;
