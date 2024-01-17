import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

const COUNT = {
  path: '/total-count',

  async totalCount(
    action: 'increment' | 'decrement',
    type:
      | 'countMentorBoard' //멘토 게시글 수
      | 'countHelpYouComment' //도와주세요 댓글 수
      | 'countMentorBoardLike' //멘토 게시글 좋아요 수
      | 'countBadge' //멘토 뱃지 수
      | 'countReview: ', //멘토 후기 수
    userId?: number,
  ): Promise<any> {
    const result: AxiosResponse = await instance.patch(
      `${COUNT.path}/counting`,
      {
        mentorId: userId,
        type: type,
        action: action,
      },
    );
    return result;
  },
};

export default COUNT;
