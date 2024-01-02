import HELP from '@/apis/help';
import {
  ButtonBox,
  FlexBox,
  ImageBox,
  TextBox,
} from '@/components/common/globalStyled/styled';
import { HelpUnitHeadType } from '@/types/help';
import { useRouter } from 'next/router';

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
    </FlexBox>
  );
};

export default UnitContentHead;
