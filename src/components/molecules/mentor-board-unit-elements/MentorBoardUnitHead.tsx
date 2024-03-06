import {
  FlexBox,
  ImageBox,
  TextBox,
} from '@/components/common/globalStyled/styled';
import { MBUnitHeadPropsType, MentorBoardUnitType } from '@/types/mentor';
import Image from 'next/image';
import * as S from './style';
import { useRouter } from 'next/router';
import MENTOR from '@/apis/mentor';
import { categoryList } from '@/components/common/category/categoryList';
import { useEffect, useState } from 'react';

const MentorBoardUnitHead = (props: MentorBoardUnitType) => {
  const router = useRouter();
  const [category, setCategory] = useState('');

  const getCategory = () => {
    const temp = categoryList.find(
      (data) => data.id === props.categoryId,
    )?.category;
    temp && setCategory(temp);
  };

  const modifiedMentorBoardUnit = () => {
    //경로 추가 예정
    const jsonData = {
      data: props,
      location: 'mentor',
    };
    router.push(
      {
        pathname: `/modify`,
        query: {
          data: JSON.stringify(jsonData),
        },
      },
      ``,
    );
  };

  const deleteMentorBoardUnit = async () => {
    if (confirm('게시물을 삭제하시겠습니까?')) {
      await MENTOR.deleteMentorBoardUnit(props.id);
      router.push({
        pathname: `/mentor/board`,
        query: {
          filterId: 1,
        },
      });
    }
  };

  useEffect(() => {
    getCategory();
  }, []);
  return (
    <div>
      <S.MentorBoardTitleInfo>
        <div>{props.createdAt.slice(0, 10)}</div>
        <div>{props.head}</div>
      </S.MentorBoardTitleInfo>
      <S.MentorBoardOwnerUser>
        <img src={props.user.userImage.imageUrl} alt="11" />
        <S.HeadProfile>
          <TextBox size={16}>{props.user.name}</TextBox>
          <TextBox size={12}>{category}</TextBox>
        </S.HeadProfile>
        {props.unitOwner && (
          <S.ButtonContainer>
            <img
              src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/board/createIcon.svg"
              onClick={modifiedMentorBoardUnit}></img>
            <img
              src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/board/trashcan.svg"
              onClick={deleteMentorBoardUnit}></img>
          </S.ButtonContainer>
        )}
      </S.MentorBoardOwnerUser>
    </div>
  );
};

export default MentorBoardUnitHead;
