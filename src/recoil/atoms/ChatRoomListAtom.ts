import { ChatRoomListType } from '@/components/templates/ChatPageTemplate';
import { atom } from 'recoil';

export const ChatRoomListAtom = atom<ChatRoomListType[]>({
  key: 'chatRoomList',
  default: [],
});
