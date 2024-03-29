import MENTOR from '@/apis/mentor';
import { MentorBoardListType, MentorBoardParamsType } from '@/types/mentor';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './styled';
import MentorBoardCard from '@/components/molecules/mentor-board-elements/MentorBoardCard';
import { FilterPropsType } from '@/components/common/category/Category';
import SkeletonUI from '@/components/common/skeletonUI/SkeletonUI';

const MentorBoardList = ({ filterCategoryId, lastPage }: FilterPropsType) => {
  const [getBoardData, setGetBoardData] = useState<
    MentorBoardListType['mentorBoardWithUserAndImageDtos']
  >([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(lastPage); //페이지 수
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
  }, [obsRef, getBoardData]);

  //무한스크롤 로드
  useEffect(() => {
    loadPost();
  }, [page]);

  //필터링 로드
  useEffect(() => {
    if (getClient) {
      setGetBoardData([]);
      setPage(1);
      setTotalPage(lastPage);
      loadPost();
    }
  }, [filterCategoryId]);

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
    const temp: MentorBoardParamsType = {
      categoryId: filterCategoryId,
      loadOnlyPopular: false,
      orderField: 'id',
      sortOrder: 'DESC',
      page: page,
      pageSize: 10,
    };
    setLoad(true); //로딩 시작
    if (page <= totalPage) {
      const response = await MENTOR.MentorBoardPagination(temp); //api요청 글 목록 불러오기
      setGetBoardData((prev) => [
        ...prev,
        ...response.mentorBoardWithUserAndImageDtos,
      ]);
      setTotalPage(response.lastPage);
    }
    setLoad(false);
  }, [page, filterCategoryId]);
  return (
    <S.MentorBoardCardContainer>
      {getBoardData.length !== 0 ? (
        getBoardData.map((data) => {
          const temp = {
            id: data.id,
            head: data.head,
            body: data.body,
            category: data.categoryId,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
            userId: data.userId,
            userName: data.user.name,
            userImage: data.user.userImage.imageUrl,
            likes: data.likeCount,
            mentorBoardImage: data.imageUrl ?? '',
          };
          return (
            <S.MentorBoardCardWrapper key={data.id}>
              <MentorBoardCard {...temp} />
            </S.MentorBoardCardWrapper>
          );
        })
      ) : (
        <>{!load && <div>게시글이 존재하지 않습니다.</div>}</>
      )}
      <>
        {load && <SkeletonUI width="18.5%" height="27vh" count={10} />}
        <div ref={obsRef}></div>
      </>
    </S.MentorBoardCardContainer>
  );
};

export default MentorBoardList;
