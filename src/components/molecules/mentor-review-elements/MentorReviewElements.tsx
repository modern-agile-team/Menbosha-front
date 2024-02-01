import { ReviewProprType } from '@/types/review';
import * as S from 'styled-components';

const MentorReviewElements = (props: ReviewProprType) => {
  return (
    <div>
      <div></div>
      <div>{props.name}</div>
    </div>
  );
};

export default MentorReviewElements;
