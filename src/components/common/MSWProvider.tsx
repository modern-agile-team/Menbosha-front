import { PropsWithChildren, useEffect, useState } from 'react';

const isAPIMockingMode = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled';

const MSWProvider = ({ children }: PropsWithChildren) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      if (isAPIMockingMode) {
        const init = await import('@/mocks/initMSW');
        await init.initMSW();

        setIsReady(true);
      }
    };

    if (!isReady) init();
  }, [isReady]);

  if (isAPIMockingMode && !isReady) return null;
  return <>{children}</>;
};

export default MSWProvider;
