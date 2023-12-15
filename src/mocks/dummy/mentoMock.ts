import { HttpResponse, http } from 'msw';

export const userHandler = [
  http.get('/user/mento', () => {
    return HttpResponse.json([
      {
        id: 1,
        name: '이재진',
        intoduct: '모애6기 회장입니다~',
        mainField: 'nextjs, front-end',
      },
      {
        id: 2,
        name: '이자이진',
        intoduct: '모애7기 회장입니다~',
        mainField: 'nextjs, front-end',
      },
      {
        id: 3,
        name: '이제진',
        intoduct: '모애8기 회장입니다~',
        mainField: 'nextjs, front-end',
      },
      {
        id: 4,
        name: '이줴진',
        intoduct: '모애6.5기 회장입니다~',
        mainField: 'nextjs, front-end',
      },
      {
        id: 5,
        name: '이족진',
        intoduct: '모애9기 회장입니다~',
        mainField: 'nextjs, front-end',
      },
      {
        id: 6,
        name: '이주직',
        intoduct: '모애10기 회장입니다~',
        mainField: 'nextjs, front-end',
      },
    ]);
  }),
];
