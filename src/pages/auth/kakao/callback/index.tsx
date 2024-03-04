import LoginTemplate from '@/components/templates/LoginTemplate';
import React from 'react';

const KakaoCallback = () => {
  return (
    <div>
      <LoginTemplate provider="kakao" />
    </div>
  );
};

export default KakaoCallback;
