import MENTOR from '@/apis/mentor';
import { categoryList } from '@/components/common/category/categoryList';
import {
  ContainerWrapper,
  FlexBox,
  ImageBox,
} from '@/components/common/globalStyled/styled';
import MentorBoardUnitBody from '@/components/molecules/mentor-board-unit-elements/MentorBoardUnitBody';
import MentorBoardUnitBottom from '@/components/molecules/mentor-board-unit-elements/MentorBoardUnitBottom';
import MentorBoardUnitHead from '@/components/molecules/mentor-board-unit-elements/MentorBoardUnitHead';
import { MentorBoardUnitPropsType, MentorBoardUnitType } from '@/types/mentor';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const MentorBoardUnit = ({ id }: MentorBoardUnitPropsType) => {
  const [getUnitData, setUnitData] = useState<MentorBoardUnitType>();
  const category = categoryList.find(
    (data) => data.id === getUnitData?.categoryId,
  )?.category;

  const getMentorBoardUnitApi = async () => {
    const response = await MENTOR.getMentorBoardUnit(id);
    setUnitData(response);
  };

  useEffect(() => {
    getMentorBoardUnitApi();
  }, []);

  return (
    <div>
      {getUnitData && (
        <div>
          <MentorBoardUnitHead
            id={getUnitData.id}
            head={getUnitData.head}
            body={getUnitData.body}
            helpMeBoardImages={getUnitData.mentorBoardImages}
            userImage={getUnitData.user.userImage.imageUrl}
            userName={getUnitData.user.name}
            category={category as string}
            createdAt={getUnitData.createdAt}
          />
          <MentorBoardUnitBody
            image={getUnitData.mentorBoardImages}
            body={getUnitData.body}
          />
          <MentorBoardUnitBottom id={getUnitData.user.userImage.userId} />
        </div>
      )}
    </div>
  );
};

export default MentorBoardUnit;
