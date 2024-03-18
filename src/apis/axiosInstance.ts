import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  timeout: 5000,
});

//토근 갱신
const reNewToken = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}auth/new-access-token`,
    );
    localStorage.setItem('accessToken', response.data.accessToken);
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      //재발급 중 에러 발생 시
      if (
        (err.response.data.message === 'invalid token' &&
          err.response.data.statusCode === 400) ||
        (err.response.data.message === 'token not found' &&
          err.response.data.statusCode === 404) ||
        (err.response.data.message === 'token mismatch' &&
          err.response.data.statusCode === 401)
      ) {
        window.location.href = '/';
        setTimeout(() => {
          window.localStorage.clear();
        }, 0);
      }
    }
  }
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
      (error.response.data.statusCode === 401 &&
        error.response.data.message === 'jwt expired') ||
      (error.response.data.statusCode === 404 &&
        error.response.data.message === 'token not found') ||
      (error.response.data.statusCode === 401 &&
        error.response.data.message === 'token mismatch')
    ) {
      //토큰 재발급
      if (
        error.response.data.statusCode === 401 &&
        error.response.data.message === 'jwt expired'
      ) {
        await reNewToken(); //스토리지에서 토큰 받아서 재발급 받는 로직
        const accessToken = localStorage.getItem('accessToken');

        error.config.headers['Authorization'] = ` Bearer ${accessToken}`;

        // 중단된 요청을(에러난 요청)을 토큰 갱신 후 재요청
        const response = await instance(error.config);
        return response;
      }
      //클라이언트 access와 redis access가 다를 때, 없을 때
      if (
        (error.response.data.statusCode === 401 &&
          error.response.data.message === 'token mismatch') ||
        (error.response.data.statusCode === 404 &&
          error.response.data.message === 'token not found')
      ) {
        alert(error.response.data.message);
        window.location.href = '/';
        setTimeout(() => {
          window.localStorage.clear();
        }, 0);
      }
    } else if (
      error.response.data.message === 'jwt malformed' &&
      error.response.data.statusCode === 400
    ) {
      window.alert('로그인이 필요합니다.');
      window.location.href = '/';
      return;
    }
    return Promise.reject(error);
    // return error;
  },
);

export default instance;
