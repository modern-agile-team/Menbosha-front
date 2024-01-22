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

/**멘토 조회를위한 props로 id전달하기 위한 type */
export interface MentorUnitPropsType {
  id: number;
}

/**멘토 조회 api 타입 */
export type MentorUnitType = {
  name: string;
  phone: string;
  isMentor: boolean;
  intro: {
    career: string;
    introduce: string;
    mainField: string;
  };
  image: string;
  email: string;
  activityCategoryId: number;
  badge: {
    badgeId: number;
    createAt: string;
  }[];
};

/**내 정보 조회 api Type */
export type MyProfileType = {
  id: number;
  name: string;
  isMentor: boolean;
  activityCategoryId: number;
  wishCategoryId: number;
  image: string;
  rank: number;
  intro: {
    mainField: string;
    introduce: string;
    career: string;
  };
};

/**인기 멘토 api Type
 * 유저 이미지, 게시글 수 추가 예정
 */
export type PopularMentorType = {
  userId: number;
  activityCategoryId: number;
  career: string;
  introduce: string;
  mainField: string;
  name: string;
  rank: number;
  reviewCount: number;
};
