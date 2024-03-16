import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

const AUTH = {
  path: '/auth',
  async getToken(provider: string, code: string): Promise<any> {
    const result: AxiosResponse = await instance.get(
      `${AUTH.path}/${provider}/login`,
      {
        params: {
          code: code,
        },
      },
    );
    return result.data;
  },

  //logoutApi [post요청]
  async handleLogout(provider: string): Promise<any> {
    const result: AxiosResponse = await instance.post(
      `${AUTH.path}/${provider}/logout`,
    );
    return result;
  },

  //회원탈퇴 api [post요청]
  async unlinkMemberApi(provider: string): Promise<any> {
    const result: AxiosResponse = await instance.post(
      `${AUTH.path}/${provider}/unlink`,
    );
    await instance.delete(`${AUTH.path}/account`);
  },
};

export default AUTH;
