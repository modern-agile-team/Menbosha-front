import HelpCard from '@/components/molecules/help-board-elements/HelpCard';
import * as S from './styled';
import { useEffect, useState } from 'react';
import { HelpListApiType, HelpListParamsType } from '@/types/help';
import HELP from '@/apis/help';
import { FilterPropsType } from '@/components/common/category/Category';
import SkeletonUI from '@/components/common/skeletonUI/SkeletonUI';

const HelpPullingBoardList = ({
  filterCategoryId,
}: Partial<FilterPropsType>) => {
  const [getPullingData, setGetPullingData] = useState<
    HelpListApiType['helpMeBoardWithUserAndImagesItemDto']
  >([]);
  const [load, setLoad] = useState(false);

  const getPullingUpApi = async () => {
    const params: HelpListParamsType = {
      categoryId: filterCategoryId as number,
      loadOnlyPullingUp: true,
      sortOrder: 'DESC',
      orderField: 'pullingUp',
      pageSize: 4,
    };
    const response = await HELP.getHelpBoardPagination(params);
    setGetPullingData(response.helpMeBoardWithUserAndImagesItemDto);
    setLoad(true);
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
            image: data.imageUrl ?? '',
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
        <>{load && <div>끌어올린 게시글이 존재하지 않습니다.</div>}</>
      )}
      <>{!load && <SkeletonUI width="23.6%" height="25vh" count={4} />}</>
    </S.HelpCardContainer>
  );
};

export default HelpPullingBoardList;
