import { useRouter } from 'next/router';
import MainPageHeader from '../../common/header/MainPageHeader';
import ModifyHelpBoard from '../../organisms/modify-help-board/ModifyHelpBoard';
import { useEffect, useState } from 'react';
import { ContainerWrapper } from '../../common/globalStyled/styled';
import { MentorBoardUnitType } from '@/types/mentor';

const ModifyMentorTemplate = () => {
  const [modifyInfo, setModifyInfo] = useState<MentorBoardUnitType>();
  const router = useRouter();

  const getRouterInfo = () => {
    const temp = router.isReady && JSON.parse(router.query.data as string);
    setModifyInfo(temp.data);
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
            location={'mentor'}
            id={modifyInfo.id}
            head={modifyInfo.head}
            body={modifyInfo.body}
            image={modifyInfo.mentorBoardImages}
            categoryId={modifyInfo.categoryId}
          />
        )}
      </ContainerWrapper>
    </div>
  );
};

export default ModifyMentorTemplate;
