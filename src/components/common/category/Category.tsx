import { categoryList } from './categoryList';
import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';

export interface filterType {
  id: number;
  category: string;
}

export interface FilterPropsType {
  filterCategoryId: number;
  lastPage: number;
}

const Category = () => {
  const [categoryNum, setCategoryNum] = useState(0);
  const [filterList, setFilterList] = useState<filterType[]>([]);
  const router = useRouter();
  useEffect(() => {
    const temp = categoryList.filter((data) => data.id !== 1);
    setFilterList(temp);
  }, []);

  const handleCategory = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const value = target.innerHTML;
    const temp = categoryList.find((data) => data.category === value)?.id;
    if (temp) {
      router.push(`?filterId=${temp}`, undefined, { shallow: true });
      setCategoryNum(temp);
    }

    if (temp === categoryNum) {
      router.push(`?filterId=${1}`, undefined, { shallow: true });
      setCategoryNum(1);
    }
  };

  return (
    <S.CategoryContainer>
      {filterList.map((data) => {
        return (
          <div>
            {categoryNum === data.id ? (
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
