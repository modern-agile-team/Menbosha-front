import { MBUnitBodyPropsType } from '@/types/mentor';

const MentorBoardUnitBody = (props: MBUnitBodyPropsType) => {
  return (
    <div>
      <div>이미지들어올자리</div>
      <div>{props.body}</div>
    </div>
  );
};

export default MentorBoardUnitBody;
