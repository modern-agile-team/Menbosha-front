import { ContainerWrapper } from '@/components/common/globalStyled/styled';
import MainPageHeader from '@/components/common/header/MainPageHeader';
import MentorUnit from '@/components/organisms/mentor/MentorUnit';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const UserpageTemplate = () => {
  const router = useRouter();

  return (
    <div>
      <MainPageHeader />
      <ContainerWrapper>
        {router.isReady && <MentorUnit id={Number(router.query.id)} />}
      </ContainerWrapper>
    </div>
  );
};

export default UserpageTemplate;
