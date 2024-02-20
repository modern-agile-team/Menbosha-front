import { atom } from 'recoil';

interface MyId {
  myId: number;
}

export const MyIdAtom = atom<MyId>({
  key: 'myId',
  default: {
    myId: 0,
  },
});
