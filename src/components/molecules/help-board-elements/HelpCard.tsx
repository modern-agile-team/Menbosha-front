import { TextBox } from '@/components/common/globalStyled/styled';
import * as S from './styled';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HelpListType } from '@/types/help';
import { useRouter } from 'next/router';
import { AstPath } from 'prettier';

const HelpCard = (props: HelpListType) => {
  const [isStateHtml, setStateHtml] = useState(false);

  useEffect(() => {
    setStateHtml(true);
  }, []);
  return (
    <S.CardLink
      href={{
        pathname: `/help/unit/${props.id}`,
        query: {
          id: props.id,
        },
      }}>
      <S.CardContainer>
        <S.CardImageBox src={props.image}></S.CardImageBox>
        <TextBox size={20} color="#C63D2F" style={{ padding: '13px 0px' }}>
          {props.head}
        </TextBox>
        {isStateHtml && (
          <TextBox
            size={14}
            color="#fff"
            style={{ padding: '0px 0px 10px 0px' }}
            dangerouslySetInnerHTML={{ __html: props.body }}
          />
        )}
        <TextBox
          size={14}
          color="#fff"
          style={{ padding: '10px 0px 10px 0px' }}>
          {props.name}
        </TextBox>
      </S.CardContainer>
    </S.CardLink>
  );
};

export default HelpCard;
