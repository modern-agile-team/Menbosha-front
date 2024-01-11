import SubPageHeader from '@/components/common/header/SubPageHeader';
import * as S from './styled';
import Category from '../../common/category/Category';
import MentorBoardList from '@/components/organisms/mentor-board/MentorBoardList';
import {
  ContainerWrapper,
  FlexBox,
  TextBox,
} from '@/components/common/globalStyled/styled';
import Link from 'next/link';

const MentorBoardTemplate = () => {
  return (
    <>
      <SubPageHeader />
      <Category />
      <ContainerWrapper>
        <S.MentorBoardListContainer>
          <TextBox size={30} color="#fff">
            멘토가 들려주는 꿀통 대방출~!~!
          </TextBox>
        </S.MentorBoardListContainer>
        <S.MentorBoardListContainer>
          <TextBox size={30} color="#fff">
            최근 인기 멘토글
          </TextBox>
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
            color="#fff"
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
