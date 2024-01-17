import { RecoilEnv, atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const CategorySelectAtom = atom({
  key: 'categorySelect',
  default: '',
});

export const SectionSelectAtom = atom({
  key: 'sectionSelect',
  default: '',
});

export const CategoryFilterAtom = atom({
  key: 'catFilter',
  default: 1,
});
