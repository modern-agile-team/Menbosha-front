import { categoryList } from './categoryList';
import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useRecoilState } from 'recoil';
import { CategoryFilterAtom } from '@/recoil/atoms/CategorySelectAtom';
import { useRouter } from 'next/router';

export interface filterType {
  id: number;
  category: string;
}

export interface Local {
  location: string;
}

export interface FilterPropsType {
  filterCategoryId: number;
  lastPage: number;
}

const Category = ({ location }: Local) => {
  const [categoryNum, setCategoryNum] = useRecoilState(CategoryFilterAtom);
  const [filterList, setFilterList] = useState<filterType[]>([]);
  const router = useRouter();
  useEffect(() => {
    const temp = categoryList.filter((data) => data.id !== 1);
    setFilterList(temp);
  }, []);

  const handleCategory = (e: any) => {
    const value = e.target.innerHTML;
    const temp = categoryList.find((data) => data.category === value)?.id;
    if (temp) {
      router.push(`?filterId=${temp}`, undefined, { shallow: true });
      setCategoryNum(temp);
    }

    if (temp === categoryNum) {
      setCategoryNum(1);
      router.push(`?filterId=${1}`, undefined, { shallow: true });
    }
  };

  //뒤로가기, 나가기 시 필터링 해제,  페이지 전환시
  // useEffect(() => {
  //   //페이지 나가기
  //   window.addEventListener('beforeunload', () => {
  //     setCategoryNum(1);
  //   });
  //   //라우트 변경시 작동하는 함수
  //   const handleBrowseAway = () => {
  //     setCategoryNum(1);
  //   };
  //   //라우트 작동
  //   router.events.on('routeChangeStart', handleBrowseAway);

  //   return () => {
  //     //페이지 종료
  //     window.removeEventListener('beforeunload', () => {
  //       setCategoryNum(1);
  //     });
  //     //라우트 종료
  //     router.events.off('routeChangeStart', handleBrowseAway);
  //   };
  // }, []);

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
