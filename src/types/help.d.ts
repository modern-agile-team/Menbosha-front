/** 도와주세요 게시글 불러오는 API타입 */
export type HelpListApiType = {
  data: {
    id: number;
    body: string;
    head: string;
    category: number;
    createAt: string;
    updateAt: string;
    helpMeBoardImages: {
      id: number;
      imageUrl: string;
    }[];
    user: {
      name: string;
      userImage: {
        id: number;
        imageUrl: string;
        userId: 33;
      };
    };
  }[];
};

/** 도와주세요 카드형식 타입 */
export interface HelpListType {
  id: number;
  image: string;
  head: string;
  body: string;
  name: string;
  userImage: string;
  createdAt: string;
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

export type HelpCommentType = {
  id: number;
  content: string;
  commentOwner: boolean;
  user: {
    categoryId: number;
    imageUrl: string;
    name: string;
    userId: number;
    rank: number;
  };
};
