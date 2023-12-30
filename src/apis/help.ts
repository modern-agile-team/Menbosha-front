import { AxiosResponse } from 'axios';
import instance from './axiosInstance';
import { HelpListApiType, HelpUnitType } from '@/types/help';

type createType = {
  head: string;
  body: string;
  category?: number;
};

const HELP = {
  path: '/HelpMeBoard',

  //도와줘요 게시판 생성 api [post]
  //글 업로드 api
  async createHelpBoard({ head, body, category }: createType): Promise<any> {
    const result: AxiosResponse = await instance.post<createType>(
      `${HELP.path}`,
      {
        head: head,
        body: body,
        categoryId: category,
      },
    );
    return result.data;
  },

  //이미지 업로드 api [post]
  async createImg(image: FormData, boardId: number): Promise<any> {
    const result: AxiosResponse = await instance.post(
      `${HELP.path}/images`,
      image,
      {
        params: {
          helpMeBoardId: boardId,
        },
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return result;
  },

  //리스트 페이지 수 불러오는 api
  async getHelpBoardPage(): Promise<any> {
    const result: AxiosResponse = await instance.get(`${HELP.path}/page`);
    return result.data;
  },

  //리스트 불러오는 api
  async getHelpBoardList(page: number): Promise<HelpListApiType> {
    const result: AxiosResponse = await instance.get(`${HELP.path}`, {
      params: {
        page: page,
      },
    });
    return result.data;
  },

  //도와주세요 unit불러오는 api [get]
  async getHelpUnit(id: number): Promise<HelpUnitType> {
    const result: AxiosResponse = await instance.get(`${HELP.path}/unit`, {
      params: {
        boardId: id,
      },
    });
    console.log(result.data);
    return result.data;
  },
};

export default HELP;
