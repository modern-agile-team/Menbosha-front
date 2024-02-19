export type badgeType = {
  id: number;
  badge_name: string;
  memo: string;
  image: string;
};

export type RankType = {
  rank: number;
  badge: {
    badgeId: number;
    createdAt: string;
  }[];
};

export type AcquiredBadgeType = {
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
