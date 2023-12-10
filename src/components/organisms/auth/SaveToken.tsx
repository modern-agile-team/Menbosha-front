import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';
import AUTHS from '@/apis/oauth';

interface Company {
  provider: string;
}

const SaveToken = ({ provider }: Company) => {
  const router = useRouter();
  const setIsLogin = useSetRecoilState(LoginStateAtom);

  const getToken = async () => {
    try {
      const code = new URL(window.location.href).searchParams.get('code');

      // const result = await AUTHS.getToken(provider, code as string);
      // localStorage.setItem('accessToken', result.accessToken);
      // localStorage.setItem('refreshToken', result.refreshToken);
      localStorage.setItem('provider', provider);
      setIsLogin(true);
    } catch (err) {
      console.log(err);
    } finally {
      router.push('/');
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
