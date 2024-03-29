import { Axios, AxiosResponse } from 'axios';
import instance from './axiosInstance';
import { CreateChatRoomRequestBody } from '@/types/chat';

const CHAT = {
  path: '/chat-room',

  /** 채팅룸 생성 api */
  async createChatRoom({
    receiverId,
    chatRoomType,
  }: CreateChatRoomRequestBody): Promise<any> {
    const result: AxiosResponse<any> = await instance.post(`${CHAT.path}`, {
      receiverId: receiverId,
      chatRoomType: chatRoomType,
    });
    return result;
  },

  /** 채팅룸 전체조회 api */
  async getChatRoomList(page: number, pageSize: number): Promise<any> {
    const result: AxiosResponse<any> = await instance.get(`${CHAT.path}`, {
      params: {
        page: page,
        pageSize: pageSize,
      },
    });
    return result.data.contents;
  },

  /** 채팅방 나갔을 때 예외처리를 위한 임시 확인용 */
  async getChatRoomList2(page: number, pageSize: number): Promise<any> {
    const result: AxiosResponse<any> = await instance.get(`${CHAT.path}`, {
      params: {
        page: page,
        pageSize: pageSize,
      },
    });
    return result;
  },

  /** 채팅룸 단일조회 - 유저 id */
  async getChatRoomById(receiverId: number): Promise<any> {
    const result: AxiosResponse<any> = await instance.get(
      `${CHAT.path}/check`,
      {
        params: {
          receiverId: receiverId,
        },
      },
    );
    return result.data;
  },

  /** 채팅룸 단일조회 - roomId api */
  async getChatRoom(roomId: string): Promise<any> {
    const result: AxiosResponse<any> = await instance.get(
      `${CHAT.path}/${roomId}`,
      {
        params: {
          roomId: roomId,
        },
      },
    );
    return result.data;
  },

  /** 단일 채팅룸 채팅내역 조회 */
  async getChatHistory(
    roomId: string,
    page: number,
    pageSize: number,
  ): Promise<any> {
    const result: AxiosResponse<any> = await instance.get(
      `${CHAT.path}/${roomId}/chat`,
      {
        params: {
          page: page,
          pageSize: pageSize,
        },
      },
    );
    // console.log(result.data.contents);
    return result.data.contents;
  },

  /** 채팅 이미지 삽입 api <미완성> */
  async postChatImage(roomId: string): Promise<any> {
    const result: AxiosResponse<any> = await instance.post(
      `${CHAT.path}/${roomId}/chat/image`,
      {
        params: {
          roomId: roomId,
        },
      },
    );
    return result.data;
  },

  /** 채팅룸 삭제 api */
  async deleteChatRoom(roomId: string | null): Promise<any> {
    const result: AxiosResponse<any> = await instance.delete(
      `${CHAT.path}/${roomId}`,
      {
        params: {
          roomId: roomId,
        },
      },
    );
    return result.data;
  },

  /** 채팅내역 삭제 api */
  async deleteChat(roomId: string, chatId: string): Promise<any> {
    const result: AxiosResponse<any> = await instance.delete(
      `${CHAT.path}/${roomId}/chat/${chatId}`,
      {
        params: {
          roomId: roomId,
          chatId: chatId,
        },
      },
    );
    return result.data;
  },
};

export default CHAT;
