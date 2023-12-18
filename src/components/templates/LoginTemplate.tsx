import SaveToken from '../organisms/auth/SaveToken';

interface ProviderInter {
  provider: string;
}

const LoginTemplate = ({ provider }: ProviderInter) => {
  return (
    <div>
      <SaveToken provider={provider} />
    </div>
  );
};

export default LoginTemplate;
