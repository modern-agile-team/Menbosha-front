import { HTMLtext, TextBox } from '@/components/common/globalStyled/styled';
import { MentorBoardCardType } from '@/types/mentor';
import * as S from './styled';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

/**게시판으로 라우트 */
const MentorOtherBoardCard = (props: MentorBoardCardType) => {
  const [isHtml, setIsHtml] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsHtml(true);
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

  return (
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
        <HTMLtext
          dangerouslySetInnerHTML={{
            __html: props.body,
          }}></HTMLtext>
      )}
      <TextBox size={10} color="#000">
        {props.createdAt.slice(0, 10)}
      </TextBox>
    </S.MentorBoardCardContainer>
  );
};

export default MentorOtherBoardCard;
