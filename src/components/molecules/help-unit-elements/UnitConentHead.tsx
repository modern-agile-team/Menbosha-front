import HELP from '@/apis/help';
import { categoryList } from '@/components/common/category/categoryList';
import {
  ButtonBox,
  FlexBox,
  ImageBox,
  TextBox,
} from '@/components/common/globalStyled/styled';
import { HelpUnitHeadType, HelpUnitType } from '@/types/help';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as S from './styled';

const UnitContentHead = (props: HelpUnitType) => {
  const [category, setCategory] = useState('');
  const router = useRouter();
  const deleteHelpUnitApi = async () => {
    if (confirm('게시글을 삭제 하시겠습니까?')) {
      const response = await HELP.deleteHelpUnit(props.id);
      router.back();
    }
  };

  const handlePullingUp = async () => {
    if (confirm('끌올시키시겠습니까?')) {
      await HELP.pullingUp(props.id);
      sessionStorage.setItem(
        '__next_scroll_back',
        JSON.stringify({
          x: 0,
          y: 0,
        }),
      );
      router.back();
    }
  };

  useEffect(() => {
    const temp = categoryList.find(
      (data) => data.id === props.categoryId,
    )?.category;
    temp && setCategory(temp);
  }, []);

  const modifyHelpUnit = () => {
    router.push({
      pathname: '/help/modify',
      query: {
        data: JSON.stringify(props),
      },
    });
  };
  return (
    <S.HelpHeadContainer>
      <div>{props.head}</div>
      <div>
        <S.UserImg src={props.user.userImage.imageUrl} alt="유저이미지" />
        <S.UserInfoBox>
          <div>{props.user.name}</div>
          <div>
            <TextBox color="#000" size={12}>
              {category}
            </TextBox>
            <TextBox color="#000" size={10}>
              {props.createdAt.slice(0, 10)}
            </TextBox>
          </div>
        </S.UserInfoBox>
        {props.unitOwner && (
          <S.ActiveButtonBox>
            <div onClick={handlePullingUp}>끌어올리기</div>
            <img
              src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/board/createIcon.svg"
              onClick={modifyHelpUnit}></img>
            <img
              src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/board/trashcan.svg"
              onClick={deleteHelpUnitApi}></img>
          </S.ActiveButtonBox>
        )}
      </div>
    </S.HelpHeadContainer>
  );
};

export default UnitContentHead;
