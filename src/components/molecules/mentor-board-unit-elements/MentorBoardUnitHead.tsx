import {
  FlexBox,
  ImageBox,
  TextBox,
} from '@/components/common/globalStyled/styled';
import { MBUnitHeadPropsType } from '@/types/mentor';
import Image from 'next/image';
import * as S from './style';
import { useRouter } from 'next/router';

const MentorBoardUnitHead = (props: MBUnitHeadPropsType) => {
  const router = useRouter();

  const modifiedMentorBoardUnit = () => {
    //경로 추가 예정
    router.push(
      {
        pathname: ``,
        query: {
          head: props.head,
          body: props.body,
          image: props.image,
        },
      },
      ``,
    );
  };
  return (
    <div>
      <TextBox color="#FF4651" size={40}>
        {props.head}
      </TextBox>
      <FlexBox type="flex">
        <Image
          src={props.userImage}
          alt="프로필이미지"
          width={53}
          height={53}
          style={{ borderRadius: 10 }}
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
          <div>삭제버튼</div>
        </FlexBox>
      </FlexBox>
    </div>
  );
};

export default MentorBoardUnitHead;
