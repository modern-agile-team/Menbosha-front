export type badgeType = {
  id: number;
  badge_name: string;
  memo: string;
  image: string;
};

export type RankScoreType = {
  myRank: number;
  newRank: number;
};

export type AcquiredBadgeType = {
  existingData: {
    badgeId: number;
    createdAt: string;
    id: number;
    userId: number;
  }[];
  acquiredBadges: {
    badgeId: number;
    createdAt: string;
    id: number;
    userId: number;
  }[];
};

export type AcquiredPropsType = {
  existingData: {
    badgeId: number;
    createdAt: string;
    id: number;
    userId: number;
  }[];
  acquiredData: {
    badgeId: number;
    createdAt: string;
    id: number;
    userId: number;
  }[];
};
