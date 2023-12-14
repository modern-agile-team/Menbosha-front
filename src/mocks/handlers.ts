import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/mento', ({ request, params, cookies }) => {
    return HttpResponse.json([
      {
        id: 1,
        name: '이재진',
        rank: 'jinjinstar3@gmail.com',
        mainField: 'IT',
        introduct: '안녕하세요 이쟂닝비니다.',
        career: '모던애자일6기',
        review: 'review',
      },
      {
        id: 2,
        name: '원동건',
        email: 'jinjinstar3@gmail.com',
      },
      {
        id: 3,
        name: '이승후',
        email: 'jinjinstar3@gmail.com',
      },
      {
        id: 4,
        name: '정비호',
        email: 'jinjinstar3@gmail.com',
      },
      {
        id: 5,
        name: '박준혁',
        email: 'jinjinstar3@gmail.com',
      },
      {
        id: 6,
        name: '민순기',
        email: 'jinjinstar3@gmail.com',
      },
    ]);
  }),
];
