import { categoryList } from './categoryList';
import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useRecoilState } from 'recoil';
import { CategoryFilterAtom } from '@/recoil/atoms/CategorySelectAtom';

export interface filterType {
  id: number;
  category: string;
}

const Category = () => {
  const [catNum, setCatNum] = useRecoilState(CategoryFilterAtom);
  const [filterList, setFilterList] = useState<filterType[]>([]);

  useEffect(() => {
    const temp = categoryList.filter((data) => data.id !== 1);
    setFilterList(temp);
  }, []);

  const handleCategory = (e: any) => {
    const value = e.target.innerHTML;
    const temp = categoryList.find((data) => data.category === value)?.id;
    temp && setCatNum(temp);
    if (temp === catNum) {
      setCatNum(1);
    }
  };

  return (
    <S.CategoryContainer>
      {filterList.map((data) => {
        return (
          <div>
            {catNum === data.id ? (
              <S.CategoryBox isCat={true} onClick={handleCategory}>
                {data.category}
              </S.CategoryBox>
            ) : (
              <S.CategoryBox isCat={false} onClick={handleCategory}>
                {data.category}
              </S.CategoryBox>
            )}
          </div>
        );
      })}
    </S.CategoryContainer>
  );
};

export default Category;
