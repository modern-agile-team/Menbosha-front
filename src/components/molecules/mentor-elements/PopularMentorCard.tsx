import { SideViewerAtom } from '@/recoil/atoms/SideViewerAtom';
import { useRecoilState } from 'recoil';
import * as S from './styled';
import { ImageBox, TextBox } from '@/components/common/globalStyled/styled';
import { MentorCardType, PopularMentorType } from '@/types/user';

const PopularMentorCard = (props: PopularMentorType) => {
  const [sideViewer, setSideViewer] = useRecoilState(SideViewerAtom);

  return (
    <S.MentorCardContainer>
      <ImageBox
        width="114px"
        height="135px"
        size="cover"
        style={{ borderRadius: 10, margin: 12 }}
      />
      <S.MentorCardContentBox>
        <TextBox size={16} color="#C63D2F" style={{ padding: '13px 0px' }}>
          {props.name}
        </TextBox>
        <TextBox size={12} color="#fff" style={{ padding: '0px 0px 10px 0px' }}>
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
  );
};

export default PopularMentorCard;
