import MentorCard from '@/components/molecules/mentor-elements/MentorCard';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './styled';
import MENTORS from '@/apis/mentors';
import {
  MentorCardType,
  MentorListType,
  MentorPaginationParamsType,
} from '@/types/mentor';
import { FilterPropsType } from '@/components/common/category/Category';
import SkeletonUI from '@/components/common/skeletonUI/SkeletonUI';

const MentorList = ({ filterCategoryId, lastPage }: FilterPropsType) => {
  const [getMentorData, setGetMentorData] = useState<
    MentorListType['userWithImageAndIntroDtos']
  >([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(lastPage); //페이지 수
  const obsRef = useRef<HTMLDivElement>(null); //옵저버 state
  const [load, setLoad] = useState(false);
  const preventRef = useRef(true); //옵저버 중복 방지

  //옵저버 생성
  useEffect(() => {
    const observer = new IntersectionObserver(handleObs, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, [obsRef, getMentorData]);

  useEffect(() => {
    setGetMentorData([]);
    setTotalPage(lastPage);
    setPage(1);
    getMentorListApi();
  }, [filterCategoryId]);

  useEffect(() => {
    getMentorListApi();
  }, [page]);

  const handleObs = (entries: any) => {
    const target = entries[0];
    if (target.isIntersecting) {
      //옵저버 중복 실행 방지
      preventRef.current = false; //옵저버 중복 실행 방지
      setPage((prev) => prev + 1); //페이지 값 증가
    }
  };

  //스크롤 시 로드 함수
  const getMentorListApi = useCallback(async () => {
    const params: MentorPaginationParamsType = {
      page: page,
      pageSize: 10,
      activityCategoryId: filterCategoryId,
      orderField: 'id',
      sortOrder: 'DESC',
    };
    setLoad(true); //로딩 시작
    if (page <= totalPage) {
      const response = await MENTORS.getMentorPagination(params); //api요청 글 목록 불러오기
      setGetMentorData((prev) => [
        ...prev,
        ...response.userWithImageAndIntroDtos,
      ]);
      setTotalPage(response.lastPage);
    }
    setLoad(false);
  }, [page, filterCategoryId]);

  return (
    <S.MentorCardContainer>
      {getMentorData.length !== 0 ? (
        getMentorData.map((data) => {
          const temp: MentorCardType = {
            id: data.id,
            name: data.name,
            userImage: data.userImage.imageUrl,
            shortIntro: data.userIntro.shortIntro,
            customCategory: data.userIntro.customCategory,
            reviewCnt: data.mentorReviewCount,
            boardCnt: data.mentorBoardCount,
          };
          return (
            <S.MentorCardWrapper key={data.id}>
              <MentorCard {...temp} />
            </S.MentorCardWrapper>
          );
        })
      ) : (
        <>{!load && <div>멘토가 존재하지 않습니다.</div>}</>
      )}
      <>
        {load && <SkeletonUI width="18.5%" height="140px" count={10} />}
        <div ref={obsRef}></div>
      </>
    </S.MentorCardContainer>
  );
};

export default MentorList;
