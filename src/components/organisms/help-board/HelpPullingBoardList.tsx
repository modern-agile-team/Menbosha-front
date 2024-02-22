import HelpCard from '@/components/molecules/help-board-elements/HelpCard';
import * as S from './styled';
import { useEffect, useState } from 'react';
import {
  HelpListApiType,
  HelpListParamsType,
  PullingUpType,
} from '@/types/help';
import HELP from '@/apis/help';
import { FilterPropsType } from '@/components/common/category/Category';

const HelpPullingBoardList = ({
  filterCategoryId,
}: Partial<FilterPropsType>) => {
  const [getPullingData, setPullingData] = useState<
    HelpListApiType['helpMeBoardWithUserAndImagesItemDto']
  >([]);

  const getPullingUpApi = async () => {
    const params: HelpListParamsType = {
      categoryId: filterCategoryId as number,
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
  }, [filterCategoryId]);

  return (
    <S.HelpCardContainer>
      {getPullingData.length !== 0 ? (
        getPullingData.map((data) => {
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
            <>
              {data.pullingUp !== null && (
                <S.HelpCardWrapper key={data.id}>
                  <HelpCard {...temp} />
                </S.HelpCardWrapper>
              )}
            </>
          );
        })
      ) : (
        <div>끌올된 게시물이 없습니다.</div>
      )}
    </S.HelpCardContainer>
  );
};

export default HelpPullingBoardList;
