import MainPageHeader from '@/components/common/header/MainPageHeader';
import MentorList from '../../organisms/mentor/MentorList';
import * as S from './styled';
import Category from '../../common/category/Category';
import {
  ContainerWrapper,
  TextBox,
} from '@/components/common/globalStyled/styled';
import PopularMentorList from '@/components/organisms/mentor/PopularMentor';

const MentorTemplate = () => {
  return (
    <>
      <MainPageHeader />
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
        <S.MentorListContainer>
          <TextBox size={30} color="#ff792b">
            명예의 전당
          </TextBox>
        </S.MentorListContainer>
        <S.PopularMentorListContainer>
          <TextBox size={30} color="#ff792b">
            인기 멘토
          </TextBox>
          <PopularMentorList />
        </S.PopularMentorListContainer>
        <S.MentorListContainer>
          <TextBox size={30} color="#ff792b">
            전체 멘토
          </TextBox>
          <MentorList />
        </S.MentorListContainer>
      </ContainerWrapper>
    </>
  );
};

export default MentorTemplate;
