import SaveToken from '../organisms/auth/SaveToken';

interface ProvidedrInter {
  provider: string;
}

const LoginTemplate = ({ provider }: ProvidedrInter) => {
  return (
    <div>
      <SaveToken provider={provider} />
    </div>
  );
};

export default LoginTemplate;
