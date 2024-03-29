import { useRouter } from 'next/router';
import { useCallback } from 'react';

type QueryValue = string | string[];

interface QueryParams {
  [key: string]: QueryValue | QueryValue[];
}

const useReplace = () => {
  const router = useRouter();

  const replaceNavigate = useCallback(
    (to: string, query?: QueryParams) => {
      const queryString = query
        ? `?${new URLSearchParams(query as Record<string, string>).toString()}`
        : '';

      router.replace(`${to}${queryString}`, undefined, { shallow: true });
    },
    [router],
  );

  return replaceNavigate;
};

export default useReplace;
