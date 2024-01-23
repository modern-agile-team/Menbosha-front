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
      <Category />
      <ContainerWrapper>
        <S.MentorBoardListContainer>
          <TextBox size={30} color="#000">
            멘토가 들려주는 꿀통 대방출~!~!
          </TextBox>
          <RandomMentorBoard />
        </S.MentorBoardListContainer>
        <S.MentorBoardListContainer>
          <TextBox size={30} color="#000">
            최근 인기 멘토글
          </TextBox>
          <PopularMentorBoardList />
        </S.MentorBoardListContainer>
        <S.MentorBoardListContainer>
          <Link
            href={{
              pathname: `/create`,
            }}>
            글쓰기
          </Link>
          <TextBox
            size={30}
            color="#000"
            style={{ padding: '0px 0px 24px 6px' }}>
            전체 멘토 게시글
          </TextBox>
          <MentorBoardList />
        </S.MentorBoardListContainer>
      </ContainerWrapper>
    </>
  );
};

export default MentorBoardTemplate;
