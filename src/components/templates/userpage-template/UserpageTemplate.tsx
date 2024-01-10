import { ContainerWrapper } from '@/components/common/globalStyled/styled';
import SubPageHeader from '@/components/common/header/SubPageHeader';
import MentorUnit from '@/components/organisms/mentor/MentorUnit';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const UserpageTemplate = () => {
  const router = useRouter();

  return (
    <div>
      <SubPageHeader />
      <ContainerWrapper>
        {router.isReady && <MentorUnit id={Number(router.query.id)} />}
      </ContainerWrapper>
    </div>
  );
};

export default UserpageTemplate;
