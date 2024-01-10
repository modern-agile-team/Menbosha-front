import { FlexBox, ImageBox } from '@/components/common/globalStyled/styled';
import { MBUnitHeadPropsType } from '@/types/mentor';

const MentorBoardUnitHead = (props: MBUnitHeadPropsType) => {
  return (
    <div>
      <div>{props.head}</div>
      <FlexBox type="flex">
        <ImageBox src={props.userImage} />
        <div>
          <div>{props.userName}</div>
          <div>{props.category}</div>
          <div>{props.createdAt.slice(0, 10)}</div>
          <div>
            <div>수정버튼</div>
            <div>삭제버튼</div>
          </div>
        </div>
      </FlexBox>
    </div>
  );
};

export default MentorBoardUnitHead;
