import * as S from './styled';
import {
  FlexBox,
  ImageBox,
  LinkBox,
  TextBox,
} from '@/components/common/globalStyled/styled';
import { MentorCardType } from '@/types/mentor';

const MentorCard = (props: MentorCardType) => {
  return (
    <LinkBox
      color="#fff"
      href={{
        pathname: `/mentor/unit/${props.id}`,
        query: {
          id: props.id,
        },
      }}>
      <S.MentorCardContainer>
        <img src={props.userImage} alt="유저이미지" />
        <S.MentorCardContentBox>
          <div>
            <div>{props.name}</div>
          </div>
          <div>
            <div>{props.shortIntro}</div>
            <div>{props.customCategory}</div>
          </div>
          <S.MentorCountBox>
            <div>
              <img
                src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/board/reviewCnt.svg"
                alt="리뷰수이모지"
              />
              <div>{props.reviewCnt}개</div>
            </div>
            <div>
              <img
                src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/board/boardCnt.svg"
                alt="보드수이모지"
              />
              <div>{props.boardCnt}개</div>
            </div>
          </S.MentorCountBox>
        </S.MentorCardContentBox>
      </S.MentorCardContainer>
    </LinkBox>
  );
};

export default MentorCard;
