import HelpCard from '@/components/molecules/help-board-elements/HelpCard';
import * as S from './styled';
import { useEffect, useState } from 'react';
import {
  HelpListApiType,
  HelpListParamsType,
  PullingUpType,
} from '@/types/help';
import HELP from '@/apis/help';
import { useRecoilValue } from 'recoil';
import { CategoryFilterAtom } from '@/recoil/atoms/CategorySelectAtom';

const HelpPullingBoardList = () => {
  const [getPullingData, setPullingData] = useState<
    HelpListApiType['helpMeBoardWithUserAndImagesItemDto']
  >([]);
  const filterCategory = useRecoilValue(CategoryFilterAtom);

  const getPullingUpApi = async () => {
    const params: HelpListParamsType = {
      categoryId: filterCategory,
      loadOnlyPullingUp: true,
      sortOrder: 'DESC',
      orderField: 'pullingUp',
      pageSize: 4,
    };
    const response = await HELP.getHelpBoardPagination(params);
    setPullingData(response.helpMeBoardWithUserAndImagesItemDto);
  };

  useEffect(() => {
    getPullingUpApi();
  }, []);

  /**필터링 되면 재 렌더링 */
  useEffect(() => {
    getPullingUpApi();
  }, [filterCategory]);

  return (
    <S.PullingUpCardContainer>
      {getPullingData.map((data) => {
        const temp = {
          id: data.id,
          name: data.user.name,
          userImage: data.user.userImage.imageUrl,
          image: data.imageUrl !== null ? data.imageUrl : '',
          head: data.head,
          body: data.body,
          createdAt: data.pullingUp,
          userId: data.userId,
          categoryId: data.categoryId,
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
    </S.PullingUpCardContainer>
  );
};

export default HelpPullingBoardList;
