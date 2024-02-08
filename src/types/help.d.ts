export type PaginationType<T> = {
  totalCount: number;
  currentPage: number;
  pageSize: number;
  nextPage: number;
  hasNext: boolean;
  lastPage: number;
} & T;

/** 도와주세요 게시글 불러오는 API타입 */
export type HelpListApiType = PaginationType<{
  helpMeBoardWithUserAndImagesItemDto: {
    id: number;
    userId: number;
    head: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    pullingUp: string;
    categoryId: number;
    user: {
      name: string;
      userImage: {
        imageUrl: string;
      };
    };
    imageUrl: string;
  }[];
}>;

/**도와줄게요 댓글 api타입 */
export type HelpCommentListApiType = PaginationType<{
  helpYouCommentWithUserAndUserImagesItemDto: {
    id: number;
    userId: number;
    helpMeBoardId: number;
    createdAt: string;
    isAuthor: boolean;
    user: {
      name: string;
      userImage: {
        imageUrl: string;
      };
      rank: number;
      activityCategoryId: number;
      userIntro: {
        shortIntro: string;
        career: string;
      };
    };
  }[];
}>;

/**도와줄게요 댓글 api타입 */
export type HelpCommentType = PaginationType<{
  helpYouCommentWithUserAndUserImagesItemDto: {
    id: number;
    userId: number;
    helpMeBoardId: number;
    createdAt: string;
    isAuthor: boolean;
    user: {
      name: string;
      userImage: {
        imageUrl: string;
      };
      rank: number;
      activityCategoryId: number;
      userIntro: {
        shortIntro: string;
        career: string;
      };
    };
  };
}>;

/**파아미터로 넘기는 타입 */
export type ParamsType<T> = {
  page?: number;
  pageSize?: number;
  orderField:
    | 'id'
    | 'userId'
    | 'head'
    | 'body'
    | 'createdAt'
    | 'updatedAt'
    | 'categoryId'
    | 'pullingUp'
    | 'RAND()';
  sortOrder: 'DESC' | 'ASC';
} & T;

/**helpListAPi요청을 위한 params type */
export type HelpListParamsType = ParamsType<{
  categoryId: number;
  loadOnlyPullingUp: boolean;
}>;

/**helpCommentApi요청을 위한 params type */
export type HelpCommentParamsType = ParamsType<{
  helpBoardId: number;
}>;

/** 도와주세요 카드형식 타입 */
export interface HelpListType {
  id: number;
  userId: number;
  image: string;
  head: string;
  body: string;
  name: string;
  userImage: string;
  createdAt: string;
  categoryId: number;
}

/** 도와주세요 게시글 Unit정보 API타입 */
export type HelpUnitType = {
  id: number;
  body: string;
  head: string;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  unitOwner: boolean;
  helpMeBoardImages: {
    id: number;
    imageUrl: string;
  }[];
  user: {
    name: string;
    userImage: {
      imageUrl: string;
      userId: number;
    };
  };
};

/** 도와주세요 게시글 제목부분 타입 */
export interface HelpUnitHeadType {
  id: number;
  head: string;
  createdAt: string;
  unitOwner: boolean;
  userName: string;
  userImage: string;
  body: string;
}

/** 도와주세요 게시글 본문 부분 타입 */
export interface HelpUnitBodyType {
  body: string;
  helpMeBoardImages: {
    id: number;
    imageUrl: string;
  }[];
}

/** 도와주세요 unit생성 api 타입 */
export type CreateHelpType = {
  head: string;
  body: string;
  category?: number;
};

/** 도와주세요 unit 수정 api 타입 */
export interface ModifyHelpUnitType {
  location?: string;
  id: number;
  head: string;
  body: string;
  categoryId: number;
  image?: Array;
}

export type PullingUpType = {
  id: number;
  body: string;
  head: string;
  category: number;
  createdAt: string;
  updatedAt: string;
  unitOwner: boolean;
  helpMeBoardImages: {
    id: number;
    imageUrl: string;
  }[];
  user: {
    name: string;
    userImage: {
      imageUrl: string;
      userId: number;
    };
  };
};

export interface BoardIdType {
  id: number;
}
