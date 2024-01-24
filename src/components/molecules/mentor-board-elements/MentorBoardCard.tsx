import {
  FlexBox,
  ImageBox,
  TextBox,
} from '@/components/common/globalStyled/styled';
import { MentorBoardCardType } from '@/types/mentor';
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
    router.push(
      {
        pathname: `/userpage/${props.userId}`,
        query: {
          id: props.userId,
        },
      },
      `/userpage/${props.userId}`,
    );
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
        <div>
          <TextBox
            color="#000"
            size={16}
            style={{ padding: '3px', fontWeight: 'bold' }}>
            {props.userName}
          </TextBox>
          <TextBox color="#000" size={12} style={{ padding: '3px' }}>
            {foundCategory ? foundCategory.category : 'not Found'}
          </TextBox>
        </div>
        <div>{props.likes}</div>
      </S.MentorBoardUserBox>
      <S.MentorBoardCardContainer onClick={handleRouteBoard}>
        {props.mentorBoardImage !== '' ? (
          <S.CardImageBox img={props.mentorBoardImage}></S.CardImageBox>
        ) : (
          <S.CardImageBox />
        )}
        <TextBox
          size={20}
          color="#FF772B"
          style={{ padding: '12px 0px 0px 0px' }}>
          {props.head}
        </TextBox>
        {isHtml && (
          <TextBox
            size={12}
            color="#000"
            style={{ padding: '6px 0px 24px 0px' }}
            dangerouslySetInnerHTML={{
              __html: props.body as string,
            }}></TextBox>
        )}
        <TextBox size={10} color="#000">
          {props.createdAt.slice(0, 10)}
        </TextBox>
      </S.MentorBoardCardContainer>
    </div>
  );
};

export default MentorBoardCard;
