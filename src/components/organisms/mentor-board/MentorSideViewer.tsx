import { SideViewerAtom } from '@/recoil/atoms/SideViewerAtom';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled, { css } from 'styled-components';

interface CardType {
  id: number;
  name: string;
  email: string;
  userImage: string;
  rank: number;
  phone: string;
  w_category: string;
  a_category: string;
}

interface SlideType {
  slide: () => void;
}

const MentorSideViewer = ({ slide }: SlideType) => {
  const [data, setData] = useState(require('/public/dummy/user.json'));
  const [sideViewer, setSideViewer] = useRecoilState(SideViewerAtom);
  const [getMentoUnit, setMentoUnit] = useState<CardType>();

  useEffect(() => {
    const temp = data.user.filter((data: any) => data.id === sideViewer.id);
    console.log(temp[0]);
    setMentoUnit(temp[0]);
  }, [sideViewer.id]);

  return (
    <SideViewerWarpper>
      <div onClick={slide}>X</div>
      {getMentoUnit && (
        <div>
          <TextBox color="#C63D2F">{getMentoUnit.name}</TextBox>
          <div>{getMentoUnit.rank}</div>
        </div>
      )}
    </SideViewerWarpper>
  );
};

export default MentorSideViewer;

const SideViewerWarpper = styled.div`
  width: 1000px;
  border: 4px solid #fe9;
`;

interface BoxType {
  color?: string;
  size?: number;
}

const TextBox = styled.div<BoxType>`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size}px;
`;
