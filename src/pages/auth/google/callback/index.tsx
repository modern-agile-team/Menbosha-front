import LoginTemplate from '@/components/templates/LoginTemplate';

const GoogleCallback = () => {
  return (
    <div>
      <LoginTemplate provider="google" />
    </div>
  );
};

export default GoogleCallback;
