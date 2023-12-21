import { SideViewerAtom } from '@/recoil/atoms/SideViewerAtom';
import { useRecoilState } from 'recoil';
import * as S from './styled';
interface CardType {
  id: number;
  name: string;
  image: string;
  introduct: string;
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
      <S.CardTextBox size={20} color="#C63D2F" padding="13px 0px">
        {props.name}
      </S.CardTextBox>
      <S.CardTextBox size={14} color="#fff" padding="0px 0px 10px 0px">
        {props.introduct}
      </S.CardTextBox>
      <S.CardTextBox size={14} color="#fff" padding="10px 0px 0px 0px">
        {props.mainField}
      </S.CardTextBox>
    </S.CardContainer>
  );
};

export default MentorCard;
