import MainPageHeader from '@/components/common/header/MainPageHeader';
import MentorList from '../../organisms/mentor/MentorList';
import * as S from './styled';
import Category from '../../common/category/Category';
import {
  ContainerWrapper,
  TextBox,
} from '@/components/common/globalStyled/styled';
import PopularMentor from '@/components/organisms/mentor/PopularMentor';

const MentorTemplate = () => {
  return (
    <>
      <MainPageHeader />
      <Category />
      <ContainerWrapper>
        <S.MentorListContainer>
          <TextBox size={30} color="#000">
            명예의 전당
          </TextBox>
        </S.MentorListContainer>
        <S.MentorListContainer>
          <TextBox size={30} color="#000">
            인기 멘토
          </TextBox>
          <PopularMentor />
        </S.MentorListContainer>
        <S.MentorListContainer>
          <TextBox size={30} color="#000">
            전체 멘토
          </TextBox>
          <MentorList />
        </S.MentorListContainer>
      </ContainerWrapper>
    </>
  );
};

export default MentorTemplate;
