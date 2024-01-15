import {
  FlexBox,
  ImageBox,
  TextBox,
} from '@/components/common/globalStyled/styled';
import { MBUnitHeadPropsType } from '@/types/mentor';
import Image from 'next/image';
import * as S from './style';
import { useRouter } from 'next/router';
import MENTOR from '@/apis/mentor';

const MentorBoardUnitHead = (props: MBUnitHeadPropsType) => {
  const router = useRouter();

  const modifiedMentorBoardUnit = () => {
    //경로 추가 예정
    router.push(
      {
        pathname: `/help/modify`,
        query: {
          data: JSON.stringify(props),
        },
      },
      ``,
    );
  };

  const deleteMentorBoardUnit = async () => {
    confirm('게시물을 삭제하시겠습니까?') &&
      (await MENTOR.deleteMentorBoardUnit(props.id));

    //이전으로 돌아가는 로직 추가 예정
  };
  return (
    <div>
      <TextBox color="#FF4651" size={40}>
        {props.head}
      </TextBox>
      <FlexBox type="flex">
        <ImageBox
          src={props.userImage}
          width="114px"
          height="135px"
          size="cover"
          style={{ borderRadius: 10, margin: 12 }}
        />
        <S.HeadProfile>
          <TextBox size={16}>{props.userName}</TextBox>
          <FlexBox type="flex">
            <TextBox size={12}>{props.category}</TextBox>
            <TextBox size={10}>{props.createdAt.slice(0, 10)}</TextBox>
          </FlexBox>
        </S.HeadProfile>
        <FlexBox type="flex" style={{ margin: '0px 0px 0px auto' }}>
          <div onClick={modifiedMentorBoardUnit}>수정버튼</div>
          <div onClick={deleteMentorBoardUnit}>삭제버튼</div>
        </FlexBox>
      </FlexBox>
    </div>
  );
};

export default MentorBoardUnitHead;
