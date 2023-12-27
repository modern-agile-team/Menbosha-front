import { useRouter } from 'next/router';
import SubPageHeader from '../common/header/SubPageHeader';
import HelpUnitContent from '../organisms/help-unit/HelpUnitContent';

const HelpUnitTemplate = () => {
  const router = useRouter();

  return (
    <div>
      <SubPageHeader />
      <HelpUnitContent id={router.query && Number(router.query.id)} />
    </div>
  );
};
export default HelpUnitTemplate;
