import { ButtonBox } from '@/components/common/globalStyled/styled';
import useCarousel from '@/hooks/useCarousel';
import { MBUnitBodyPropsType } from '@/types/mentor';
import * as S from './style';
import { useEffect, useState } from 'react';

const MentorBoardUnitBody = (props: MBUnitBodyPropsType) => {
  const { slideRef, handleSlidePrev, handleSlideNext } = useCarousel(
    props.image,
  );
  const [isHtml, setHtml] = useState(false);

  useEffect(() => {
    setHtml(true);
  }, []);
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
    </S.BodyContainer>
  );
};

export default MentorBoardUnitBody;
