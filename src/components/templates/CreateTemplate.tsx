import SubPageHeader from '../common/header/SubPageHeader';
import CreateBody from '../organisms/create-board/CreateBody';

const CreateTemplate = () => {
  return (
    <div>
      <SubPageHeader />
      <div
        style={{ display: 'flex', justifyContent: 'center', width: '100vw' }}>
        <CreateBody />;
      </div>
    </div>
  );
};

export default CreateTemplate;
