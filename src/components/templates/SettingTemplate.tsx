import AUTH from '@/apis/oauth';
import SubPageHeader from '@/components/common/header/SubPageHeader';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

const SettingTemplate = () => {
  const [provider, setProvider] = useState('');
  const setLoginState = useSetRecoilState(LoginStateAtom);
  const router = useRouter();

  const handleWithdrawal = async () => {
    if (confirm('정말로 회원탈퇴를 진행하시겠습니까?')) {
      await AUTH.unlinkMemberApi(provider);
      window.localStorage.removeItem('accessToken');
      window.localStorage.removeItem('refreshToken');
      window.localStorage.removeItem('provider');
      setLoginState(false);
      alert('회원탈퇴 되었습니다.');
      router.push(`/main`);
    }
  };

  useEffect(() => {
    const provider = window.localStorage.getItem('provider');
    provider && setProvider(provider);
  }, []);

  return (
    <div>
      <SubPageHeader />
      <div>계정설정</div>
      <div></div>
      <div>
        <div>개인 프로필 설정</div>
        <div onClick={handleWithdrawal}>회원탈퇴</div>
        <div>알림설정</div>
      </div>
      <div>멘보샤 계정 약관</div>
      <div>개인정보 수집 및 동의</div>
      <div>개인정보 수집 및 동의</div>
      <div>프로필 정보 추가 수집 동의</div>
      <div>개인정보 이용현황</div>
      <div>개인정보 이용현황을 알 수 있습니다.</div>
      <div>개인정보 이용현황</div>
    </div>
  );
};

export default SettingTemplate;
