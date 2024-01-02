import { MentorInfoType } from '@/types/chat';
import { atom } from 'recoil';

export const MentorInfoAtom = atom<MentorInfoType[]>({
  key: 'mentorInfo',
  default: [],
});
