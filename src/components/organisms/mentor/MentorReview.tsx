import MENTORS from '@/apis/mentors';
import MentorReviewElements from '@/components/molecules/mentor-review-elements/MentorReviewElements';
import { MentorReviewType } from '@/types/review';
import { MentorUnitPropsType } from '@/types/user';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './styled';
import SkeletonUI from '@/components/common/skeletonUI/SkeletonUI';

const MentorReview = ({ id }: MentorUnitPropsType) => {
  const [reviewData, setReviewData] = useState<
    MentorReviewType['mentorReviewsItemResponses']
  >([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1); //페이지 수
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
  }, [obsRef, reviewData]);

  const handleObs = (entries: any) => {
    const target = entries[0];
    if (target.isIntersecting) {
      //옵저버 중복 실행 방지
      preventRef.current = false; //옵저버 중복 실행 방지
      setPage((prev) => prev + 1); //페이지 증가
    }
  };

  const getMentorReviewApi = useCallback(async () => {
    setLoad(true); //로딩 시작
    if (page <= totalPage) {
      const response = await MENTORS.getMentorReview(id, page);
      setReviewData((prev) => [
        ...prev,
        ...response.mentorReviewsItemResponses,
      ]);
      setTotalPage(response.lastPage);
    }
    setLoad(false);
  }, [page]);

  useEffect(() => {
    getMentorReviewApi();
  }, [page]);

  return (
    <S.ReviewElementWrapper>
      {reviewData.length !== 0 ? (
        reviewData.map((data) => {
          const temp = {
            id: data.id,
            menteeId: data.mentee !== null ? data.mentee.id : 0,
            name: data.mentee !== null ? data.mentee.name : '탈퇴회원',
            rank: data.mentee !== null ? data.mentee.rank : 0,
            imageUrl:
              data.mentee !== null ? data.mentee.userImage.imageUrl : '',
            customCategory:
              data.mentee !== null ? data.mentee.userIntro.customCategory : '',
            career: data.mentee !== null ? data.mentee.userIntro.career : '',
            shortIntro:
              data.mentee !== null
                ? data.mentee.userIntro.shortIntro
                : '탈퇴회원입니다.',
            review: data.review,
            isGoodWork: data.isGoodWork,
            isClear: data.isClear,
            isQuick: data.isQuick,
            isAccurate: data.isAccurate,
            isKindness: data.isKindness,
            isFun: data.isFun,
            isInformative: data.isInformative,
            isBad: data.isBad,
            isStuffy: data.isStuffy,
            createdAt: data.createdAt,
            isLocation: true,
          };
          return (
            <S.ReviewContentContainer key={data.id}>
              <MentorReviewElements {...temp} />
            </S.ReviewContentContainer>
          );
        })
      ) : (
        <>{!load && <div>후기가 존재하지 않습니다.</div>}</>
      )}
      <S.ReviewLoadingBox>
        {load && <SkeletonUI width="100%" height="15vh" count={5} />}
        <div ref={obsRef}></div>
      </S.ReviewLoadingBox>
    </S.ReviewElementWrapper>
  );
};

export default MentorReview;
