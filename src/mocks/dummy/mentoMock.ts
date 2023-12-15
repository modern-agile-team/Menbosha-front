import { HttpResponse, http } from 'msw';

const mentoData = [
  {
    id: 1,
    name: '이재진',
    introduct: '모애6기 회장입니다~',
    image: '',
    mainField: 'nextjs, front-end',
    career: '2023.6 ~ 2024.3 모던애자일6기, 2020.3 ~ 2026.3 인덕대학교',
    rank: 3,
    userReveiw: [
      {
        userId: 3,
        userName: '이제진',
        userImage: '',
        review: '너무 좋았습니다~',
        checkList: '1, 3, 2, 4',
      },
      {
        userId: 1,
        userName: '이재진',
        userImage: '',
        review: '너무 좋았습니다~',
        checkList: '4, 4, 4, 4',
      },
    ],
  },
  {
    id: 2,
    name: '이자이진',
    introduct: '모애7기 회장입니다~',
    image: '',
    mainField: 'nextjs, front-end',
    career: '2023.6 ~ 2024.3 모던애자일6기, 2020.3 ~ 2026.3 인덕대학교',
    rank: 3,
    userReview: [
      {
        userId: 3,
        userName: '이제진',
        userImage: '',
        review: '너무 좋았습니다~',
        checkList: '1, 3, 2, 4',
      },
      {
        userId: 1,
        userName: '이재진',
        userImage: '',
        review: '너무 좋았습니다~',
        checkList: '4, 4, 4, 4',
      },
    ],
  },
  {
    id: 3,
    name: '이제진',
    introduct: '모애8기 회장입니다~',
    image: '',
    mainField: 'nextjs, front-end',
    career: '2023.6 ~ 2024.3 모던애자일6기, 2020.3 ~ 2026.3 인덕대학교',
    rank: 3,
    userReview: [
      {
        userId: 3,
        userName: '이제진',
        userImage: '',
        review: '너무 좋았습니다~',
        checkList: '1, 3, 2, 4',
      },
      {
        userId: 1,
        userName: '이재진',
        userImage: '',
        review: '너무 좋았습니다~',
        checkList: '4, 4, 4, 4',
      },
    ],
  },
  {
    id: 4,
    name: '이줴진',
    introduct: '모애6.5기 회장입니다~',
    image: '',
    mainField: 'nextjs, front-end',
    career: '2023.6 ~ 2024.3 모던애자일6기, 2020.3 ~ 2026.3 인덕대학교',
    rank: 3,
    userReveiw: [
      {
        userId: 3,
        userName: '이제진',
        userImage: '',
        review: '너무 좋았습니다~',
        checkList: '1, 3, 2, 4',
      },
      {
        userId: 1,
        userName: '이재진',
        userImage: '',
        review: '너무 좋았습니다~',
        checkList: '4, 4, 4, 4',
      },
    ],
  },
  {
    id: 5,
    name: '이족진',
    introduct: '모애9기 회장입니다~',
    image: '',
    mainField: 'nextjs, front-end',
    career: '2023.6 ~ 2024.3 모던애자일6기, 2020.3 ~ 2026.3 인덕대학교',
    rank: 3,
    userReview: [
      {
        userId: 3,
        userName: '이제진',
        userImage: '',
        review: '너무 좋았습니다~',
        checkList: '1, 3, 2, 4',
      },
      {
        userId: 1,
        userName: '이재진',
        userImage: '',
        review: '너무 좋았습니다~',
        checkList: '4, 4, 4, 4',
      },
    ],
  },
  {
    id: 6,
    name: '이주직',
    introduct: '모애10기 회장입니다~',
    image: '',
    mainField: 'nextjs, front-end',
    career: '2023.6 ~ 2024.3 모던애자일6기, 2020.3 ~ 2026.3 인덕대학교',
    rank: 3,
    userReview: [
      {
        userId: 3,
        userName: '이제진',
        userImage: '',
        review: '너무 좋았습니다~',
        checkList: '1, 3, 2, 4',
      },
      {
        userId: 1,
        userName: '이재진',
        userImage: '',
        review: '너무 좋았습니다~',
        checkList: '4, 4, 4, 4',
      },
    ],
  },
  {
    id: 7,
    name: '이지짖',
    introduct: '모애11기 회장입니다~',
    image: '',
    mainField: 'nextjs, front-end',
    career: '2023.6 ~ 2024.3 모던애자일6기, 2020.3 ~ 2026.3 인덕대학교',
    rank: 3,
    userReview: [
      {
        userId: 3,
        userName: '이제진',
        userImage: '',
        review: '너무 좋았습니다~',
        checkList: '1, 3, 2, 4',
      },
      {
        userId: 1,
        userName: '이재진',
        userImage: '',
        review: '너무 좋았습니다~',
        checkList: '4, 4, 4, 4',
      },
    ],
  },
];

export const userHandler = [
  //멘토리스트조회api
  http.get('/api/mento', () => {
    return HttpResponse.json(mentoData);
  }),
  //멘토정보조회api
  http.get('api/mento-unit', async ({ request }) => {
    const url = new URL(request.url);
    const productId = Number(url.searchParams.getAll('id'));
    console.log(productId);
    const foundData = mentoData.filter((data) => data.id === Number(productId));
    if (!foundData) {
      return new HttpResponse(null, { status: 404 });
    }
    console.log(foundData);
    return HttpResponse.json(foundData);
  }),
];
