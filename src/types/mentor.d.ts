/**멘토 게시판 생성 api 타입 */
export type CreateMentorType = {
  head: string;
  body: string;
  category?: number;
};
