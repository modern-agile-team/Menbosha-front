import { ButtonBox, TextBox } from '@/components/common/globalStyled/styled';
import { HelpUnitBodyType } from '@/types/help';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import * as S from './styled';
import useCarousel from '@/hooks/useCarousel';

const UnitContentBody = (props: HelpUnitBodyType) => {
  const [isStateHtml, setStatHtml] = useState(false);
  const { slideRef, handleSlidePrev, handleSlideNext } = useCarousel(
    props.helpMeBoardImages,
  );

  useEffect(() => {
    setStatHtml(true);
  });

  return (
    <div>
      {props.helpMeBoardImages.length >= 1 && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {props.helpMeBoardImages.length >= 2 && (
            <ButtonBox color="#000" onClick={handleSlidePrev}>
              이전
            </ButtonBox>
          )}
          <S.SlideContain>
            <S.SlidImages ref={slideRef}>
              {props.helpMeBoardImages.map((data) => {
                return (
                  <div key={data.id}>
                    <S.BodyImages src={data.imageUrl} alt="이미지" />
                  </div>
                );
              })}
            </S.SlidImages>
          </S.SlideContain>
          {props.helpMeBoardImages.length >= 2 && (
            <ButtonBox color="#000" onClick={handleSlideNext}>
              다음
            </ButtonBox>
          )}
        </div>
      )}
      {isStateHtml && (
        <TextBox
          size={16}
          color="#000"
          style={{ padding: '0px 0px 10px 0px' }}
          dangerouslySetInnerHTML={{ __html: props.body as string }}
        />
      )}
    </div>
  );
};

export default UnitContentBody;
