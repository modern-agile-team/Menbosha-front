import {
  CreateMentorBoardType,
  MentorBoardListType,
  MentorBoardUnitType,
} from '@/types/mentor';
import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

const MENTOR = {
  path: `/mentorBoard`,

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
  /**멘토 게시판 페이지 불러오는 api [get] */
  async getMentorBoardPage(): Promise<any> {
    const result: AxiosResponse = await instance.get(`${MENTOR.path}/page`);
    return result.data;
  },

  /**페이지별 멘토 리스트 불러오는 api [get] */
  async getMentorBoardList(page: number): Promise<MentorBoardListType[]> {
    const result: AxiosResponse = await instance.get(`${MENTOR.path}`, {
      params: {
        page: page,
      },
    });
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
