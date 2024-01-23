import { SideViewerAtom } from '@/recoil/atoms/SideViewerAtom';
import { useRecoilState } from 'recoil';
import * as S from './styled';
import {
  ImageBox,
  LinkBox,
  TextBox,
} from '@/components/common/globalStyled/styled';
import { MentorCardType } from '@/types/user';

const MentorCard = (props: MentorCardType) => {
  const [sideViewer, setSideViewer] = useRecoilState(SideViewerAtom);

  const handleSideViewer = () => {
    setSideViewer(props.id);
  };
  return (
    <LinkBox
      color="#fff"
      href={{
        pathname: `/mentor/unit/${props.id}`,
        query: {
          id: props.id,
        },
      }}>
      <S.MentorCardContainer onClick={handleSideViewer}>
        <ImageBox
          src={props.userImage}
          width="114px"
          height="135px"
          size="cover"
          style={{ borderRadius: 10, margin: 12 }}
        />
        <S.MentorCardContentBox>
          <TextBox size={16} color="#C63D2F" style={{ padding: '13px 0px' }}>
            {props.name}
          </TextBox>
          <TextBox
            size={12}
            color="#fff"
            style={{ padding: '0px 0px 10px 0px' }}>
            {props.introduce}
          </TextBox>
          <TextBox
            size={12}
            color="#fff"
            style={{ padding: '10px 0px 10px 0px' }}>
            {props.mainField}
          </TextBox>
        </S.MentorCardContentBox>
      </S.MentorCardContainer>
    </LinkBox>
  );
};

export default MentorCard;
