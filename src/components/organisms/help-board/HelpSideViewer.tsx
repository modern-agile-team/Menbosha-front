import { SideViewerAtom } from '@/recoil/atoms/SideViewerAtom';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

interface CardType {
  id: number;
  userId: number;
  userName: string;
  userImage: string;
  image: string;
  head: string;
  body: string;
  create_at: string;
}

const HelpSideViewer = () => {
  const [getHelpUnit, setHelpUnit] = useState<CardType>();

  return (
    <SideViewerWarpper>
      {getHelpUnit && (
        <div>
          <div>{getHelpUnit.userName}</div>
          <div>{getHelpUnit.create_at}</div>
        </div>
      )}
    </SideViewerWarpper>
  );
};

export default HelpSideViewer;

const SideViewerWarpper = styled.div`
  width: 1300px;
  background-color: #fff;
`;
