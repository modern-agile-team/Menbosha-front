import HelpCard from '@/components/molecules/help-board-elements/HelpCard';
import * as S from './styled';
import { useEffect, useState } from 'react';
import { PullingUpType } from '@/types/help';
import HELP from '@/apis/help';

const HelpPullingBoardList = () => {
  const [getPullingData, setPullingData] = useState<PullingUpType[]>([]);

  const getPullingUpApi = async () => {
    const response = await HELP.getPullingUp();
    const temp = response.filter((data: any, idx: number) => idx < 5);
    setPullingData(temp);
  };

  useEffect(() => {
    getPullingUpApi();
  }, []);

  return (
    <S.HelpCardContainer>
      {getPullingData.map((data: any) => {
        const temp = {
          id: data.id,
          name: data.user.name,
          userImage: data.user.userImage.imageUrl,
          image:
            data.helpMeBoardImages.length > 0
              ? data.helpMeBoardImages[0].imageUrl
              : '',
          head: data.head,
          body: data.body,
          createdAt: data.pullingUp,
        };
        return (
          <S.HelpCardWrapper key={data.id}>
            <HelpCard {...temp} />
          </S.HelpCardWrapper>
        );
      })}
    </S.HelpCardContainer>
  );
};

export default HelpPullingBoardList;
