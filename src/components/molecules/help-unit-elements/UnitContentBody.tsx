import { ButtonBox, TextBox } from '@/components/common/globalStyled/styled';
import { HelpUnitBodyType } from '@/types/help';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import * as S from './styled';

const UnitContentBody = (props: HelpUnitBodyType) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const [isStateHtml, setStatHtml] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setStatHtml(true);
  });

  const handleSlideNext = () => {
    if (currentSlide === props.helpMeBoardImages.length - 1) {
      setCurrentSlide(0);
      // alert('마지막 사진 입니다.');
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleSlidePrev = () => {
    if (currentSlide === 0) {
      setCurrentSlide(props.helpMeBoardImages.length - 1);
      // alert('맨 앞 사진 입니다.');
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    if (slideRef.current !== null) {
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    }
  }, [currentSlide]);
  return (
    <div>
      {props.helpMeBoardImages.length >= 1 && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {props.helpMeBoardImages.length >= 2 && (
            <ButtonBox color="#fff" onClick={handleSlidePrev}>
              이전
            </ButtonBox>
          )}
          <S.SlideContain>
            <S.SlidImages ref={slideRef}>
              {props.helpMeBoardImages.map((data) => {
                return (
                  <div>
                    <S.BodyImages src={data.imageUrl} alt="이미지" />
                  </div>
                );
              })}
            </S.SlidImages>
          </S.SlideContain>
          {props.helpMeBoardImages.length >= 2 && (
            <ButtonBox color="#fff" onClick={handleSlideNext}>
              다음
            </ButtonBox>
          )}
        </div>
      )}
      {isStateHtml && (
        <TextBox
          size={16}
          color="#fff"
          style={{ padding: '0px 0px 10px 0px' }}
          dangerouslySetInnerHTML={{ __html: props.body as string }}
        />
      )}
    </div>
  );
};

export default UnitContentBody;
