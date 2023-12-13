import { SideViewerAtom } from '@/recoil/atoms/SideViewerAtom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

interface CardType {
  id: number;
  name: string;
  email: string;
  userImage: string;
  rank: number;
  phone: string;
  w_category: string;
  a_category: string;
}

const MentorCard = (props: CardType) => {
  const [sideViewer, setSideViewer] = useRecoilState(SideViewerAtom);

  const handleSideViewer = () => {
    setSideViewer({
      isSide: !sideViewer.isSide,
      id: props.id,
    });
  };
  return (
    <CardContainer onClick={handleSideViewer}>
      <CardImageBox></CardImageBox>
      <CardTextBox size={16} color="#ff6000" padding="13px 0px">
        {props.name}
      </CardTextBox>
      <CardTextBox size={11} color="#c58940" padding="0px 0px 10px 0px">
        {props.w_category}
      </CardTextBox>
      <CardTextBox size={9} color="#c58940" padding="10px 0px 0px 0px">
        {props.a_category}
      </CardTextBox>
    </CardContainer>
  );
};

export default MentorCard;

const CardContainer = styled.div`
  margin: 7px;
  padding: 5px;
  border: 1px solid #f0f;
`;

const CardImageBox = styled.div`
  width: 194px;
  height: 200px;
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
