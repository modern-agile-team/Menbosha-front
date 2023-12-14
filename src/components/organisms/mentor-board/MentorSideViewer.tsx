import { SideViewerAtom } from '@/recoil/atoms/SideViewerAtom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled, { css } from 'styled-components';

interface SlideType {
  slide: () => void;
}

const MentorSideViewer = ({ slide }: SlideType) => {
  const [getMentoUnit, setMentoUnit] = useState<any>(null);
  const [sideViewer, setSideViewer] = useRecoilState(SideViewerAtom);

  //유저 모킹
  const getMentoUserApi = async () => {
    const res = await axios.get(`/api/mento-unit`, {
      params: {
        id: sideViewer,
      },
    });
    setMentoUnit(res.data);
  };

  useEffect(() => {
    sideViewer && getMentoUserApi();
  }, [sideViewer]);

  return (
    <SideViewerWarpper>
      <div onClick={slide}>X</div>
      {getMentoUnit && (
        <div>
          <TextBox color="#C63D2F">{getMentoUnit.name}</TextBox>
          <div>{getMentoUnit.introduct}</div>
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
