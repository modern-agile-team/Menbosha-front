import { ChatRoomListType } from '@/types/chat';
import { atom } from 'recoil';

export const ChatRoomListAtom = atom<ChatRoomListType[]>({
  key: 'chatRoomList',
  default: [],
});
