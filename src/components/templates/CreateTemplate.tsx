import MainPageHeader from '../common/header/MainPageHeader';
import CreateBody from '../organisms/create-board/CreateBody';

const CreateTemplate = () => {
  return (
    <div>
      <MainPageHeader />
      <div
        style={{ display: 'flex', justifyContent: 'center', width: '100vw' }}>
        <CreateBody />
      </div>
    </div>
  );
};

export default CreateTemplate;
