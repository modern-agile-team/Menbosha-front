import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 5000,
});

//토근 갱신
const reNewToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}auth/new-access-token`,
    {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    },
  );
  localStorage.setItem('accessToken', response.data.accessToken);
};

//요청 전 인터셉터
instance.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('accessToken') === undefined) {
      localStorage.setItem('accessToken', '');
    }
    const accessToken = localStorage.getItem('accessToken');

    config.headers['Authorization'] = `Bearer ${accessToken}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

//요청 후 인터셉터
instance.interceptors.response.use(
  (response) => {
    if (response.status === 404) {
      console.log('404 error');
    }
    return response;
  },
  async (error) => {
    if (
      error.response.data.statusCode === 401 &&
      error.response.data.message === 'jwt expired'
    ) {
      reNewToken();
      const accessToken = localStorage.getItem('accessToken');

      error.config.headers['Authorization'] = `Bearer ${accessToken}`;

      // 중단된 요청을(에러난 요청)을 토큰 갱신 후 재요청
      const response = await instance(error.config);
      return response;
    }
    return Promise.reject(error);
    // return error;
  },
);

export default instance;
