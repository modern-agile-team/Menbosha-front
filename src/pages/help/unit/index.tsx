import { useRouter } from 'next/router';

const HelpUnit = () => {
  const router = useRouter();

  return <div>{router.query && router.query.id}</div>;
};

export default HelpUnit;
