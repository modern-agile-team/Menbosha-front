import { ChatPartnersType } from '@/types/chat';
import { atom } from 'recoil';

export const ChatPartnersAtom = atom({
  key: 'chatPartners',
  default: {
    id: 0,
    name: '',
    userImage: '',
  },
});
