import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

const AUTHS = {
  path: '/auth',
  async getToken(provider: string, code: string | null): Promise<any> {
    try {
      const result: AxiosResponse = await instance.get(
        `${AUTHS.path}/${provider}/login`,
        {
          params: {
            code: code,
          },
        },
      );
      console.log(result.data);
      return result.data;
    } catch (err) {
      console.log(err);
    }
  },

  //logoutApi [post요청]
  async handleLogout(provider: string): Promise<any> {
    const result: AxiosResponse = await instance.post(
      `${AUTHS.path}/${provider}/logout`,
    );
    return result;
  },

  //회원탈퇴 api [post요청]
  async unlinkMemberApi(provider: string): Promise<any> {
    const result: AxiosResponse = await instance.post(
      `${AUTHS.path}/${provider}/unlink`,
    );
    return result;
  },

  //계정 삭제 보고 api [delete 요청 ]
  async deleteAccountUserApi(): Promise<any> {
    await instance.delete(`${AUTHS.path}/account`);
  },
};

export default AUTHS;
