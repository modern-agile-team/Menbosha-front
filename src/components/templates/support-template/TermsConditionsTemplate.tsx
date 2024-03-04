import MainPageFooter from '@/components/common/footer/Footer';
import { ContainerWrapper } from '@/components/common/globalStyled/styled';
import MainPageHeader from '@/components/common/header/MainPageHeader';
import TermsConditionsContents from '@/components/organisms/terms-conditions/TermsConditionsContent';

const TermsConditionsTemplate = () => {
  return (
    <div>
      <MainPageHeader />
      <ContainerWrapper>
        <TermsConditionsContents />
      </ContainerWrapper>
      <MainPageFooter color={true} />
    </div>
  );
};

export default TermsConditionsTemplate;
