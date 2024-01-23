import HelpCard from '@/components/molecules/help-board-elements/HelpCard';
import * as S from './styled';
import { useEffect, useState } from 'react';
import { PullingUpType } from '@/types/help';
import HELP from '@/apis/help';
import { useRecoilValue } from 'recoil';
import { CategoryFilterAtom } from '@/recoil/atoms/CategorySelectAtom';

const HelpPullingBoardList = () => {
  const [getPullingData, setPullingData] = useState<PullingUpType[]>([]);
  const filterCategory = useRecoilValue(CategoryFilterAtom);

  const getPullingUpApi = async () => {
    const response = await HELP.getPullingUp(filterCategory);
    const temp = response.filter((data: any, idx: number) => idx < 5);
    setPullingData(temp);
  };

  useEffect(() => {
    getPullingUpApi();
  }, []);

  /**필터링 되면 재 렌더링 */
  useEffect(() => {
    getPullingUpApi();
  }, [filterCategory]);

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
          <div>
            {data.pullingUp !== null && (
              <S.HelpCardWrapper key={data.id}>
                <HelpCard {...temp} />
              </S.HelpCardWrapper>
            )}
          </div>
        );
      })}
    </S.HelpCardContainer>
  );
};

export default HelpPullingBoardList;
