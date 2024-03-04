import { ChatContentsType } from '@/types/chat';
import { atom } from 'recoil';

export const ChatContentsAtom = atom({
  key: 'chatContents',
  default: [] as ChatContentsType[],
});
