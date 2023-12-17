import { SideViewerAtom } from '@/recoil/atoms/SideViewerAtom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

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
    <CardContainer onClick={handleSideViewer}>
      <CardImageBox>프로필 이미지 들어옴</CardImageBox>
      <CardTextBox size={16} color="#ff6000" padding="13px 0px">
        {props.name}
      </CardTextBox>
      <CardTextBox size={11} color="#c58940" padding="0px 0px 10px 0px">
        {props.introduct}
      </CardTextBox>
      <CardTextBox size={9} color="#c58940" padding="10px 0px 0px 0px">
        {props.mainField}
      </CardTextBox>
    </CardContainer>
  );
};

export default MentorCard;

const CardContainer = styled.div`
  border: 1px solid #f0f;
`;

const CardImageBox = styled.div`
  width: 280px;
  height: 290px;
  background-color: #999;
  border-radius: 10px;
  cursor: pointer;
`;

interface CardTextBoxType {
  size: number;
  color: string;
  padding: string;
}

/** CardTextBox
 * @params size={number}
 * @params color={string}
 * @params padding={string}
 *
 * @returns size -> font-size
 * @returns color -> color
 * @returns padding -> padding
 *
 * @example size={20}
 * @example color={#fff}
 * @example padding={5px || 5px 5px || 5px 5px 5px 5px}
 */
const CardTextBox = styled.div<CardTextBoxType>`
  font-weight: bold;
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  cursor: pointer;
`;
