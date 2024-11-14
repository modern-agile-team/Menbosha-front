import { faker } from '@faker-js/faker';
import { http, HttpResponse } from 'msw';

const contents = [
  {
    id: 1,
    userId: 1,
    head: 'Head 1',
    body: '<span>Body 1</span><br><span>Body 2</span>',
    createdAt: '2023-01-01T00:00:00Z',
    updatedAt: '2023-01-02T00:00:00Z',
    pullingUp: '2023-01-03T00:00:00Z',
    categoryId: 101,
    user: {
      name: 'User 1',
      userImage: {
        imageUrl: faker.image.avatar(),
      },
    },
    imageUrl: faker.image.url(),
  },
  {
    id: 2,
    userId: 2,
    head: 'Head 2',
    body: '<span>Body 1</span><br><span>Body 2</span>',
    createdAt: '2023-01-03T00:00:00Z',
    updatedAt: '2023-01-04T00:00:00Z',
    pullingUp: '2023-01-05T00:00:00Z',
    categoryId: 102,
    user: {
      name: 'User 2',
      userImage: {
        imageUrl: faker.image.avatar(),
      },
    },
    imageUrl: faker.image.url(),
  },
  {
    id: 3,
    userId: 3,
    head: 'Head 3',
    body: '<span>Body 1</span><br><span>Body 2</span>',
    createdAt: '2023-01-05T00:00:00Z',
    updatedAt: '2023-01-06T00:00:00Z',
    pullingUp: '2023-01-07T00:00:00Z',
    categoryId: 103,
    user: {
      name: 'User 3',
      userImage: {
        imageUrl: faker.image.avatar(),
      },
    },
    imageUrl: faker.image.url(),
  },
  {
    id: 4,
    userId: 4,
    head: 'Head 4',
    body: '<span>Body 1</span><br><span>Body 2</span>',
    createdAt: '2023-01-07T00:00:00Z',
    updatedAt: '2023-01-08T00:00:00Z',
    pullingUp: '2023-01-09T00:00:00Z',
    categoryId: 104,
    user: {
      name: 'User 4',
      userImage: {
        imageUrl: faker.image.avatar(),
      },
    },
    imageUrl: faker.image.url(),
  },
  {
    id: 5,
    userId: 5,
    head: 'Head 5',
    body: '<span>Body 1</span><br><span>Body 2</span>',
    createdAt: '2023-01-09T00:00:00Z',
    updatedAt: '2023-01-10T00:00:00Z',
    pullingUp: '2023-01-11T00:00:00Z',
    categoryId: 105,
    user: {
      name: 'User 5',
      userImage: {
        imageUrl: faker.image.avatar(),
      },
    },
    imageUrl: faker.image.url(),
  },
  {
    id: 6,
    userId: 6,
    head: 'Head 6',
    body: '<span>Body 1</span><br><span>Body 2</span>',
    createdAt: '2023-01-11T00:00:00Z',
    updatedAt: '2023-01-12T00:00:00Z',
    pullingUp: '2023-01-13T00:00:00Z',
    categoryId: 106,
    user: {
      name: 'User 6',
      userImage: {
        imageUrl: faker.image.avatar(),
      },
    },
    imageUrl: faker.image.url(),
  },
  {
    id: 7,
    userId: 7,
    head: 'Head 7',
    body: '<span>Body 1</span><br><span>Body 2</span>',
    createdAt: '2023-01-13T00:00:00Z',
    updatedAt: '2023-01-14T00:00:00Z',
    pullingUp: '2023-01-15T00:00:00Z',
    categoryId: 107,
    user: {
      name: 'User 7',
      userImage: {
        imageUrl: faker.image.avatar(),
      },
    },
    imageUrl: faker.image.url(),
  },
  {
    id: 8,
    userId: 8,
    head: 'Head 8',
    body: '<span>Body 1</span><br><span>Body 2</span>',
    createdAt: '2023-01-15T00:00:00Z',
    updatedAt: '2023-01-16T00:00:00Z',
    pullingUp: '2023-01-17T00:00:00Z',
    categoryId: 108,
    user: {
      name: 'User 8',
      userImage: {
        imageUrl: faker.image.avatar(),
      },
    },
    imageUrl: faker.image.url(),
  },
  {
    id: 9,
    userId: 9,
    head: 'Head 9',
    body: '<span>Body 1</span><br><span>Body 2</span>',
    createdAt: '2023-01-17T00:00:00Z',
    updatedAt: '2023-01-18T00:00:00Z',
    pullingUp: '2023-01-19T00:00:00Z',
    categoryId: 109,
    user: {
      name: 'User 9',
      userImage: {
        imageUrl: faker.image.avatar(),
      },
    },
    imageUrl: faker.image.url(),
  },
  {
    id: 10,
    userId: 10,
    head: 'Head 10',
    body: '<span>Body 1</span><br><span>Body 2</span>',
    createdAt: '2023-01-19T00:00:00Z',
    updatedAt: '2023-01-20T00:00:00Z',
    pullingUp: '2023-01-21T00:00:00Z',
    categoryId: 110,
    user: {
      name: 'User 10',
      userImage: {
        imageUrl: faker.image.avatar(),
      },
    },
    imageUrl: faker.image.url(),
  },
];

export const mentorBoards = [
  //멘토 리스트
  http.get('/mentor-boards', async () => {
    return HttpResponse.json({
      contents: contents,
    });
  }),

  //멘토 유닛
  http.get('/mentor-boards/unit', async ({ request }) => {
    const url = new URL(request.url);
    const productId = Number(url.searchParams.get('mentorBoardId'));
    const content = contents.find((content) => content.id === productId);
    return HttpResponse.json({ contents: content });
  }),

  //이미지 업로드
  http.post('/mentor-boards/images', async ({ request }) => {
    const image = await request.formData();
    const newImageUrl = faker.image.url();
    //백엔드에서 temp로 이미지 보내기
    return HttpResponse.json({ imgUrl: newImageUrl });
  }),
];
