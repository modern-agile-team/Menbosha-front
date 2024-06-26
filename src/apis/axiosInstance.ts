import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  timeout: 3000, //3초동안 요청 안가면 timeout
});

//토근 갱신
const reNewToken = async () => {
  const response = await instance(`/auth/new-access-token`);
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
      window.location.href = '/404';
    }
    return response;
  },
  async (error) => {
    console.log('인스턴스에러', error);
    //요청 만료시
    if (error.message === 'timeout of 3000ms exceeded') {
      alert('요청시간이 초과되었습니다.');
      window.location.href = '/';
      window.localStorage.clear();
      return;
    }
    //토큰 재발급
    else if (
      error.response.data.statusCode === 401 ||
      error.response.data.statusCode === 404
    ) {
      if (
        error.response.data.statusCode === 401 &&
        error.response.data.message === 'jwt expired'
      ) {
        try {
          await reNewToken(); //스토리지에서 토큰 받아서 재발급 받는 로직
          const accessToken = localStorage.getItem('accessToken');

          error.config.headers['Authorization'] = `Bearer ${accessToken}`;

          // 중단된 요청을(에러난 요청)을 토큰 갱신 후 재요청
          const response = await instance(error.config);
          return response;
        } catch (err) {
          console.log('리프레쉬에레ㅓ', err);
          if (axios.isAxiosError(err) && err.response) {
            //재발급 중 에러 발생 시
            if (
              (err.response.data.message === 'invalid token' &&
                err.response.data.statusCode === 400) ||
              (err.response.data.message === 'token not found' &&
                err.response.data.statusCode === 404) ||
              (err.response.data.message === 'token mismatch' &&
                err.response.data.statusCode === 401) ||
              (err.response.data.statusCode === 400 &&
                err.response.data.message === 'jwt must be provided')
            ) {
              alert('로그인 갱신에 실패했습니다. 재 로그인 부탁드립니다.');
              window.location.href = '/';
              window.localStorage.clear();
              return;
            }
          }
        }
      }
      //클라이언트 access와 redis access가 다를 때 || 없을 때
      if (
        (error.response.data.statusCode === 401 &&
          error.response.data.message === 'token mismatch') ||
        (error.response.data.message === 'token not found' &&
          error.response.data.statusCode === 404)
      ) {
        alert(error.response.data.message);
        window.location.href = '/';
        window.localStorage.clear();
        return;
      }
    } else if (
      error.response.data.statusCode === 400 &&
      error.response.data.message === 'jwt malformed'
    ) {
      window.alert('로그인이 필요합니다.');
      window.location.href = '/';
      return;
    } else if (
      error.response.data.statusCode === 400 &&
      error.response.data.message === 'jwt must be provided'
    ) {
      window.alert('토큰이 만료되었습니다.');
      window.location.href = '/';
      window.localStorage.clear();
      return;
    }
    return;
  },
);

export default instance;
