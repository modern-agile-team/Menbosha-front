import HELP from '@/apis/help';
import {
  ButtonBox,
  FlexBox,
  ImageBox,
  TextBox,
} from '@/components/common/globalStyled/styled';
import { HelpUnitHeadType, HelpUnitType } from '@/types/help';
import Image from 'next/image';
import { useRouter } from 'next/router';

const UnitContentHead = (props: HelpUnitType) => {
  const router = useRouter();
  const deleteHelpUnitApi = async () => {
    if (confirm('게시글을 삭제 하시겠습니까?')) {
      const response = await HELP.deleteHelpUnit(props.id);
      router.back();
    }
  };

  const modifyHelpUnit = () => {
    router.push(
      {
        pathname: '/help/modify',
        query: {
          data: JSON.stringify(props),
        },
      },
      '/help/modify',
    );
  };
  return (
    <div>
      <TextBox color="#C63D2F" size={40}>
        {props.head}
      </TextBox>
      <FlexBox type="flex" style={{ margin: '0px 0px 60px 0px' }}>
        <TextBox color="#000">{props.user.name}</TextBox>
        <Image
          src={props.user.userImage.imageUrl}
          alt="유저이미지"
          width={50}
          height={50}
          style={{ border: '2px solid #FF772B', borderRadius: 10 }}
        />
        <div>
          <TextBox color="#FFBB5C" size={10}>
            {props.createdAt.slice(0, 10)}
          </TextBox>
        </div>
      </FlexBox>
      {props.unitOwner && (
        <FlexBox type="flex" style={{ marginLeft: 'auto' }}>
          <ButtonBox color="#000" onClick={deleteHelpUnitApi}>
            삭제
          </ButtonBox>
          <ButtonBox color="#000" onClick={modifyHelpUnit}>
            수정
          </ButtonBox>
        </FlexBox>
      )}
    </div>
  );
};

export default UnitContentHead;
