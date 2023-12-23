import SubPageHeader from '../common/header/SubPageHeader';
import CreateHelpBody from '../organisms/create-help-board/CreateHelpBody';

const CreateHelpTemplate = () => {
  return (
    <div>
      <SubPageHeader />
      <div
        style={{ display: 'flex', justifyContent: 'center', width: '100vw' }}>
        <CreateHelpBody />;
      </div>
    </div>
  );
};

export default CreateHelpTemplate;
