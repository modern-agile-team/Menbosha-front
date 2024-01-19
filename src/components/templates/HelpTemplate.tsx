import HelpBoardCardList from '../organisms/help-board/HelpBoardCardList';
import Link from 'next/link';
import Category from '../common/category/Category';
import HelpPullingBoardList from '../organisms/help-board/HelpPullingBoardList';
import { FlexBox, TextBox } from '../common/globalStyled/styled';
import MainPageHeader from '../common/header/MainPageHeader';

const HelpTemplate = () => {
  return (
    <>
      <MainPageHeader />
      <div
        style={{ display: 'flex', justifyContent: 'center', width: '100vw' }}>
        <div>
          <FlexBox type="flex">
            <TextBox size={64}>도와주세요</TextBox>
            <TextBox size={20} style={{ marginTop: 'auto' }}>
              멘티들의 간절한 요청! 들어주지 않을 수 없겠죠?
            </TextBox>
          </FlexBox>
          <FlexBox type="flex">
            <Category />
            <Link
              href={{
                pathname: `/create`,
              }}
              style={{ margin: 'auto 0px auto 0px' }}>
              글쓰기
            </Link>
          </FlexBox>
          <div>끌올된 게시판</div>
          <HelpPullingBoardList />
          <div>도와주세요 게시판</div>
          <HelpBoardCardList />
        </div>
      </div>
    </>
  );
};

export default HelpTemplate;
