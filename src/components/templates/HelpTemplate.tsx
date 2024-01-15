import SubPageHeader from '@/components/common/header/SubPageHeader';
import HelpBoardCardList from '../organisms/help-board/HelpBoardCardList';
import Link from 'next/link';
import Category from '../common/category/Category';

const HelpTemplate = () => {
  return (
    <>
      <SubPageHeader />
      <div
        style={{ display: 'flex', justifyContent: 'center', width: '100vw' }}>
        <div>
          <Category />
          <Link
            href={{
              pathname: `/create`,
            }}>
            글쓰기
          </Link>
          <HelpBoardCardList />
        </div>
      </div>
    </>
  );
};

export default HelpTemplate;
