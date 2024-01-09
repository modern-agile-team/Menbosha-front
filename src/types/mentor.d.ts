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
  category: number;
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
