import MENTOR from '@/apis/mentor';
import { categoryList } from '@/components/common/category/categoryList';
import {
  ContainerWrapper,
  FlexBox,
  ImageBox,
} from '@/components/common/globalStyled/styled';
import { MentorBoardUnitPropsType, MentorBoardUnitType } from '@/types/mentor';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const MentorBoardUnit = ({ id }: MentorBoardUnitPropsType) => {
  const [getUnitData, setUnitData] = useState<MentorBoardUnitType>();
  const category = categoryList.find(
    (data) => data.id === getUnitData?.categoryId,
  );

  const getMentorBoardUnitApi = async () => {
    const response = await MENTOR.getMentorBoardUnit(id);
    setUnitData(response);
  };

  useEffect(() => {
    getMentorBoardUnitApi();
  }, []);

  return (
    <div>
      <div>{getUnitData?.head}</div>
      <FlexBox type="flex">
        <ImageBox src={getUnitData?.user.userImage.imageUrl as string} />
        <div>
          <div>{getUnitData?.user.name}</div>
          <div>{category?.category}</div>
          <div>{getUnitData?.createdAt.slice(0, 10)}</div>
          <div>
            <div>수정버튼</div>
            <div>삭제버튼</div>
          </div>
        </div>
      </FlexBox>
      <div>이미지들어올자리</div>
      <div>{getUnitData?.body}</div>
      <FlexBox type="flex">
        <div>
          <ImageBox src={getUnitData?.user.userImage.imageUrl as string} />
          <div>
            <div>랭크</div>
            <div>이름</div>
          </div>
        </div>
      </FlexBox>
    </div>
  );
};

export default MentorBoardUnit;
