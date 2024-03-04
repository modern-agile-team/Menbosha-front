# 멘보샤

## 프로젝트 소개

- 새우를 그냥 튀긴 것보다 양쪽에 빵을 붙여 튀겨서 더 맛있게 만드는 것처럼 서로가 서로에게 빵과 새우의 존재가 될 수 있도록 도와주는 것을 목표로하는 플랫폼

## 개발기간

- 23.12.01 ~ 24.03.01 +a

### 멤버구성

- 백엔드
  - 이승우
  - 정비호
  - 박준혁
- 프론트엔드
  - 이재진
  - 원동건
- 디자인
  - 정효준
  - 정현민
  - 송치욱

---

### 커밋 메시지 컨벤션

`feat` : 새로운 기능 추가

`modify` : 기능 수정

`fix` : 버그 수정

`docs` : 문서 수정

`style` : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우

`refactor` : 코드 리펙토링

`test` : 테스트 코드, 리펙토링 테스트 코드 추가

`chore` : 빌드 업무 수정, 패키지 매니저 수정

`conflict`: 충돌 해결

`publisher` : 페이지 퍼블리싱

예제: `feat(#이슈번호): 커밋내용`

### 브랜치 전략

- `feature/기능이름/(#이슈번호)`

```
  git checkout -b [만들 피처브랜치 명] develop
```

### 폴더,파일 작성 전략

- 디자인패턴 : Atomic Design Pattern
- 구분

```
  [name] : 폴더
  [name].ts/tsx : 동적경로
  name.ts/tsx : 파일
```

- 폴더구조
  ```markup
  ├─ public
  │   └─ images
  └─ src
      ├─ components
      │   ├─ common : 자주사용되는 기능
      │   │   ├─ index.ts
      │   │   └─ [componentName]
      │   │        ├─ styled.tsx
      │   │        ├─ index.ts
      │   │        └─ [componentName].tsx
      │   ├─ molecules : 하나의 기능
      │   ├─ organisms : 여러기능 집합
      │   ├─ templates : 집합이 모여 하나의 페이지구성
      │   └─ veiws : 페이지에 실제 들어갈 데이터보여줌
      ├─ hooks
      │  ├─ index.ts
      │  └─ [hookName]
      │      ├─ [hookName].tsx
      │      └─ index.ts
      ├─ pages
      │   ├─ index.tsx
      │   ├─ _app.tsx
      │   ├─ _document.tsx
      │   └─ [each_page]
      │         └─ index.tsx
      ├─ recoil
      │    ├─ atoms
      │    │   └─ userAtom.ts
      │    └─ selectors
      │        └─ userSelector.ts
      └─ styles
            └─ globals.css
  ```
- dependencies
  ```json
    "axios": "^1.6.2",
    "next": "14.0.3",
    "react": "^18",
    "react-dom": "^18",
    "recoil": "^0.7.7",
    "styled-components": "^6.1.1"
  ```
- 폴더 :
  - `post-board`
  - `기능-요소` 순으로 작성
- 파일
  - `.tsx` : UpperCamelCase으로 작성
  - `.ts` : CamleCase작성
