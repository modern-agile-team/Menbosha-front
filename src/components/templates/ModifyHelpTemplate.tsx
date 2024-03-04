import { useRouter } from 'next/router';
import MainPageHeader from '../common/header/MainPageHeader';
import ModifyHelpBoard from '../organisms/modify-help-board/ModifyHelpBoard';
import { useEffect, useState } from 'react';
import { HelpUnitType } from '@/types/help';
import { ContainerWrapper } from '../common/globalStyled/styled';

const ModifyHelpTemplate = () => {
  const [modifyInfo, setModifyInfo] = useState<HelpUnitType>();
  const [modifyLocation, setModifyLocation] = useState('');
  const router = useRouter();

  const getRouterInfo = () => {
    const temp = router.isReady && JSON.parse(router.query.data as string);
    setModifyInfo(temp.data);
    setModifyLocation(temp.location);
  };

  useEffect(() => {
    getRouterInfo();
  }, []);

  return (
    <div>
      <MainPageHeader />
      <ContainerWrapper>
        {modifyInfo && (
          <ModifyHelpBoard
            location={modifyLocation}
            id={modifyInfo.id}
            head={modifyInfo.head}
            body={modifyInfo.body}
            image={modifyInfo.helpMeBoardImages}
            categoryId={modifyInfo.categoryId}
          />
        )}
      </ContainerWrapper>
    </div>
  );
};

export default ModifyHelpTemplate;
