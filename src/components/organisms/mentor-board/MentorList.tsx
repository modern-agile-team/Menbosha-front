import MentorCard from '@/components/molecules/mentor-board-elements/MentorCard';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import * as S from './styled';
import USER from '@/apis/user';
import { MentorType } from '@/types/user';

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
  const [getMentorData, setMentorData] = useState<MentorType[]>([]);
  const [totalPage, setPage] = useState(0);
  //mock api요청
  const getMockingDataApi = async () => {
    const res = await axios.get('/api/mento');
    setMockingData(res.data);
  };

  const getPage = async () => {
    const response = await USER.getMentorListPage();
    setPage(response.totalPage);
  };

  const getMentorListApi = async () => {
    const response = await USER.getMentorList(totalPage);
    setMentorData(response);
  };

  useEffect(() => {
    getPage();
  }, []);

  useEffect(() => {
    // getMockingDataApi();
    if (totalPage) {
      getMentorListApi();
    }
  }, [totalPage]);

  return (
    <S.MentoCardContainer>
      {getMentorData.map((data: MentorType) => {
        const temp = {
          id: data.id,
          name: data.name,
          userImage: data.userImage.imageUrl,
          introduce: data.userIntro.introduce,
          mainField: data.userIntro.mainField,
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
