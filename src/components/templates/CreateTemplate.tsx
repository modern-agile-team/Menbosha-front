import { useRecoilValue } from 'recoil';
import { ContainerWrapper } from '../common/globalStyled/styled';
import MainPageHeader from '../common/header/MainPageHeader';
import CreateBody from '../organisms/create-board/CreateBody';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const CreateTemplate = () => {
  const loginState = useRecoilValue(LoginStateAtom);
  const router = useRouter();

  useEffect(() => {
    if (!loginState) {
      alert('로그인이 필요합니다.');
      router.push('/');
    }
  }, []);
  return (
    <div>
      <MainPageHeader />
      <ContainerWrapper>
        <CreateBody />
      </ContainerWrapper>
    </div>
  );
};

export default CreateTemplate;
