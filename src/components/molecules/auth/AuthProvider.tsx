import * as dotenv from 'dotenv';
import Image from 'next/image';

dotenv.config();

export const Naver = () => {
  const naverLogin = () => {
    window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_NAVER_REDIRECT_URL}&state=${process.env.NEXT_PUBLIC_NAVER_STATE}`;
  };

  return (
    <div>
      <Image
        src="https://ma6-main.s3.ap-northeast-2.amazonaws.com/ma6_main_images/naverImg.png"
        alt="네이버로그인"
        onClick={naverLogin}
        height={50}
        width={183}
      />
    </div>
  );
};

export const Kakao = () => {
  const kakaoLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}&response_type=code`;
  };
  return (
    <div>
      <Image
        src="https://ma6-main.s3.ap-northeast-2.amazonaws.com/ma6_main_images/kakaoImg.png"
        alt="카카오로그인"
        width={183}
        height={50}
        onClick={kakaoLogin}
      />
    </div>
  );
};

export const Google = () => {
  return (
    <div>
      <button>구글 로그인</button>
    </div>
  );
};
