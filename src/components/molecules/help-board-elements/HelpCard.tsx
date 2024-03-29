import { HTMLtext, TextBox } from '@/components/common/globalStyled/styled';
import * as S from './styled';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HelpListType } from '@/types/help';
import { useRouter } from 'next/router';
import { AstPath } from 'prettier';
import { categoryList } from '@/components/common/category/categoryList';

const HelpCard = (props: HelpListType) => {
  const [isStateHtml, setStateHtml] = useState(false);
  const [category, setCategory] = useState('');

  const getCategoryName = () => {
    const temp = categoryList.find(
      (data) => data.id === props.categoryId,
    )?.category;
    temp && setCategory(temp);
  };

  useEffect(() => {
    getCategoryName();
    setStateHtml(true);
  }, []);

  return (
    <div>
      <S.UserPageLink
        href={{
          pathname: `/userpage/${props.userId}`,
          query: {
            id: props.userId,
          },
        }}>
        <img src={props.userImage}></img>
        <div>
          <div>{props.name}</div>
          <div>{category}</div>
        </div>
      </S.UserPageLink>
      <S.CardLink
        href={{
          pathname: `/help/unit/${props.id}`,
          query: {
            id: props.id,
          },
        }}>
        <S.CardContainer>
          <S.CardImageBox src={props.image}></S.CardImageBox>
          <div>{props.head}</div>
          {isStateHtml && (
            <HTMLtext dangerouslySetInnerHTML={{ __html: props.body }} />
          )}
          <div>{props.createdAt && props.createdAt.slice(0, 10)}</div>
        </S.CardContainer>
      </S.CardLink>
    </div>
  );
};

export default HelpCard;
