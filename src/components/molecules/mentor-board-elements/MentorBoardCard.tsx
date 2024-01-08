import {
  FlexBox,
  ImageBox,
  TextBox,
} from '@/components/common/globalStyled/styled';
import { MentorBoardCardType } from '@/types/mentor';
import * as S from './styled';
import { categoryList } from '@/components/common/category/categoryList';

const MentorBoardCard = (props: MentorBoardCardType) => {
  const foundCategory = categoryList.find(
    (data) => data.id === (props.category as number),
  );
  return (
    <S.MentorBoardCardContainer>
      <FlexBox type="flex" style={{ marginBottom: '12px' }}>
        <ImageBox
          src={props.userImage}
          width="50px"
          height="50px"
          size="cover"
          style={{ borderRadius: 10 }}
        />
        <div>
          <TextBox
            color="#fff"
            size={16}
            style={{ padding: '3px', fontWeight: 'bold' }}>
            {props.userName}
          </TextBox>
          <TextBox color="#fff" size={12} style={{ padding: '3px' }}>
            {foundCategory ? foundCategory.category : 'not Found'}
          </TextBox>
        </div>
      </FlexBox>
      <S.CardImageBox>사진들어갈 곳</S.CardImageBox>
      <TextBox size={20} color="#fae" style={{ padding: '12px 0px 0px 0px' }}>
        {props.head}
      </TextBox>
      <TextBox size={12} color="#fff" style={{ padding: '6px 0px 24px 0px' }}>
        {props.body}
      </TextBox>
      <TextBox size={10} color="#fff">
        {props.createdAt.slice(0, 8)}
      </TextBox>
    </S.MentorBoardCardContainer>
  );
};

export default MentorBoardCard;
