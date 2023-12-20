import * as dotenv from 'dotenv';
import Image from 'next/image';

dotenv.config();

//랜덤 난수 생성 함수
const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};
export const Naver = () => {
  const naverLogin = () => {
    // window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${
    //   process.env.NEXT_PUBLIC_NAVER_CLIENT_ID
    // }&redirect_uri=${
    //   process.env.NEXT_PUBLIC_NAVER_REDIRECT_URL
    // }&state=${getRandomInt(1, 9999)}`;
    window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_NAVER_REDIRECT_URL}&state=test`;
  };

  return (
    <div>
      <Image
        src="/Group-88.jpeg"
        alt="네이버로그인"
        onClick={naverLogin}
        height={126}
        width={126}
      />
    </div>
  );
};

export const Kakao = () => {
  const kakaoLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${
      process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID
    }&redirect_uri=${
      process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL
    }&response_type=code&state=${getRandomInt(1, 9999)}`;
  };
  return (
    <div>
      <Image
        src="/Group-90.jpeg"
        alt="카카오로그인"
        width={126}
        height={126}
        onClick={kakaoLogin}
      />
    </div>
  );
};

export const Google = () => {
  const googleLogin = () => {
    // window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&access_type=offline&include_granted_scopes=true&response_type=code&state=${getRandomInt(
    //   1,
    //   9999,
    // )}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL}&client_id=${
    //   process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
    // }`;
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&access_type=offline&include_granted_scopes=true&response_type=code&state=test&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL}&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`;
  };
  return (
    <div>
      <Image
        src="/Group-89.jpeg"
        alt="구글로그인"
        width={126}
        height={126}
        onClick={googleLogin}
      />
    </div>
  );
};
