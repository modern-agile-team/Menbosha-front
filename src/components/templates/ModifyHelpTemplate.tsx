import { useRouter } from 'next/router';
import SubPageHeader from '../common/header/SubPageHeader';
import ModifyHelpBoard from '../organisms/modify-help-board/ModifyHelpBoard';
import { useEffect, useState } from 'react';
import { HelpUnitType } from '@/types/help';

const ModifyHelpTemplate = () => {
  const [modifyInfo, setModifyInfo] = useState<HelpUnitType>();
  const router = useRouter();

  const getRouterInfo = () => {
    const temp = router.isReady && JSON.parse(router.query.data as string);
    setModifyInfo(temp);
  };

  useEffect(() => {
    getRouterInfo();
  }, []);

  console.log(modifyInfo);
  return (
    <div>
      <SubPageHeader />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100vw',
        }}>
        {modifyInfo && (
          <ModifyHelpBoard
            id={modifyInfo.id}
            head={modifyInfo.head}
            body={modifyInfo.body}
            image={modifyInfo.helpMeBoardImages}
            categoryId={modifyInfo.categoryId}
          />
        )}
      </div>
    </div>
  );
};

export default ModifyHelpTemplate;
