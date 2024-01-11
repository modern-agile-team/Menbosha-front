import {
  CreateMentorBoardType,
  MentorBoardListType,
  MentorBoardUnitType,
} from '@/types/mentor';
import { AxiosResponse } from 'axios';
import instance from './axiosInstance';
import Category from '@/components/common/category/Category';

const MENTOR = {
  path: `/mentor-board`,

  /** 멘토 게시판 생성 api [post] */
  async createMentorBoard({
    head,
    body,
    category,
  }: CreateMentorBoardType): Promise<any> {
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
        categoryId: category,
      },
    });
    console.log(result);
    return result.data;
  },

  /**페이지별 멘토 리스트 불러오는 api [get] */
  async getMentorBoardList(
    category: number | undefined,
    page: number,
  ): Promise<MentorBoardListType[]> {
    const result: AxiosResponse = await instance.get(`${MENTOR.path}`, {
      params: {
        categoryId: category,
        page: page,
      },
    });
    console.log(result);
    return result.data.data;
  },

  /**멘토 게시물 불러오기 api [get] */
  async getMentorBoardUnit(id: number): Promise<any> {
    const result: AxiosResponse = await instance.get(`${MENTOR.path}/unit`, {
      params: {
        mentorBoardId: id,
      },
    });
    return result.data;
  },
};

export default MENTOR;
