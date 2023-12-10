import SubPageHeader from '@/components/common/header/SubPageHeader';
import { useEffect, useState } from 'react';
import HelpBoardCard from '../organisms/help-board/HelpBoardCard';
import HelpBoardCardList from '../organisms/help-board/HelpBoardCard';
import HelpCategory from '../organisms/help-board/HelpCategory';

const MenteeTemplete = () => {
  const [data, setData] = useState(require('/public/dummy/help.json'));
  useEffect(() => {
    setData(require('/public/dummy/help.json'));
  });
  console.log(data);

  return (
    <>
      <SubPageHeader />
      <HelpCategory />
      <HelpBoardCardList />
    </>
  );
};

export default MenteeTemplete;
