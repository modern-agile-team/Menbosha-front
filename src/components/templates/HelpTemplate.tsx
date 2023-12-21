import SubPageHeader from '@/components/common/header/SubPageHeader';
import HelpBoardCardList from '../organisms/help-board/HelpBoardCard';
import HelpCategory from '../organisms/help-board/HelpCategory';
import Link from 'next/link';

const HelpTemplate = () => {
  return (
    <>
      <SubPageHeader />
      <div
        style={{ display: 'flex', justifyContent: 'center', width: '100vw' }}>
        <div>
          <HelpCategory />
          <Link
            href={{
              pathname: `/help/create`,
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
