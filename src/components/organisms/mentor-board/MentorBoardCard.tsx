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

const MentorBoardList = ({ slide }: SlideType) => {
  //api요청
  const [getMockingData, setMockingData] = useState<any>(null);
  const [data, setData] = useState(require('/public/dummy/user.json'));
  const [sideViewer, setSideViewer] = useRecoilState(SideViewerAtom);

  const getMockingDataApi = () => {
    axios.get('/api/mento').then((res) => setMockingData(res.data));
  };

  useEffect(() => {
    getMockingDataApi();
  }, []);

  return (
    <MentorCardContainer side={sideViewer.isSide}>
      {data.user.map((data: any) => {
        const temp = {
          id: data.id,
          name: data.name,
          email: data.email,
          userImage: data.userImage,
          rank: data.rank,
          phone: data.phone,
          w_category: data.w_category,
          a_category: data.a_category,
        };
        return (
          <div onClick={slide} key={data.id}>
            <MentorCard {...temp} />
          </div>
        );
      })}
    </MentorCardContainer>
  );
};

export default MentorBoardList;

interface ViewerType {
  side: boolean;
}

const MentorCardContainer = styled.div<ViewerType>`
  border: 2px solid #c12;
  display: flex;
  justify-content: left;
  /* margin-right: ${({ side }) => (side ? '2500px' : '0')}; */
  min-height: 500px;
  width: 1100px;
  flex-wrap: wrap;
`;
