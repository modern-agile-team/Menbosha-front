import HelpBoardCardList from '../../organisms/help-board/HelpBoardCardList';
import Link from 'next/link';
import Category from '../../common/category/Category';
import HelpPullingBoardList from '../../organisms/help-board/HelpPullingBoardList';
import {
  ContainerWrapper,
  CreateIconLink,
  FlexBox,
  TextBox,
} from '../../common/globalStyled/styled';
import MainPageHeader from '../../common/header/MainPageHeader';
import * as S from './styled';

const HelpTemplate = () => {
  return (
    <>
      <MainPageHeader />
      <S.HeadTitleContainer>
        <div>
          <div>도와주세요</div>
          <div>멘티들의 간절한 요청! 들어주지 않을 수 없겠죠?</div>
        </div>
      </S.HeadTitleContainer>
      <S.HelpBoardCategoryContainer>
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
      </S.HelpBoardCategoryContainer>
      <ContainerWrapper>
        <S.HelpBoardListContainer>
          <S.BoardTitleBox>끌올된 게시판</S.BoardTitleBox>
          <HelpPullingBoardList />
        </S.HelpBoardListContainer>
        <S.HelpBoardListContainer>
          <S.BoardTitleBox>도와주세요 게시판</S.BoardTitleBox>
          <HelpBoardCardList />
        </S.HelpBoardListContainer>
      </ContainerWrapper>
    </>
  );
};

export default HelpTemplate;
