import MainPageHeader from '@/components/common/header/MainPageHeader';
import * as S from './styled';
import Category from '../../common/category/Category';
import MentorBoardList from '@/components/organisms/mentor-board/MentorBoardList';
import {
  ContainerWrapper,
  FlexBox,
  TextBox,
} from '@/components/common/globalStyled/styled';
import Link from 'next/link';
import RandomMentorBoard from '@/components/organisms/mentor-board/RandomMentorBaord';
import PopularMentorBoardList from '@/components/organisms/mentor-board/PopularMentorBoardList';

const MentorBoardTemplate = () => {
  return (
    <>
      <MainPageHeader />
      <S.HeadTitleContainer>
        <div>
          <div>멘토 - 게시글</div>
          <div>멘토들의 직접 작성한 좋은 게시글을 찾아보세요.</div>
        </div>
      </S.HeadTitleContainer>
      <S.MentorBoardCategoryContainer>
        <Category />
        <S.CreateIconLink
          href={{
            pathname: `/create`,
          }}>
          <img
            src={
              'https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/board/createIcon.svg'
            }
          />
        </S.CreateIconLink>
      </S.MentorBoardCategoryContainer>
      <ContainerWrapper>
        <S.MentorBoardListContainer>
          <S.BoardTitleBox>멘토가 들려주는 꿀통 대방출~!~!</S.BoardTitleBox>
          <RandomMentorBoard />
        </S.MentorBoardListContainer>
        <S.MentorBoardListContainer>
          <S.BoardTitleBox>최근 인기 멘토글</S.BoardTitleBox>
          <PopularMentorBoardList />
        </S.MentorBoardListContainer>
        <S.MentorBoardListContainer>
          <S.BoardTitleBox>전체 멘토 게시글</S.BoardTitleBox>
          <MentorBoardList />
        </S.MentorBoardListContainer>
      </ContainerWrapper>
    </>
  );
};

export default MentorBoardTemplate;
