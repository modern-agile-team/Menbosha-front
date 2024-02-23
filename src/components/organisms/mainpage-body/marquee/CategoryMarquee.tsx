import React from 'react';
import * as S from './styled';
import Marquee from 'react-fast-marquee';
import { categoryList } from '@/components/common/category/categoryList';

type CategoryType = {
  id: number;
  category: string;
}[];

const CategoryMarquee = () => {
  const category: CategoryType = categoryList;

  return (
    <S.MarqueeContainer>
      <S.MarqueeArea1>
        <Marquee>
          {category.map((item) => (
            <S.MarqueeBox key={item.id}>{item.category}</S.MarqueeBox>
          ))}
        </Marquee>
      </S.MarqueeArea1>
      <S.MarqueeArea2>
        <Marquee speed={60}>
          {category.map((item) => (
            <S.MarqueeBox key={item.id}>{item.category}</S.MarqueeBox>
          ))}
        </Marquee>
      </S.MarqueeArea2>
      <S.MarqueeArea3>
        <Marquee speed={70}>
          {category.map((item) => (
            <S.MarqueeBox key={item.id}>{item.category}</S.MarqueeBox>
          ))}
        </Marquee>
      </S.MarqueeArea3>
    </S.MarqueeContainer>
  );
};

export default CategoryMarquee;
