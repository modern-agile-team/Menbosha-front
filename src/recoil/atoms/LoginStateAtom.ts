import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const LoginStateAtom = atom({
  key: 'loginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
