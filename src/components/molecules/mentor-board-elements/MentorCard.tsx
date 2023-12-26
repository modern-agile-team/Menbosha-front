import { SideViewerAtom } from '@/recoil/atoms/SideViewerAtom';
import { useRecoilState } from 'recoil';
import * as S from './styled';
import { TextBox } from '@/components/common/globalStyled/styled';
interface CardType {
  id: number;
  name: string;
  image: string;
  introduction: string;
  mainField: string;
}

const MentorCard = (props: CardType) => {
  const [sideViewer, setSideViewer] = useRecoilState(SideViewerAtom);

  const handleSideViewer = () => {
    setSideViewer(props.id);
  };
  return (
    <S.CardContainer onClick={handleSideViewer}>
      <S.CardImageBox>이미지들어옴</S.CardImageBox>
      <TextBox size={20} color="#C63D2F" style={{ padding: '13px 0px' }}>
        {props.name}
      </TextBox>
      <TextBox size={14} color="#fff" style={{ padding: '0px 0px 10px 0px' }}>
        {props.introduction}
      </TextBox>
      <TextBox size={14} color="#fff" style={{ padding: '10px 0px 10px 0px' }}>
        {props.mainField}
      </TextBox>
    </S.CardContainer>
  );
};

export default MentorCard;
