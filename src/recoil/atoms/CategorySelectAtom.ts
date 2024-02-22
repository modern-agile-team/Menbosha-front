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
  key: 'categoryFilter',
  default: 1,
  effects: [
    ({ setSelf, onSet }) => {
      const savedData = sessionStorage.getItem('filterCategoryId');
      // setSelf: atom 값을 설정 혹은 재설정
      if (savedData) setSelf(JSON.parse(savedData));

      // atom이 변화가 감지될 때 작동, Storage에 데이터 저장
      // setSelf에 의해서는 작동하지 않음
      onSet((newValue, _, isReset) => {
        isReset
          ? sessionStorage.removeItem('filterCategoryId')
          : sessionStorage.setItem(
              'filterCategoryId',
              JSON.stringify(newValue),
            );
      });
    },
  ],
});
