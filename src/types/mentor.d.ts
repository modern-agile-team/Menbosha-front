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
  }[];
}>;

export type MentorBoardParamsType = ParamsType<{
  categoryId: number;
  loadOnlyPopular: boolean;
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

/**멘토 인기 게시글 props type */
export interface MentorHotBoardPropsType {
  page?: number;
  pageSize?: number;
  categoryId: number;
  orderField?:
    | 'id'
    | 'userId'
    | 'head'
    | 'body'
    | 'createdAt'
    | 'updatedAt'
    | 'categoryId'
    | 'popularAt';
  sortOrder?: 'DESC' | 'ASC';
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
