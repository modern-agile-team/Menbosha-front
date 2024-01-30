import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';
import AUTH from '@/apis/oauth';

interface Company {
  provider: string;
}

const SaveToken = ({ provider }: Company) => {
  const router = useRouter();
  const setIsLogin = useSetRecoilState(LoginStateAtom);

  const getToken = async () => {
    try {
      const code = new URL(window.location.href).searchParams.get('code');

      const result = await AUTH.getToken(provider, code as string);
      localStorage.setItem(
        'accessToken',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhY2Nlc3NUb2tlbiIsInVzZXJJZCI6MzIsImV4cCI6MTcwNjA3NDIzNSwiaWF0IjoxNzA2MDc0MjM1fQ.G3xijFc6lhh1Q6AZH54yRwwiS_vpusccisb4ix3-3WY',
      );
      localStorage.setItem(
        'refreshToken',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyZWZyZXNoVG9rZW4iLCJ1c2VySWQiOjMyLCJleHAiOjE3MTM4NTA0MTEsImlhdCI6MTcwNjA3NDQxMX0.0QkaqJ_bJZNN87jCwX6DrKXiK6XOgTPUcX31QA1GH1c',
      );
      localStorage.setItem('provider', provider);
      setIsLogin(true);
    } catch (err) {
      console.log(err);
    } finally {
      const currentUrl = window.sessionStorage.getItem('CURRENT_URL');
      router.push(currentUrl as string);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <div>
      <div>로딩중...</div>
    </div>
  );
};

export default SaveToken;
