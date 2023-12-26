import { useRouter } from 'next/router';
import { useCallback } from 'react';

type QueryValue = string | string[];

interface QueryParams {
  [key: string]: QueryValue | QueryValue[];
}

const useNavigator = () => {
  const router = useRouter();

  const replaceNavigate = useCallback(
    (to: string, query?: QueryParams) => {
      const queryString = query
        ? `?${new URLSearchParams(query as Record<string, string>).toString()}`
        : '';

      router.replace(`${to}${queryString}`);
    },
    [router],
  );

  return replaceNavigate;
};

export default useNavigator;
