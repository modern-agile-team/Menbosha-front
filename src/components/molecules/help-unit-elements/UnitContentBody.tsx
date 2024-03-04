import { ButtonBox, TextBox } from '@/components/common/globalStyled/styled';
import { HelpUnitBodyType } from '@/types/help';
import { useEffect, useState } from 'react';
import * as S from './styled';
import useCarousel from '@/hooks/useCarousel';

const UnitContentBody = (props: HelpUnitBodyType) => {
  const [isStateHtml, setIsStateHtml] = useState(false);
  const { slideRef, handleSlidePrev, handleSlideNext } = useCarousel(
    props.helpMeBoardImages,
  );

  useEffect(() => {
    setIsStateHtml(true);
  }, []);

  return (
    <div>
      {props.helpMeBoardImages.length >= 1 && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {props.helpMeBoardImages.length >= 2 && (
            <S.ImageNextNPrevButton onClick={handleSlidePrev}>
              &lt;
            </S.ImageNextNPrevButton>
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
            <S.ImageNextNPrevButton onClick={handleSlideNext}>
              &gt;
            </S.ImageNextNPrevButton>
          )}
        </div>
      )}
      <S.HelpContentBodyValueBox>
        {isStateHtml && (
          <TextBox
            size={16}
            color="#000"
            style={{ padding: '0px 0px 10px 0px' }}
            dangerouslySetInnerHTML={{ __html: props.body }}
          />
        )}
      </S.HelpContentBodyValueBox>
    </div>
  );
};

export default UnitContentBody;
