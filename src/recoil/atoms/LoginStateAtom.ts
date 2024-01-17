import { RecoilEnv, atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const LoginStateAtom = atom({
  key: 'loginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
