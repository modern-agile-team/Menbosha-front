import { MentorInfoType } from '@/components/templates/ChatPageTemplate';
import { atom } from 'recoil';

export const MentorInfoAtom = atom<MentorInfoType[]>({
  key: 'mentorInfo',
  default: [],
});
