/** 유저 타입 제네릭 */
type UserType<T> = {
  id: number;
  name: string;
} & T;

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
    shortIntro: string;
    customCategory: string;
    detail: string;
    portfolio: string;
    sns: string;
  };
  image: string;
  email: string;
  activityCategoryId: number;
  badge: {
    badgeId: number;
    createdAt: string;
  }[];
  rank: number;
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

/**UserType의 제네릭을 활용한 profileType */
export type UserProfileType = UserType<{
  activityCategoryId: number;
  hopeCategoryId: number;
  image: string;
  intro: {
    career: string;
    customCategory: string;
    detail: string;
    portfolio: string;
    shortIntro: string;
    sns: string;
  };
  isMentor: boolean;
  rank: number;
  phone: string;
}>;

export interface UpdateProfileType {
  activityCategoryId: number;
  hopeCategoryId: number;
  career: string;
  customCategory: string;
  detail: string;
  portfolio: string;
  shortIntro: string;
  sns: string;
  isMentor: boolean;
}

export type RankType = {
  rank: number;
  badge: {
    badgeId: number;
    createdAt: string;
  }[];
};
