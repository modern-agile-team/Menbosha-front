import { ContainerWrapper } from '@/components/common/globalStyled/styled';
import SubPageHeader from '@/components/common/header/SubPageHeader';
import MentorBoardUnit from '@/components/organisms/mentor-board/MentorBoardUnit';
import { useRouter } from 'next/router';

const MentorBoardUnitTemplate = () => {
  const router = useRouter();

  return (
    <div>
      <SubPageHeader />
      <ContainerWrapper>
        {router.isReady && <MentorBoardUnit id={Number(router.query.id)} />}
      </ContainerWrapper>
    </div>
  );
};

export default MentorBoardUnitTemplate;
