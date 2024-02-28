import MainPageFooter from '@/components/common/footer/Footer';
import { ContainerWrapper } from '@/components/common/globalStyled/styled';
import MainPageHeader from '@/components/common/header/MainPageHeader';
import PrivacyPolicyContents from '@/components/organisms/terms-conditions/PrivacyPolicyContent';

const PrivacyPolicyTemplate = () => {
  return (
    <div>
      <MainPageHeader />
      <ContainerWrapper>
        <PrivacyPolicyContents />
      </ContainerWrapper>
      <MainPageFooter color={true} />
    </div>
  );
};

export default PrivacyPolicyTemplate;
