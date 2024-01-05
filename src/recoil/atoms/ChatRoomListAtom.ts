import { ChatPartnerType, ChatRoomListType } from '@/types/chat';
import { atom } from 'recoil';

export const ChatRoomListAtom = atom<any[]>({
  key: 'chatRoomList',
  default: [],
});

export const ChatPartnerAtom = atom<any[]>({
  key: 'chatPartnerInfo',
  default: [],
});
