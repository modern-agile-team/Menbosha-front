import HELP from '@/apis/help';
import HelpCard from '@/components/molecules/help-board-elements/HelpCard';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './styled';
import { HelpListApiType, HelpListParamsType } from '@/types/help';
import { FilterPropsType } from '@/components/common/category/Category';
import SkeletonUI from '@/components/common/skeletonUI/SkeletonUI';

const HelpBoardCardList = ({ filterCategoryId, lastPage }: FilterPropsType) => {
  const [getList, setGetList] = useState<
    HelpListApiType['helpMeBoardWithUserAndImagesItemDto']
  >([]);
  const [totalPage, setTotalPage] = useState(lastPage); //페이지 수
  const [page, setPage] = useState(1);
  const obsRef = useRef<HTMLDivElement>(null); //옵저버 state
  const [load, setLoad] = useState(false);
  const preventRef = useRef(true); //옵저버 중복 방지
  const [getClient, setGetClient] = useState(false);
  useEffect(() => {
    setGetClient(true);
  }, []);

  //옵저버 생성
  useEffect(() => {
    const observer = new IntersectionObserver(handleObs, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, [obsRef, getList]);

  //무한스크롤 로드
  useEffect(() => {
    loadPost();
  }, [page]);

  //필터링 기능
  useEffect(() => {
    if (getClient) {
      setGetList([]);
      setPage(1);
      setTotalPage(lastPage);
      loadPost();
    }
  }, [filterCategoryId]);

  console.log('page', page, 'totalPage', totalPage);
  console.log('123123', getList);

  const handleObs = (entries: any) => {
    const target = entries[0];
    if (target.isIntersecting) {
      //옵저버 중복 실행 방지
      preventRef.current = false; //옵저버 중복 실행 방지
      setPage((prev) => prev + 1); //페이지 값 증가
    }
  };

  //스크롤 시 로드 함수
  const loadPost = useCallback(async () => {
    const temp: HelpListParamsType = {
      categoryId: filterCategoryId,
      loadOnlyPullingUp: false,
      sortOrder: 'DESC',
      orderField: 'id',
      pageSize: 8,
      page: page,
    };
    setLoad(true); //로딩 시작
    if (page <= totalPage) {
      const response = await HELP.getHelpBoardPagination(temp); //api요청 글 목록 불러오기
      setGetList((prev) => [
        ...prev,
        ...response.helpMeBoardWithUserAndImagesItemDto,
      ]);
      setTotalPage(response.lastPage);
    }
    setLoad(false);
  }, [page, filterCategoryId]);

  return (
    <S.HelpCardContainer>
      {getList.length !== 0 ? (
        getList.map((data) => {
          const temp = {
            id: data.id,
            name: data.user.name,
            userImage: data.user.userImage.imageUrl,
            image: data.imageUrl ?? '',
            head: data.head,
            body: data.body,
            createdAt: data.createdAt,
            userId: data.userId,
            categoryId: data.categoryId,
          };
          return (
            <S.HelpCardWrapper key={data.id}>
              <HelpCard {...temp} />
            </S.HelpCardWrapper>
          );
        })
      ) : (
        <>{!load && <div>도와주세요 게시글이 존재하지 않습니다.</div>}</>
      )}
      <>
        {load && <SkeletonUI width="23.6%" height="260px" count={8} />}
        <div ref={obsRef}></div>
      </>
    </S.HelpCardContainer>
  );
};

export default HelpBoardCardList;
