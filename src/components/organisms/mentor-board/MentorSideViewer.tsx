import { SideViewerAtom } from '@/recoil/atoms/SideViewerAtom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled, { css } from 'styled-components';

interface SlideType {
  next: () => void;
  prev: () => void;
}

const MentorSideViewer = ({ next, prev }: SlideType) => {
  const [getMentoUnit, setMentoUnit] = useState<any>(null);
  const [sideViewer, setSideViewer] = useRecoilState(SideViewerAtom);

  //유저 모킹
  const getMentoUserApi = async () => {
    const res = await axios.get(`/api/mento-unit`, {
      params: {
        id: sideViewer,
      },
    });
    setMentoUnit(res.data[0]);
  };

  useEffect(() => {
    //id가 있을 때 api요청
    sideViewer && getMentoUserApi();
  }, [sideViewer]);

  useEffect(() => {
    console.log(getMentoUnit);
  });

  return (
    <SideViewerWarpper>
      <div onClick={prev}>이전</div>
      <div onClick={next}>다음</div>
      {getMentoUnit && (
        <div>
          <TextBox color="#C63D2F" size={30}>
            {getMentoUnit.name}
          </TextBox>
          <div>
            <div>{getMentoUnit.image}</div>
            <div></div>
          </div>
        </div>
      )}
    </SideViewerWarpper>
  );
};

export default MentorSideViewer;

const SideViewerWarpper = styled.div`
  min-width: 1100px;
  width: 1512px;
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
