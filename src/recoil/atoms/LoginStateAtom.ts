import { RecoilEnv, atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

//Next.js는 sessionStorage는 아래와 같이 따로 설정 필요
const localStorage =
  typeof window !== 'undefined' ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: 'loginSession',
  storage: localStorage,
});

export const LoginStateAtom = atom({
  key: 'loginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
