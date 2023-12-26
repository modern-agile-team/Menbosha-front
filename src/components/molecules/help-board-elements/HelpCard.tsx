import { TextBox } from '@/components/common/globalStyled/styled';
import * as S from './styled';
import Link from 'next/link';

interface CardType {
  id: number;
  name: string;
  userImage: string;
  image: string;
  head: string;
  body: string;
  createAt: string;
}

const HelpCard = (props: CardType) => {
  return (
    <S.CardLink
      href={{
        pathname: `/help/unit`,
        query: {
          id: props.id,
        },
      }}>
      <S.CardContainer>
        <S.CardImageBox>이미지이미지이미지</S.CardImageBox>
        <TextBox size={20} color="#C63D2F" style={{ padding: '13px 0px' }}>
          {props.head}
        </TextBox>
        <TextBox size={14} color="#fff" style={{ padding: '0px 0px 10px 0px' }}>
          {props.body}
        </TextBox>
        <TextBox
          size={14}
          color="#fff"
          style={{ padding: '10px 0px 10px 0px' }}>
          {props.createAt}
        </TextBox>
      </S.CardContainer>
    </S.CardLink>
  );
};

export default HelpCard;
