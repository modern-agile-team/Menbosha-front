import axios, { AxiosResponse } from 'axios';
import instance from './axiosInstance';
import COUNT from './count';
import { rejects } from 'assert';

const HELPCOMMENT = {
  path: '/help-you-comments',

  /** 도와주세요 댓글 생성 api [post] */
  async createHelpComment(boardId: number): Promise<any> {
    try {
      // await COUNT.totalCount('increment', 'countHelpYouComment');
      const result: AxiosResponse = await instance.post(
        `${HELPCOMMENT.path}`,
        {
          content: 'test',
        },
        {
          params: {
            helpMeBoardId: boardId,
          },
        },
      );
      return result.data;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        err.response.status === 409 && alert('이미 프로필을 등록했습니다..');
      }
    }
  },

  /** 도와주세요 댓글 삭제 api [delete] */
  async deleteHelpComment(commentId: number): Promise<any> {
    const result: AxiosResponse = await instance.delete(`${HELPCOMMENT.path}`, {
      params: {
        commentId: commentId,
      },
    });
    return result.data.data;
  },

  /** 도와주세요 댓글 불러오기 api [get] */
  async getHelpComment(boardId: number): Promise<any> {
    const result: AxiosResponse = await instance.get(`${HELPCOMMENT.path}`, {
      params: {
        helpMeBoardId: boardId,
      },
    });
    return result.data.data;
  },
};

export default HELPCOMMENT;
