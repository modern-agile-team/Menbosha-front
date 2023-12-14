import HelpCard from '@/components/molecules/help-board-elements/HelpCard';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const HelpBoardCardList = () => {
  //api요청

  return (
    <HelpCardWarpper>
      <HelpCardContainer>
        {/* {data.helpBoard.map((data: any) => {
          const temp = {
            id: data.id,
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
        })} */}
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
