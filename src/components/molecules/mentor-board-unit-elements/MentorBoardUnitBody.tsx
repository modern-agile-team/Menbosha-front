import { ButtonBox } from '@/components/common/globalStyled/styled';
import useCarousel from '@/hooks/useCarousel';
import { MBUnitBodyPropsType } from '@/types/mentor';
import * as S from './style';

const MentorBoardUnitBody = (props: MBUnitBodyPropsType) => {
  const { slideRef, handleSlidePrev, handleSlideNext } = useCarousel(
    props.image,
  );
  return (
    <div>
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
      <div>이미지들어올자리</div>
      <div>{props.body}</div>
    </div>
  );
};

export default MentorBoardUnitBody;
