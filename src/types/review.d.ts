export type MentorReviewType = {
  totalCount: number;
  currentPage: number;
  pageSize: number;
  nextPage: number;
  hasNext: boolean;
  lastPage: number;
  mentorReviewsItemResponses: {
    id: number;
    mentee: {
      id: number;
      name: string;
      rank: number;
      userImage: {
        imageUrl: string;
      };
      userIntro: {
        customCategory: string;
        career: string;
        shortIntro: string;
      };
    };
    review: string;
    mentorReviewChecklist: {
      id: number;
      mentorReviewId: number;
      isGoodWork: boolean;
      isClear: boolean;
      isQuick: boolean;
      isAccurate: boolean;
      isKindness: boolean;
      isFun: boolean;
      isInformative: boolean;
      isBad: boolean;
      isStuffy: boolean;
    };
    createdAt: string;
  }[];
};

/**리뷰 props전달 타입 */
export interface ReviewProprType {
  id: number;
  menteeId: number;
  name: string;
  rank: number;
  imageUrl: string;
  customCategory: string;
  career: string;
  shortIntro: string;
  review: string;
  mentorReviewId: number;
  isGoodWork: boolean;
  isClear: boolean;
  isQuick: boolean;
  isAccurate: boolean;
  isKindness: boolean;
  isFun: boolean;
  isInformative: boolean;
  isBad: boolean;
  isStuffy: boolean;
  createdAt: string;
}
