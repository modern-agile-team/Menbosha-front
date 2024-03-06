import { AxiosResponse } from 'axios';
import {
  MentorReviewType,
  MentorCreateReviewRequestType,
} from '@/types/review';
import { MentorPaginationParamsType, MentorListType } from '@/types/mentor';
import instance from './axiosInstance';

const MENTORS = {
  path: '/mentors',

  /**멘로 리뷰 조회 api [get] */
  async getMentorReview(
    id: number,
    page: number,
    filter?: string,
  ): Promise<MentorReviewType> {
    const result: AxiosResponse = await instance.get(
      `${MENTORS.path}/${id}/reviews`,
      {
        params: {
          sortOrder: 'DESC',
          page: page,
          pageSize: 5, //값 10개씩 불러오기
          isGoodWork: filter === 'isGoodWork' ? true : undefined,
          isClear: filter === 'isClear' ? true : undefined,
          isQuick: filter === 'isQuick' ? true : undefined,
          isAccurate: filter === 'isAccurate' ? true : undefined,
          isKindness: filter === 'isKindness' ? true : undefined,
          isFun: filter === 'isFun' ? true : undefined,
          isInformative: filter === 'isInformative' ? true : undefined,
          isBad: filter === 'isBad' ? true : undefined,
          isStuffy: filter === 'isStuffy' ? true : undefined,
          isUnderstandWell: filter === 'isUnderstandWell' ? true : undefined,
        },
      },
    );
    return result.data.contents;
  },

  //멘토 리스트 페이지네이션
  async getMentorPagination(
    params: MentorPaginationParamsType,
  ): Promise<MentorListType> {
    const result: AxiosResponse = await instance.get(`${MENTORS.path}`, {
      params: {
        page: params.page,
        pageSize: params.pageSize,
        id: params.id,
        activityCategoryId: params.activityCategoryId,
        orderField: params.orderField,
        sortOrder: params.sortOrder,
      },
    });
    return result.data.contents;
  },

  //리뷰 생성 api [post]
  async createMentorReview(
    content: MentorCreateReviewRequestType,
  ): Promise<any> {
    const result: AxiosResponse = await instance.post(
      `${MENTORS.path}/${content.mentorId}/reviews`,
      {
        createMentorReviewChecklistRequestBodyDto: {
          isGoodWork: content.isCheck.includes('isGoodWork'),
          isClear: content.isCheck.includes('isClear'),
          isQuick: content.isCheck.includes('isQuick'),
          isAccurate: content.isCheck.includes('isAccurate'),
          isKindness: content.isCheck.includes('isKindness'),
          isFun: content.isCheck.includes('isFun'),
          isInformative: content.isCheck.includes('isInformative'),
          isBad: content.isCheck.includes('isBad'),
          isStuffy: content.isCheck.includes('isStuffy'),
          isUnderstandWell: content.isCheck.includes('isUnderstandWell'),
        },
        review: content.review,
      },
    );
    return result.data.contents;
  },
};

export default MENTORS;
