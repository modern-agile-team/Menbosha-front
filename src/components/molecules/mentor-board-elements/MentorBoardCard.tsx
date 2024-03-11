import {
  FlexBox,
  HTMLtext,
  ImageBox,
  TextBox,
} from '@/components/common/globalStyled/styled';
import { MentorBoardCardType, MentorBoardListType } from '@/types/mentor';
import * as S from './styled';
import { categoryList } from '@/components/common/category/categoryList';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

/**게시판으로 라우트 */
const MentorBoardCard = (props: MentorBoardCardType) => {
  const [isHtml, setHtml] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setHtml(true);
  }, []);

  /**게시판으로 라우트 */
  const handleRouteBoard = () => {
    router.push(
      {
        pathname: `/mentor/board/unit/${props.id}`,
        query: {
          id: props.id,
        },
      },
      `/mentor/board/unit/${props.id}`,
    );
  };
  /**유저페이지로 라우트 */
  const handleRouteUser = () => {
    router.push({
      pathname: `/userpage/${props.userId}`,
      query: {
        id: props.userId,
      },
    });
  };

  const foundCategory = categoryList.find(
    (data) => data.id === (props.category as number),
  );
  return (
    <div>
      <S.MentorBoardUserBox onClick={handleRouteUser}>
        <ImageBox
          src={props.userImage}
          width="50px"
          height="50px"
          size="cover"
          style={{ borderRadius: 10, border: '2px solid #FF772B' }}
        />
        <S.MentorBoardCardUserInfoContainer>
          <div>{props.userName}</div>
          <div>{foundCategory ? foundCategory.category : 'not Found'}</div>
        </S.MentorBoardCardUserInfoContainer>
        <S.HeartCountBox>
          <img src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/board/fullHeart.svg" />
          <S.HeartCountBox>{props.likes}</S.HeartCountBox>
        </S.HeartCountBox>
      </S.MentorBoardUserBox>
      <S.MentorBoardCardContainer onClick={handleRouteBoard}>
        {props.mentorBoardImage !== '' ? (
          <S.CardImageBox img={props.mentorBoardImage}></S.CardImageBox>
        ) : (
          <S.CardImageBox />
        )}
        <div>{props.head}</div>
        {isHtml && (
          <HTMLtext
            dangerouslySetInnerHTML={{
              __html: props.body as string,
            }}></HTMLtext>
        )}
        <div>{props.createdAt.slice(0, 10)}</div>
      </S.MentorBoardCardContainer>
    </div>
  );
};

export default MentorBoardCard;
