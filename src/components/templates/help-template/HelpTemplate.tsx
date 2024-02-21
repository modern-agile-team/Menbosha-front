import HelpBoardCardList from '../../organisms/help-board/HelpBoardCardList';
import Link from 'next/link';
import Category from '../../common/category/Category';
import HelpPullingBoardList from '../../organisms/help-board/HelpPullingBoardList';
import {
  ContainerWrapper,
  CreateIconLink,
  FlexBox,
  GlobalCategoryContainer,
  HeadTitleContainer,
  TextBox,
} from '../../common/globalStyled/styled';
import MainPageHeader from '../../common/header/MainPageHeader';
import * as S from './styled';
import { useRecoilValue } from 'recoil';
import { CategoryFilterAtom } from '@/recoil/atoms/CategorySelectAtom';

const HelpTemplate = () => {
  const filterCategoryId = useRecoilValue(CategoryFilterAtom);

  return (
    <>
      <MainPageHeader />
      <HeadTitleContainer>
        <div>
          <div>도와주세요</div>
          <div>멘티들의 간절한 요청! 들어주지 않을 수 없겠죠?</div>
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
        <S.HelpBoardListContainer>
          <S.BoardTitleBox>끌올된 게시판</S.BoardTitleBox>
          <HelpPullingBoardList filterCategoryId={filterCategoryId} />
        </S.HelpBoardListContainer>
        <S.HelpBoardListContainer>
          <S.BoardTitleBox>도와주세요 게시판</S.BoardTitleBox>
          <HelpBoardCardList filterCategoryId={filterCategoryId} />
        </S.HelpBoardListContainer>
      </ContainerWrapper>
    </>
  );
};

export default HelpTemplate;
