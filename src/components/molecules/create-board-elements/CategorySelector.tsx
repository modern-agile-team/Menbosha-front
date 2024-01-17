import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import useModal from '@/hooks/useModal';
import { categoryList } from '../../common/category/categoryList';
import { CategorySelectAtom } from '@/recoil/atoms/CategorySelectAtom';
import { useRouter } from 'next/router';
import { filterType } from '@/components/common/category/Category';

const CategorySelectorBox = () => {
  const [getCategory, setCategory] = useRecoilState(CategorySelectAtom);
  const resetSelect = useResetRecoilState(CategorySelectAtom);
  const { isOpenModal, handleModal } = useModal();
  const [getFilterCategory, setFilterCategory] = useState<filterType[]>([]);
  const router = useRouter();

  /** 게시판 선택 시 */
  const handleOnChangeSelectValue = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    setCategory(target.innerHTML);
  };

  //다른 페이지로 넘어가도 select초기화
  useEffect(() => {
    const temp = categoryList.filter((data) => data.id !== 1);
    setFilterCategory(temp);
    router.events.on('routeChangeStart', resetSelect);
    return () => {
      router.events.off('routeChangeStart', resetSelect);
    };
  }, []);

  return (
    <>
      <SelectBox onClick={handleModal}>
        <Label>{getCategory ? getCategory : '카테고리'}</Label>
        <SelectOptions show={`${isOpenModal}`}>
          {getFilterCategory.map((list) => {
            return (
              <div key={list.id}>
                <Option onClick={handleOnChangeSelectValue}>
                  {list.category}
                </Option>
              </div>
            );
          })}
        </SelectOptions>
        {isOpenModal && (
          <DropDown
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();

              if (isOpenModal) {
                handleModal();
              }
            }}></DropDown>
        )}
      </SelectBox>
    </>
  );
};

const SelectBox = styled.div`
  position: relative;
  border: 1px solid #ffbb5c;
  margin-left: auto;
  width: 200px;
  margin: 0px 8px 16px 8px;
  border-radius: 5px;
  background-color: #fff;
  color: #000;
  align-self: center;
  cursor: pointer;
  z-index: 1;
  &::before {
    content: '⌵';
    position: absolute;
    right: 8px;
    font-size: 16px;
  }
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  font-size: 16px;
`;

interface SO {
  show: string;
}

const SelectOptions = styled.div<SO>`
  position: absolute;
  list-style: none;
  left: 0;
  width: 100%;
  overflow: hidden;
  max-height: ${(props) => (props.show === 'true' ? 'none' : '0')};
  padding: 0;
  border-radius: 8px;
  border: ${(props) => (props.show === 'true' ? '1px solid #ffbb5c' : 'none')};
  background-color: #fff;
  color: #000;
`;

const Option = styled.div`
  font-size: 14px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #ff9b50;
  }
`;

const DropDown = styled.div`
  background-color: rgba(f, f, f, 100%);
  position: fixed;
  z-index: -1;
  left: 0px;
  top: 0px;
  width: 10000px;
  height: 1000px;
  cursor: auto;
`;

export default CategorySelectorBox;
