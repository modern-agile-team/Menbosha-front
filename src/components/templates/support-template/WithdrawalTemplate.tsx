import { ContainerWrapper } from '@/components/common/globalStyled/styled';
import MainPageHeader from '@/components/common/header/MainPageHeader';
import UserWithdrawal from '@/components/organisms/support-withdrawal/UserWithdrawal';

const WithdrawalTemplate = () => {
  return (
    <div>
      <MainPageHeader />
      <ContainerWrapper>
        <UserWithdrawal />
      </ContainerWrapper>
    </div>
  );
};

export default WithdrawalTemplate;
