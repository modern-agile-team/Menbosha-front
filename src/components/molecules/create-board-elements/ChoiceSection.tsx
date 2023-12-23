import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import useModal from '@/hooks/useModal';
import { useRouter } from 'next/router';
import { SectionSelectAtom } from '@/recoil/atoms/CategorySelectAtom';

export const sectionList = [
  {
    id: 1,
    section: '멘토',
  },
  {
    id: 2,
    section: '도와주세요',
  },
];

const SectionSelectorBox = () => {
  const [getSection, setSection] = useRecoilState(SectionSelectAtom);
  const resetSelect = useResetRecoilState(SectionSelectAtom);
  const { isOpenModal, handleModal } = useModal();
  const router = useRouter();

  /** 게시판 선택 시 */
  const handleOnChangeSelectValue = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    setSection(target.innerHTML);
  };

  //다른 페이지로 넘어가도 select초기화
  useEffect(() => {
    router.events.on('routeChangeStart', resetSelect);
    return () => {
      router.events.off('routeChangeStart', resetSelect);
    };
  }, []);

  return (
    <>
      <SelectBox onClick={handleModal}>
        <Label>{getSection ? getSection : '위치'}</Label>
        <SelectOptions show={`${isOpenModal}`}>
          {sectionList.map((list) => {
            return (
              <div key={list.id}>
                <Option onClick={handleOnChangeSelectValue}>
                  {list.section}
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
  margin-left: auto;
  width: 200px;
  padding: 8px;
  border-radius: 5px;
  background-color: #ffffff;
  align-self: center;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 25%);
  cursor: pointer;
  z-index: 1;
  &::before {
    content: '⌵';
    position: absolute;
    top: 1px;
    right: 8px;
    font-size: 20px;
  }
`;

const Label = styled.label`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
`;

interface SO {
  show: string;
}

const SelectOptions = styled.div<SO>`
  position: absolute;
  list-style: none;
  top: 36px;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: auto;
  max-height: ${(props) => (props.show === 'true' ? 'none' : '0')};
  padding: 0;
  border-radius: 8px;
  background-color: #222222;
  color: #fefefe;
`;

const Option = styled.div`
  font-size: 14px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #595959;
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

export default SectionSelectorBox;
