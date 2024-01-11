/**멘토 게시판 생성 api 타입 */
export type CreateMentorBoardType = {
  head: string;
  body: string;
  category?: number;
};

/**멘토 게시글 리스트 불러오는 api 타입
 * lik : number [좋아요 수 추가 예정 ]
 */
export type MentorBoardListType = {
  id: number;
  head: string;
  body: string;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  user: {
    name: string;
    userImage: {
      userId: number;
      id: number;
      imageUrl: string;
    };
  };
  boardImage: {
    id: number;
    boardId: number;
    imageUrl: string;
  }[];
};

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
  boardImage: Array;
}

export type MentorBoardUnitType = {
  id: number;
  head: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  categoryId: number;
  mentorBoardImages: Array;
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
  head: string;
  body: string;
  image: Array;
  userName: string;
  userImage: string;
  category: string;
  createdAt: string;
}
/**멘토 게시글 중 Body Props Type */
export interface MBUnitBodyPropsType {
  image: Array;
  body: string;
}
