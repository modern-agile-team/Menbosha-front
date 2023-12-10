import HelpCard from '@/components/molecules/auth/help-board-element/HelpCard';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const HelpBoardCardList = () => {
  const [data, setData] = useState(require('/public/dummy/help.json'));
  useEffect(() => {
    setData(require('/public/dummy/help.json'));
  });
  console.log(data);

  return (
    <HelpCardWarpper>
      <HelpCardContainer>
        {data.helpBoard.map((data: any) => {
          const temp = {
            name: data.userName,
            userImage: data.userImage,
            image: data.image,
            head: data.head,
            body: data.body,
            createAt: data.create_at,
          };
          return (
            <div key={data.id}>
              <HelpCard {...temp} />
            </div>
          );
        })}
      </HelpCardContainer>
    </HelpCardWarpper>
  );
};

export default HelpBoardCardList;

const HelpCardWarpper = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #448;
`;

const HelpCardContainer = styled.div`
  border: 2px solid #c12;
  display: flex;
  justify-content: left;
  min-height: 500px;
  width: 1100px;
  flex-wrap: wrap;
`;
