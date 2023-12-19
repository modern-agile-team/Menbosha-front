import MentorCard from '@/components/molecules/mentor-board-elements/MentorCard';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import * as S from './styled';

type MentorListType = {
  id: number;
  name: string;
  image: string;
  introduct: string;
  mainField: string;
};

interface SlideType {
  slide: () => void;
}

const MentorBoardList = ({ slide }: SlideType) => {
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
          introduct: data.introduct,
          mainField: data.mainField,
        };
        return (
          <S.MentorCardWarpper onClick={slide} key={data.id}>
            <MentorCard {...temp} />
          </S.MentorCardWarpper>
        );
      })}
    </S.MentoCardContainer>
  );
};

export default MentorBoardList;
