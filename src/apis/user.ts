import { MentorType } from '@/types/user';
import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

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
  async getUserInfo(id: number): Promise<any> {
    const result: AxiosResponse = await instance.get(`${USER.path}/info`, {
      params: {
        userId: id,
      },
    });
    return result.data;
  },

  /**내 정보 조회 api [get] */
  async getMyInfo(): Promise<any> {
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
};

export default USER;
