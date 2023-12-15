import { atom } from 'recoil';

export const SideViewerAtom = atom({
  key: 'sideState',
  default: {
    isSide: false,
    id: 0,
  },
});
