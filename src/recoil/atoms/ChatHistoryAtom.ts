import { ChatHistoryType } from '@/types/chat';
import { atom } from 'recoil';

export const ChatHistoryAtom = atom({
  key: 'chatHistory',
  default: [] as ChatHistoryType[],
});
