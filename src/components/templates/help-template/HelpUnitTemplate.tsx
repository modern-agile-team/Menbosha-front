import { useRouter } from 'next/router';
import MainPageHeader from '../../common/header/MainPageHeader';
import HelpUnitContent from '../../organisms/help-unit/HelpUnitContent';
import { ContainerWrapper } from '@/components/common/globalStyled/styled';

const HelpUnitTemplate = () => {
  const router = useRouter();

  return (
    <div>
      <MainPageHeader />
      <ContainerWrapper>
        {router.isReady && <HelpUnitContent id={Number(router.query.id)} />}
      </ContainerWrapper>
    </div>
  );
};
export default HelpUnitTemplate;
