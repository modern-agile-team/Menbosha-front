import { ChatRoomListType } from '@/types/chat';
import { atom } from 'recoil';

export const ChatRoomListAtom = atom({
  key: 'chatRoomList',
  default: [] as ChatRoomListType[],
});
