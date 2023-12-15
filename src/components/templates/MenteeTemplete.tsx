import SubPageHeader from '@/components/common/header/SubPageHeader';
import HelpBoardCardList from '../organisms/help-board/HelpBoardCard';
import HelpCategory from '../organisms/help-board/HelpCategory';

const MenteeTemplete = () => {
  return (
    <>
      <SubPageHeader />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <HelpCategory />
          <HelpBoardCardList />
        </div>
      </div>
    </>
  );
};

export default MenteeTemplete;
