import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

const SEARCH = {
  path: '/search',

  //검색 페이지 불러오기 api [get]
  async getSearchPageApi(words: string): Promise<any> {
    const result: AxiosResponse = await instance.get(
      `${SEARCH.path}/all/count`,
      {
        params: {
          searchQuery: words,
        },
      },
    );
    return result.data;
  },
};

export default SEARCH;
