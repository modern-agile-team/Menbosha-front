import {
  CreateMentorBoardType,
  MentorBoardListType,
  MentorBoardParamsType,
  MentorModifyParamsType,
  MentorPaginationParamsType,
} from '@/types/mentor';
import { AxiosResponse } from 'axios';
import instance from './axiosInstance';
import COUNT from './count';

const MENTOR = {
  path: `/mentor-boards`,

  /** 멘토 게시판 생성 api [post] */
  async createMentorBoard({
    head,
    body,
    category,
  }: CreateMentorBoardType): Promise<any> {
    await COUNT.totalCount('increment', 'mentorBoardCount');
    const result: AxiosResponse = await instance.post<CreateMentorBoardType>(
      `${MENTOR.path}`,
      {
        head: head,
        body: body,
        categoryId: category,
      },
    );
    return result.data;
  },
  /**멘토 게시판 이미지 업로드 api [post] */
  async createMentorBoardImage(image: FormData, boardId: number): Promise<any> {
    const result: AxiosResponse = await instance.post(
      `${MENTOR.path}/images`,
      image,
      {
        params: {
          mentorBoardId: boardId,
        },
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return result;
  },

  /**멘토 게시판 페이지 불러오는 api [get] */
  async getMentorBoardPage(category: number): Promise<any> {
    const result: AxiosResponse = await instance.get(`${MENTOR.path}/page`, {
      params: {
        categoryId: category !== 1 ? category : '',
      },
    });
    return result.data;
  },

  /**페이지별 멘토 리스트 불러오는 api [get] */
  async MentorBoardPagination(
    params: MentorBoardParamsType,
  ): Promise<MentorBoardListType> {
    const result: AxiosResponse = await instance.get(`${MENTOR.path}`, {
      params: {
        categoryId: params.categoryId !== 1 ? params.categoryId : 1,
        pageSize: params.pageSize,
        page: params.page,
        loadOnlyPopular: params.loadOnlyPopular,
        orderField: params.orderField,
        sortOrder: params.sortOrder,
        userId: params.userId ? params.userId : undefined,
      },
    });
    return result.data.contents;
  },

  /**멘토 게시물 불러오기 api [get] */
  async getMentorBoardUnit(id: number): Promise<any> {
    const result: AxiosResponse = await instance.get(`${MENTOR.path}/unit`, {
      params: {
        mentorBoardId: id,
      },
    });
    return result.data.contents;
  },

  /**멘토 게시물 삭제 api [delete] */
  async deleteMentorBoardUnit(id: number): Promise<any> {
    const result: AxiosResponse = await instance.delete(`${MENTOR.path}`, {
      params: {
        mentorBoardId: id,
      },
    });
    return result.data;
  },

  /**랜덤 멘토 게시글 불러오는 api */
  async randomMentorBoard(id: number): Promise<any> {
    const result: AxiosResponse = await instance.get(`${MENTOR.path}/random`, {
      params: {
        categoryId: id !== 1 ? id : '',
      },
    });
    return result.data.data;
  },

  /**인기 멘토 게시글 불러오는 api [get] */
  async hotMentorBoard({
    activityCategoryId,
  }: MentorPaginationParamsType): Promise<any> {
    const result: AxiosResponse = await instance.get(
      `${MENTOR.path}/hot-posts`,
      {
        params: {
          page: 1,
          pageSize: 5,
          categoryId: activityCategoryId,
          orderField: 'id',
          sortOrder: 'ASC',
        },
      },
    );
    return result.data.contents;
  },

  /**멘토 게시글 좋아요 생성 [post] */
  async createLike(boardId: number, userId: number): Promise<any> {
    await COUNT.totalCount('increment', 'mentorBoardLikeCount', userId);
    const result: AxiosResponse = await instance.post(
      `${MENTOR.path}/${boardId}/likes`,
    );
    return result;
  },

  /**멘토 게시글 좋아요 삭제 [delete] */
  async deleteLike(boardId: number, userId: number): Promise<any> {
    await COUNT.totalCount('decrement', 'mentorBoardLikeCount', userId);
    const result: AxiosResponse = await instance.delete(
      `${MENTOR.path}/${boardId}/likes`,
    );
    return result;
  },

  /**멘토 게시글 unit 수정 api [patch] */
  async ModifyMentorBoardUnit(props: MentorModifyParamsType): Promise<any> {
    const result: AxiosResponse = await instance.patch(
      `${MENTOR.path}`,
      {
        head: props.head,
        body: props.body,
        categoryId: props.categoryId,
      },
      {
        params: {
          mentorBoardId: props.id,
        },
      },
    );
    return result.data;
  },

  /**이미지 수정 업로드 api [patch]*/
  async modifyImg(
    image: FormData,
    boardId: number,
    delUrl: string[],
  ): Promise<any> {
    const result: AxiosResponse = await instance.patch(
      `${MENTOR.path}/images`,
      image,
      {
        params: {
          mentorBoardId: boardId,
          deleteImageUrl: JSON.stringify(delUrl),
        },
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return result;
  },

  /**해당 유저의 게시글 불러오는 api [get] */
  async MentorOtherBoards(userId: number): Promise<MentorBoardListType> {
    const result: AxiosResponse = await instance.get(`${MENTOR.path}`, {
      params: {
        categoryId: 1,
        pageSize: 5,
        page: 1,
        loadOnlyPopular: false,
        orderField: 'RAND()',
        sortOrder: 'DESC',
        userId: userId,
      },
    });
    return result.data.contents;
  },
};

export default MENTOR;
