import { RecoilEnv, atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

//Next.js는 sessionStorage는 아래와 같이 따로 설정 필요
const sessionStorage =
  typeof window !== 'undefined' ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: 'loginSession',
  storage: sessionStorage,
});

export const LoginStateAtom = atom({
  key: 'loginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
