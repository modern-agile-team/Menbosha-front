import {
  FlexBox,
  ImageBox,
  TextBox,
} from '@/components/common/globalStyled/styled';
import { MentorBoardCardType } from '@/types/mentor';
import * as S from './styled';
import { categoryList } from '@/components/common/category/categoryList';
import { useRouter } from 'next/router';

/**게시판으로 라우트 */
const MentorBoardCard = (props: MentorBoardCardType) => {
  const router = useRouter();

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
          style={{ borderRadius: 10 }}
        />
        <div>
          <TextBox
            color="#fff"
            size={16}
            style={{ padding: '3px', fontWeight: 'bold' }}>
            {props.userName}
          </TextBox>
          <TextBox color="#fff" size={12} style={{ padding: '3px' }}>
            {foundCategory ? foundCategory.category : 'not Found'}
          </TextBox>
        </div>
      </S.MentorBoardUserBox>
      <S.MentorBoardCardContainer onClick={handleRouteBoard}>
        <S.CardImageBox>사진들어갈 곳</S.CardImageBox>
        <TextBox size={20} color="#fae" style={{ padding: '12px 0px 0px 0px' }}>
          {props.head}
        </TextBox>
        <TextBox size={12} color="#fff" style={{ padding: '6px 0px 24px 0px' }}>
          {props.body}
        </TextBox>
        <TextBox size={10} color="#fff">
          {props.createdAt.slice(0, 10)}
        </TextBox>
      </S.MentorBoardCardContainer>
    </div>
  );
};

export default MentorBoardCard;
