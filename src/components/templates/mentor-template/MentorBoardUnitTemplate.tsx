import { ContainerWrapper } from '@/components/common/globalStyled/styled';
import MainPageHeader from '@/components/common/header/MainPageHeader';
import MentorBoardUnit from '@/components/organisms/mentor-board/MentorBoardUnit';
import { useRouter } from 'next/router';

const MentorBoardUnitTemplate = () => {
  const router = useRouter();

  return (
    <div>
      <MainPageHeader />
      <ContainerWrapper>
        {router.isReady && <MentorBoardUnit id={Number(router.query.id)} />}
      </ContainerWrapper>
    </div>
  );
};

export default MentorBoardUnitTemplate;
