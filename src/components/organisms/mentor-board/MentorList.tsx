import MentorCard from '@/components/molecules/mentor-board-elements/MentorCard';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import * as S from './styled';

type MentorListType = {
  id: number;
  name: string;
  image: string;
  introduction: string;
  mainField: string;
};

interface SlideType {
  slide: () => void;
}

const MentorList = ({ slide }: SlideType) => {
  const [getMockingData, setMockingData] = useState<MentorListType[]>([]);
  //api요청
  const getMockingDataApi = async () => {
    const res = await axios.get('/api/mento');
    setMockingData(res.data);
  };

  useEffect(() => {
    getMockingDataApi();
  }, []);

  return (
    <S.MentoCardContainer>
      {getMockingData.map((data: any) => {
        const temp = {
          id: data.id,
          name: data.name,
          image: data.image,
          introduction: data.introduction,
          mainField: data.mainField,
        };
        return (
          <S.MentorCardWrapper onClick={slide} key={data.id}>
            <MentorCard {...temp} />
          </S.MentorCardWrapper>
        );
      })}
    </S.MentoCardContainer>
  );
};

export default MentorList;
