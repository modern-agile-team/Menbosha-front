import { AxiosResponse } from 'axios';
import instance from '../axiosInstance';

const CHAT = {
  path: '/chat-room',

  // 채팅룸 목록 조회
  async getChatRoomList(): Promise<any> {
    const result: AxiosResponse<any> = await instance.get(
      `${CHAT.path}/new-api`,
    );
    return result.data;
  },
};

export default CHAT;
