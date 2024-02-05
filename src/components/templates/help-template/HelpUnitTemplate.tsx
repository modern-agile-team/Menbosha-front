import { useRouter } from 'next/router';
import MainPageHeader from '../../common/header/MainPageHeader';
import HelpUnitContent from '../../organisms/help-unit/HelpUnitContent';

const HelpUnitTemplate = () => {
  const router = useRouter();

  return (
    <div>
      <MainPageHeader />
      <div
        style={{ display: 'flex', justifyContent: 'center', height: '70vh' }}>
        {router.isReady && <HelpUnitContent id={Number(router.query.id)} />}
      </div>
    </div>
  );
};
export default HelpUnitTemplate;
