import { AxiosResponse } from 'axios';
import instance from './axiosInstance';
import { UpdateProfileType, MentorUnitType } from '@/types/user';
import { RankType } from '@/types/mypage';
import { AcquiredBadgeType } from '@/types/mypage';
import { MyProfileType } from '@/types/user';

const USER = {
  path: '/user',

  async getMentorListPage(): Promise<any> {
    const result: AxiosResponse = await instance.get(`${USER.path}/page`);
    return result.data;
  },

  /**페이지 별로 멘토(유저)정보 받아오는 api [get]*/
  async getMentorList(category: number, page: number): Promise<any> {
    const result: AxiosResponse = await instance.get(
      `${USER.path}/mentor-list`,
      {
        params: {
          categoryId: category,
          page: page,
        },
      },
    );
    return result.data.data;
  },

  /**유저 정보 조회 api [get] */
  async getUserInfo(id: number): Promise<MentorUnitType> {
    const result: AxiosResponse = await instance.get(`${USER.path}/${id}/info`);
    return result.data;
  },

  /**내 정보 조회 api [get] */
  async getMyInfo(): Promise<MyProfileType> {
    const result: AxiosResponse = await instance.get(`${USER.path}/my/profile`);
    return result.data;
  },

  /**인기 멘토 불러오는 api [get] */
  async getPopularMentor(): Promise<any> {
    const result: AxiosResponse = await instance.get(
      `${USER.path}/total-ranking`,
    );
    return result.data.userRanking;
  },

  /**본인 정보 수정 api */
  async updateMyProfile(update: UpdateProfileType): Promise<any> {
    const result: AxiosResponse = await instance.patch(
      `${USER.path}/my/intro`,
      {
        shortIntro: update.shortIntro,
        career: update.career,
        customCategory: update.customCategory,
        detail: update.detail,
        portfolio: update.portfolio,
        sns: update.sns,
        hopeCategoryId: update.hopeCategoryId,
        activityCategoryId: update.activityCategoryId,
        isMentor: update.isMentor,
      },
    );
    return result;
  },

  /**유저 이미지 수정 api [patch] */
  async updateMyImage(image: FormData): Promise<any> {
    const result: AxiosResponse = await instance.patch(
      `${USER.path}/image`,
      image,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return result;
  },

  /**유저 온도/칭호 조회 api */
  async getMyRank(): Promise<RankType> {
    const result: AxiosResponse = await instance.get(`${USER.path}/my/rank`);
    return result.data;
  },

  /**유저 뱃지 요청 api [post] */
  async getMyBadge(userId: number): Promise<AcquiredBadgeType[]> {
    const result: AxiosResponse = await instance.post(
      `${USER.path}/${userId}/badges`,
    );
    return result.data;
  },
};

export default USER;
