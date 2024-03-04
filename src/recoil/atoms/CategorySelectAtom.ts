import { RecoilEnv, atom } from 'recoil';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const CategorySelectAtom = atom({
  key: 'categorySelect',
  default: '',
});

export const SectionSelectAtom = atom({
  key: 'sectionSelect',
  default: '',
});
