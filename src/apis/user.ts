import { MentorType } from '@/types/user';
import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

const USER = {
  path: '/user',

  async getMentorListPage(): Promise<any> {
    const result: AxiosResponse = await instance.get(`${USER.path}/page`);
    console.log(result);
    return result.data;
  },

  /**페이지 별로 멘토(유저)정보 받아오는 api [get]*/
  async getMentorList(page: number): Promise<any> {
    const result: AxiosResponse = await instance.get(
      `${USER.path}/mentor-list`,
      {
        params: {
          page: page,
        },
      },
    );
    return result.data.data;
  },

  async getUserInfo(id: number): Promise<any> {
    const result: AxiosResponse = await instance.get(`${USER.path}/info`, {
      params: {
        userId: id,
      },
    });
    return result.data;
  },
};

export default USER;
