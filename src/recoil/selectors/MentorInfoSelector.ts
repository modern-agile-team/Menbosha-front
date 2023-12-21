import axios from 'axios';
import { selector } from 'recoil';
export const getMentorInfoSelector = selector({
  key: 'getMentorInfo',
  get: async ({ get }) => {
    try {
      const res = await axios.get('/api/mento');
      return res.data;
    } catch (error) {
      console.error('mock 데이터를 불러올 때 에러가 발생했습니다.', error);
      return [];
    }
  },
});
