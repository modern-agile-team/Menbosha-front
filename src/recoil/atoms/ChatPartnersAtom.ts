import { ChatPartnersType } from '@/types/chat';
import { atom } from 'recoil';

export const ChatPartnersAtom = atom({
  key: 'chatPartners',
  default: [] as ChatPartnersType[],
});
