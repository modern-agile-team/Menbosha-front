import MainPageHeader from '@/components/common/header/MainPageHeader';
import MentorList from '../../organisms/mentor/MentorList';
import * as S from './styled';
import Category from '../../common/category/Category';
import {
  ContainerWrapper,
  CreateIconLink,
  TextBox,
} from '@/components/common/globalStyled/styled';
import PopularMentorList from '@/components/organisms/mentor/PopularMentor';
import MentorRanking from '@/components/organisms/mentor/RankMentor';
import MainPageFooter from '@/components/common/footer/Footer';

const MentorTemplate = () => {
  return (
    <>
      <MainPageHeader />
      <S.HeadTitleContainer>
        <div>
          <div>멘토 - 프로필</div>
          <div>좋은 멘토를 찾아 직접 채팅해보세요.</div>
        </div>
      </S.HeadTitleContainer>
      <S.MentorBoardCategoryContainer>
        <Category />
        <CreateIconLink
          href={{
            pathname: `/create`,
          }}>
          <img
            src={
              'https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/board/createIcon.svg'
            }
          />
        </CreateIconLink>
      </S.MentorBoardCategoryContainer>
      <ContainerWrapper>
        <S.MentorListContainer>
          <S.ListTitleBox>명예의 전당</S.ListTitleBox>
          <MentorRanking />
        </S.MentorListContainer>
        <S.MentorListContainer>
          <S.ListTitleBox>인기 멘토</S.ListTitleBox>
          <PopularMentorList />
        </S.MentorListContainer>
        <S.MentorListContainer>
          <S.ListTitleBox>전체 멘토</S.ListTitleBox>
          <MentorList />
        </S.MentorListContainer>
      </ContainerWrapper>
      <MainPageFooter />
    </>
  );
};

export default MentorTemplate;
