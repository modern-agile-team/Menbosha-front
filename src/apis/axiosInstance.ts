import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 5000,
});

//토근 갱신
const reNewToken = async () => {
  const response = await instance.get(`auth/new-access-token`);
  localStorage.setItem('accessToken', response.data.accessToken);
};

//요청 전 인터셉터
instance.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('accessToken') === undefined) {
      localStorage.setItem('accessToken', '');
    }
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    config.headers['access_token'] = accessToken;
    config.headers['refresh_token'] = refreshToken;

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
    if (error.response.status == 401 || error.response.status == 403) {
      reNewToken();
      const accessToken = localStorage.getItem('accessToken');

      error.config.headers['access_token'] = accessToken;

      // 중단된 요청을(에러난 요청)을 토큰 갱신 후 재요청
      const response = await instance(error.config);
      return response;
    }
    return Promise.reject(error);
    // return error;
  },
);

export default instance;
