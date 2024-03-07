import MENTOR from '@/apis/mentor';
import MentorBoardUnitBody from '@/components/molecules/mentor-board-unit-elements/MentorBoardUnitBody';
import MentorBoardUnitBottom from '@/components/molecules/mentor-board-unit-elements/MentorBoardUnitBottom';
import MentorBoardUnitHead from '@/components/molecules/mentor-board-unit-elements/MentorBoardUnitHead';
import { MentorBoardUnitPropsType, MentorBoardUnitType } from '@/types/mentor';
import { useEffect, useState } from 'react';
import * as S from './styled';
import { useRouter } from 'next/router';
import MentorBoardUnitBodySkeleton from '@/components/molecules/mentor-board-unit-elements/MentorBoardUnitBodySkeleton';
import MentorBoardUnitHeadSkeleton from '@/components/molecules/mentor-board-unit-elements/MentorBoardUnitHeadSkeleton';

const MentorBoardUnit = ({ id }: MentorBoardUnitPropsType) => {
  const router = useRouter();
  const [getUnitData, setGetUnitData] = useState<MentorBoardUnitType>();
  const [load, setLoad] = useState(false);

  const getMentorBoardUnitApi = async () => {
    const response = await MENTOR.getMentorBoardUnit(id);
    setGetUnitData(response);
    setLoad(true);
  };

  console.log(getUnitData);

  /**돌아가기 버튼 */
  const handleBack = () => {
    router.back();
  };

  useEffect(() => {
    getMentorBoardUnitApi();
  }, []);

  return (
    <S.MentorBoardUnitContainer>
      <div>
        <img
          onClick={handleBack}
          src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/prevBtn.svg"
          alt="이전버튼"
        />
      </div>
      {getUnitData && (
        <S.MentorBoardContentContainer>
          {load ? (
            <>
              <MentorBoardUnitHead {...getUnitData} />
              <MentorBoardUnitBody
                userId={getUnitData.user.userImage.userId}
                id={getUnitData.id}
                image={getUnitData.mentorBoardImages}
                body={getUnitData.body}
                likes={getUnitData.mentorBoardLikes}
                isLike={getUnitData.isLike}
              />
              <MentorBoardUnitBottom id={getUnitData.user.userImage.userId} />
            </>
          ) : (
            <>
              <MentorBoardUnitHeadSkeleton />
              <MentorBoardUnitBodySkeleton />
            </>
          )}
        </S.MentorBoardContentContainer>
      )}
    </S.MentorBoardUnitContainer>
  );
};

export default MentorBoardUnit;
