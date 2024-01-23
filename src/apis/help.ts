import axios, { Axios, AxiosResponse } from 'axios';
import instance from './axiosInstance';
import {
  HelpListApiType,
  HelpUnitType,
  ModifyHelpUnitType,
  CreateHelpType,
} from '@/types/help';
const HELP = {
  path: '/help-me-board',

  /**도와줘요 게시판 생성 api [post]*/
  async createHelpBoard({
    head,
    body,
    category,
  }: CreateHelpType): Promise<any> {
    const result: AxiosResponse = await instance.post<CreateHelpType>(
      `${HELP.path}`,
      {
        head: head,
        body: body,
        categoryId: category,
      },
    );
    return result.data;
  },

  /**이미지 업로드 api [post]*/
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

  /**리스트 페이지 수 불러오는 api*/
  async getHelpBoardPage(id: number): Promise<any> {
    const result: AxiosResponse = await instance.get(`${HELP.path}/page`, {
      params: {
        categoryId: id !== 1 ? id : '',
      },
    });
    return result.data;
  },

  /**리스트 불러오는 api */
  async getHelpBoardList(
    category: number,
    page: number,
  ): Promise<HelpListApiType> {
    const result: AxiosResponse = await instance.get(`${HELP.path}`, {
      params: {
        categoryId: category !== 1 ? category : '',
        page: page,
      },
    });
    return result.data;
  },

  /**도와주세요 unit불러오는 api [get] */
  async getHelpUnit(id: number): Promise<HelpUnitType> {
    const result: AxiosResponse = await instance.get(`${HELP.path}/unit`, {
      params: {
        boardId: id,
      },
    });
    return result.data;
  },

  /**도와주세요 unit 삭제 api [delete] */
  async deleteHelpUnit(id: number): Promise<any> {
    const result: AxiosResponse = await instance.delete(`${HELP.path}`, {
      params: {
        helpMeBoardId: id,
      },
    });
    return result.data;
  },

  /**도와주세요 unit 수정 api [patch] */
  async ModifyHelpUnit(props: ModifyHelpUnitType): Promise<ModifyHelpUnitType> {
    const result: AxiosResponse = await instance.patch(
      `${HELP.path}`,
      {
        head: props.head,
        body: props.body,
        categoryId: props.categoryId,
      },
      {
        params: {
          helpMeBoardId: props.id,
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
      `${HELP.path}/images`,
      image,
      {
        params: {
          boardId: boardId,
          deleteImageUrl: JSON.stringify(delUrl),
        },
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return result;
  },

  /** 도와주세요 끌올 api [patch] */
  async pullingUp(boardId: number): Promise<any> {
    const result: AxiosResponse = await instance.patch(
      `${HELP.path}/pulling-up`,
      {},
      {
        params: {
          helpMeBoardId: boardId,
        },
      },
    );
    return result;
  },

  /** 도와주세요 끌올 리스트 api [get]*/
  async getPullingUp(id: number): Promise<any> {
    const result: AxiosResponse = await instance.get(
      `${HELP.path}/pulling-up`,
      {
        params: {
          categoryId: id !== 1 ? id : '',
        },
      },
    );
    return result.data.data;
  },
};

export default HELP;
