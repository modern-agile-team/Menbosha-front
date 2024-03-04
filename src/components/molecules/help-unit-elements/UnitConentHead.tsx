import HELP from '@/apis/help';
import { categoryList } from '@/components/common/category/categoryList';
import { TextBox } from '@/components/common/globalStyled/styled';
import { HelpUnitType } from '@/types/help';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as S from './styled';

const UnitContentHead = (props: HelpUnitType) => {
  const [category, setCategory] = useState('');
  const router = useRouter();

  /**게시글 삭제 핸들러 */
  const deleteHelpUnitApi = async () => {
    if (confirm('게시글을 삭제 하시겠습니까?')) {
      const response = await HELP.deleteHelpUnit(props.id);
      router.back();
    }
  };

  /**게시글 끌올 핸들러 */
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

  /**게시글 수정 핸들러 */
  const modifyHelpUnit = () => {
    const jsonData = {
      data: props,
      location: 'help',
    };
    router.push({
      pathname: '/modify',
      query: {
        data: JSON.stringify(jsonData),
      },
    });
  };

  useEffect(() => {
    const temp = categoryList.find(
      (data) => data.id === props.categoryId,
    )?.category;
    temp && setCategory(temp);
  }, []);

  return (
    <S.HelpHeadContainer>
      <S.HelpBoardTitleBox>
        <div>{props.head}</div>
      </S.HelpBoardTitleBox>
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
              onClick={modifyHelpUnit}
              alt="수정버튼"></img>
            <img
              src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/board/trashcan.svg"
              onClick={deleteHelpUnitApi}
              alt="삭제버튼"></img>
          </S.ActiveButtonBox>
        )}
      </div>
    </S.HelpHeadContainer>
  );
};

export default UnitContentHead;
