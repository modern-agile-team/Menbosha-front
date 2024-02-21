import MainPageHeader from '@/components/common/header/MainPageHeader';
import * as S from './styled';
import Category from '../../common/category/Category';
import MentorBoardList from '@/components/organisms/mentor-board/MentorBoardList';
import {
  ContainerWrapper,
  CreateIconLink,
  GlobalCategoryContainer,
  HeadTitleContainer,
} from '@/components/common/globalStyled/styled';
import RandomMentorBoard from '@/components/organisms/mentor-board/RandomMentorBoard';
import PopularMentorBoardList from '@/components/organisms/mentor-board/PopularMentorBoardList';
import { useRecoilValue } from 'recoil';
import { CategoryFilterAtom } from '@/recoil/atoms/CategorySelectAtom';

const MentorBoardTemplate = () => {
  const filterCategoryId = useRecoilValue(CategoryFilterAtom);

  return (
    <>
      <MainPageHeader />
      <HeadTitleContainer>
        <div>
          <div>멘토 - 게시글</div>
          <div>멘토들의 직접 작성한 좋은 게시글을 찾아보세요.</div>
        </div>
      </HeadTitleContainer>
      <GlobalCategoryContainer>
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
      </GlobalCategoryContainer>
      <ContainerWrapper>
        <S.MentorListContainer>
          <S.ListTitleBox>멘토가 들려주는 꿀통 대방출~!~!</S.ListTitleBox>
          <RandomMentorBoard filterCategoryId={filterCategoryId} />
        </S.MentorListContainer>
        <S.MentorListContainer>
          <S.ListTitleBox>최근 인기 멘토글</S.ListTitleBox>
          <PopularMentorBoardList filterCategoryId={filterCategoryId} />
        </S.MentorListContainer>
        <S.MentorListContainer>
          <S.ListTitleBox>전체 멘토 게시글</S.ListTitleBox>
          <MentorBoardList filterCategoryId={filterCategoryId} />
        </S.MentorListContainer>
      </ContainerWrapper>
    </>
  );
};

export default MentorBoardTemplate;
