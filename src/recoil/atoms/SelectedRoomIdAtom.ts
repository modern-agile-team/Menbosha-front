import { atom } from 'recoil';

export const SelectedRoomIdAtom = atom<string>({
  key: 'selectedRoom',
  default: '',
});
