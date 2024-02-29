import axios, { Axios, AxiosResponse } from 'axios';
import instance from './axiosInstance';
import {
  HelpListApiType,
  HelpUnitType,
  ModifyHelpUnitType,
  CreateHelpType,
  HelpListParamsType,
  HelpCommentParamsType,
  HelpCommentListApiType,
} from '@/types/help';
const HELP = {
  path: '/help-me-boards',

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
  async getHelpBoardPagination(
    params: HelpListParamsType,
  ): Promise<HelpListApiType> {
    const result: AxiosResponse = await instance.get(`${HELP.path}`, {
      params: {
        categoryId: params.categoryId !== 1 ? params.categoryId : 1,
        loadOnlyPullingUp: params.loadOnlyPullingUp,
        sortOrder: params.sortOrder,
        pageSize: params.pageSize,
        page: params.page,
      },
    });
    return result.data.contents;
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
          helpMeBoardId: boardId,
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

  /**도와줄게요 댓글 불러오는 pagination */
  async helpCommentPagination(
    params: HelpCommentParamsType,
  ): Promise<HelpCommentListApiType> {
    const result: AxiosResponse = await instance.get(
      `${HELP.path}/${params.helpBoardId}/help-you-comments`,
      {
        params: {
          page: params.page,
          pageSize: params.pageSize,
          orderField: params.orderField,
          sortOrder: params.sortOrder,
        },
      },
    );
    return result.data.contents;
  },
};

export default HELP;
