import { AxiosResponse } from 'axios';
import { MentorReviewType } from '@/types/review';
import instance from './axiosInstance';

const MENTORS = {
  path: '/mentors',

  /**멘로 리뷰 조회 api [get] */
  async getMentorReview(id: number, page: number): Promise<MentorReviewType> {
    const result: AxiosResponse = await instance.get(
      `${MENTORS.path}/${id}/reviews`,
      {
        params: {
          sortOrder: 'DESC',
          page: page,
          pageSize: 5, //값 10개씩 불러오기
        },
      },
    );
    return result.data.contents;
  },
};

export default MENTORS;
