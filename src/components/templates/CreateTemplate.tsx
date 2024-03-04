import { ContainerWrapper } from '../common/globalStyled/styled';
import MainPageHeader from '../common/header/MainPageHeader';
import CreateBody from '../organisms/create-board/CreateBody';

const CreateTemplate = () => {
  return (
    <div>
      <MainPageHeader />
      <ContainerWrapper>
        <CreateBody />
      </ContainerWrapper>
    </div>
  );
};

export default CreateTemplate;
