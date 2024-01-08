/**멘토(유저)카드 타입
 * 멘토코멘트 개수 추가 필요
 * 유저 랭크 추가 필요
 */
export type MentorType = {
  id: number;
  name: string;
  userImage: {
    id: number;
    imageUrl: string;
  };
  userIntro: {
    introduce: string;
    mainField: string;
  };
};

export interface MentorCardType {
  id: number;
  name: string;
  userImage: string;
  introduce: string;
  mainField: string;
}
