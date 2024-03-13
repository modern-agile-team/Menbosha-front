import { RecoilEnv, atom } from 'recoil';
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const NotificationAtom = atom({
  key: 'notificationState',
  default: false,
});
