import MENTOR from '@/apis/mentor';
import MentorBoardUnitBody from '@/components/molecules/mentor-board-unit-elements/MentorBoardUnitBody';
import MentorBoardUnitBottom from '@/components/molecules/mentor-board-unit-elements/MentorBoardUnitBottom';
import MentorBoardUnitHead from '@/components/molecules/mentor-board-unit-elements/MentorBoardUnitHead';
import { MentorBoardUnitPropsType, MentorBoardUnitType } from '@/types/mentor';
import { useEffect, useState } from 'react';
import * as S from './styled';
import { useRouter } from 'next/router';

const MentorBoardUnit = ({ id }: MentorBoardUnitPropsType) => {
  const router = useRouter();
  const [getUnitData, setUnitData] = useState<MentorBoardUnitType>();

  const getMentorBoardUnitApi = async () => {
    const response = await MENTOR.getMentorBoardUnit(id);
    setUnitData(response);
  };

  /**돌아가기 버튼 */
  const handlePrevBtn = () => {
    router.push({
      pathname: `/mentor/board`,
    });
  };

  console.log(getUnitData);

  useEffect(() => {
    getMentorBoardUnitApi();
  }, []);

  return (
    <S.MentorBoardUnitContainer>
      <div>
        <img
          onClick={handlePrevBtn}
          src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/prevBtn.svg"></img>
      </div>
      {getUnitData && (
        <div>
          <MentorBoardUnitHead
            id={getUnitData.id}
            head={getUnitData.head}
            body={getUnitData.body}
            userImage={getUnitData.user.userImage.imageUrl}
            userName={getUnitData.user.name}
            categoryId={getUnitData.categoryId}
            createdAt={getUnitData.createdAt}
          />
          <MentorBoardUnitBody
            id={getUnitData.id}
            image={getUnitData.mentorBoardImages}
            body={getUnitData.body}
            likes={getUnitData.mentorBoardLikes}
            isLike={getUnitData.isLike}
          />
          <MentorBoardUnitBottom id={getUnitData.user.userImage.userId} />
        </div>
      )}
    </S.MentorBoardUnitContainer>
  );
};

export default MentorBoardUnit;
