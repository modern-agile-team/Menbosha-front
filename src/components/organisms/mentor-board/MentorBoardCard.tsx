import MentorCard from '@/components/molecules/mentor-board-elements/MentorCard';
import { SideViewerAtom } from '@/recoil/atoms/SideViewerAtom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { server } from '@/mocks/node';

interface SlideType {
  slide: () => void;
}

const MentoBoardList = ({ slide }: SlideType) => {
  //api요청
  const [getMockingData, setMockingData] = useState<any>(null);

  const getMockingDataApi = async () => {
    const res = await axios.get('/api/mento');
    setMockingData(res.data);
  };

  useEffect(() => {
    getMockingDataApi();
  }, []);

  return (
    <MentoCardContainer>
      {getMockingData &&
        getMockingData.map((data: any) => {
          const temp = {
            id: data.id,
            name: data.name,
            introduct: data.introduct,
            mainField: data.mainField,
          };
          return (
            <MentorCardWarpper onClick={slide} key={data.id}>
              <MentorCard {...temp} />
            </MentorCardWarpper>
          );
        })}
    </MentoCardContainer>
  );
};

export default MentoBoardList;

const MentoCardContainer = styled.div`
  border: 2px solid #c12;
  display: flex;
  justify-content: left;
  min-height: 500px;
  width: 1512px;
  flex-wrap: wrap;
`;

const MentorCardWarpper = styled.div`
  & > * {
    &:nth-of-type(1n),
    &:nth-of-type(1) {
      margin: 0px 14px 118px 0px;
    }
    &:nth-of-type(5n),
    :nth-of-type(5) {
      margin: 0px 0px 118px 14px;
    }
    &:not(
        :nth-of-type(1n),
        :nth-of-type(5n),
        :nth-of-type(1),
        :nth-of-type(5)
      ) {
      margin: 0px 14px 118px 14px;
    }
  }
`;
