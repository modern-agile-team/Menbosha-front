import { useRouter } from 'next/router';
import SubPageHeader from '../common/header/SubPageHeader';
import HelpUnitContent from '../organisms/help-unit/HelpUnitContent';

const HelpUnitTemplate = () => {
  const router = useRouter();

  return (
    <div>
      <SubPageHeader />
      <div
        style={{ display: 'flex', justifyContent: 'center', height: '70vh' }}>
        {router.isReady && <HelpUnitContent id={Number(router.query.id)} />}
      </div>
    </div>
  );
};
export default HelpUnitTemplate;
