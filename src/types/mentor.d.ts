import { PaginationType, ParamsType } from './help';

/**멘토 게시판 생성 api 타입 */
export type CreateMentorBoardType = {
  head: string;
  body: string;
  category?: number;
};

/**멘토 게시글 리스트 불러오는 api 타입
 */
export type MentorBoardListType = PaginationType<{
  mentorBoardWithUserAndImageDtos: {
    id: number;
    userId: number;
    head: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    categoryId: number;
    user: {
      name: string;
      userImage: {
        imageUrl: string;
      };
    };
    imageUrl: string;
    likeCount: number;
  }[];
}>;

// 채팅페이지 내에서 쓰이는 멘토리스트 데이터 타입
export type ChatMentorListType = {
  userId: number;
  userName: string;
  userImage: {
    imageUrl: String;
  };
  userIntro: {
    shortIntro: string;
  };
};

export type MentorListType = PaginationType<{
  userWithImageAndIntroDtos: {
    id: number;
    mentorBoardCount: number;
    mentorReviewCount: number;
    name: string;
    rank: number;
    userImage: {
      imageUrl: string;
    };
    userIntro: {
      customCategory: string;
      shortIntro: string;
    };
  }[];
}>;

export type MentorBoardParamsType = ParamsType<{
  categoryId: number;
  loadOnlyPopular: boolean;
  userId?: number;
}>;

/**멘토게시판 카트형식의 타입 */
export interface MentorBoardCardType {
  id: number;
  head: string;
  body: string;
  category: number;
  createdAt: string;
  updatedAt: string;
  userId: number;
  userName: string;
  userImage: string;
  likes: number;
  mentorBoardImage: string;
}

export type MentorBoardUnitType = {
  id: number;
  head: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  categoryId: number;
  isLike: boolean;
  mentorBoardLikes: number;
  mentorBoardImages: {
    id: number;
    imageUrl: string;
  }[];
  user: {
    name: string;
    userImage: {
      id: number;
      imageUrl: string;
      userId: number;
    };
  };
  unitOwner: boolean;
};

/**멘토 게시물 불러오기 위한 id넘기는 props Type */
export interface MentorBoardUnitPropsType {
  id: number;
}

/**멘토 게시글 중 Head Props Type */
export interface MBUnitHeadPropsType {
  id: number;
  head: string;
  body: string;
  userName: string;
  userImage: string;
  categoryId: number;
  createdAt: string;
  isOwner: boolean;
}
/**멘토 게시글 중 Body Props Type */
export interface MBUnitBodyPropsType {
  userId: number;
  id: number;
  image: Array;
  body: string;
  likes: number;
  isLike: boolean;
}

export type MentorHotBoardType = {
  totalCount: number;
  currentPage: number;
  pageSize: number;
  nextPage: number;
  hasNext: boolean;
  lastPage: number;
  mentorBoardForHotPostsItemDto: {
    id: number;
    userId: number;
    head: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    categoryId: number;
    user: {
      name: string;
      userImage: {
        imageUrl: string;
      };
    };
    imageUrl: string;
    likeCount: number;
  };
};

export interface MentorBadgeType {
  badgeId: number;
  createdAt: string;
}

export interface MentorModifyParamsType {
  head: string;
  body: string;
  categoryId: number;
  id: number;
}

/**멘토 리스트 d.ts */
export interface MentorCardType {
  id: number;
  name: string;
  shortIntro: string;
  customCategory: string;
  reviewCnt: number;
  boardCnt: number;
  userImage: string;
}

export interface MentorPopCardType {
  id: number;
  name: string;
  rank: number;
  shortIntro: string;
  customCategory: string;
  mentorReviewCount: number;
  mentorBoardCount: number;
  image: string;
}

export interface MentorPopCardDataType {
  userId: number;
  name: string;
  shortIntro: string;
  imageUrl: string;
  customCategory: string;
  rank: number;
  reviewCount: number;
}

/**멘토 d.ts */
export type MentorPaginationParamsType = {
  page?: number; //검색할 페이지
  pageSize?: number; //검색할 페이지 size
  id?: number; // id로 필터링하기
  activityCategoryId: number; //카테고리로 필터링하기
  orderField: //멘토정렬
  'id' | 'name' | 'rank' | 'activityCategoryId';
  sortOrder: 'DESC' | 'ASC'; //오름차순, 내림차순
};
