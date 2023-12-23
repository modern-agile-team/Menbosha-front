import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

export const CategorySelectAtom = atom({
  key: 'categorySelect',
  default: '',
});

export const SectionSelectAtom = atom({
  key: 'sectionSelect',
  default: '',
});
