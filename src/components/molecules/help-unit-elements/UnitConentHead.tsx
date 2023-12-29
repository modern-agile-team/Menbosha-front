import {
  ButtonBox,
  FlexBox,
  ImageBox,
  TextBox,
} from '@/components/common/globalStyled/styled';
import { HelpUnitHeadType } from '@/types/help';

const UnitContentHead = (props: HelpUnitHeadType) => {
  return (
    <FlexBox type="flex" style={{ margin: '0px 0px 60px 0px' }}>
      <TextBox color="#fff">{props.user.name}</TextBox>
      <ImageBox src={props.user.userImage.imageUrl} />
      <div>
        <TextBox color="#C63D2F" size={40}>
          {props.head}
        </TextBox>
        <TextBox color="#FFBB5C" size={10}>
          {props.createdAt.slice(0, 10)}
        </TextBox>
      </div>
      {props.unitOwner && (
        <FlexBox type="flex" style={{ marginLeft: 'auto' }}>
          <ButtonBox color="#fff">삭제</ButtonBox>
          <ButtonBox color="#fff">수정</ButtonBox>
        </FlexBox>
      )}
    </FlexBox>
  );
};

export default UnitContentHead;
