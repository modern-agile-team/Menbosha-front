import { ImageBox } from '@/components/common/globalStyled/styled';
import { MentorBoardCardType } from '@/types/mentor';

const MentorBoardCard = (props: MentorBoardCardType) => {
  return (
    <div>
      <ImageBox src={props.userImage}></ImageBox>
      <div>{props.userName}</div>
      <div>{props.category}</div>
      <div>사진들어갈 곳</div>
      <div>{props.head}</div>
      <div>{props.body}</div>
      <div>{props.createdAt.slice(0, 8)}</div>
    </div>
  );
};

export default MentorBoardCard;
