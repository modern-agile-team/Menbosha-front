import { MentorInfoType } from '@/types/chat';
import { RecoilEnv, atom } from 'recoil';
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const MentorInfoAtom = atom<MentorInfoType[]>({
  key: 'mentorInfo',
  default: [],
});
