import { HttpResponse, http } from 'msw';

type createPostParams = {};
type createPostRequestBody = {};
type createPostResponseBody = {};

export const userHandler = [
  //게시글 생성 api
  http.post('/api/create', async ({ request }) => {
    const newPost = await request.json();
    return HttpResponse.json();
  }),
];
