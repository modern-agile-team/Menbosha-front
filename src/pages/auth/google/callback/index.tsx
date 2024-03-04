import LoginTemplate from '@/components/templates/LoginTemplate';
import React from 'react';

const GoogleCallback = () => {
  return (
    <div>
      <LoginTemplate provider="google" />
    </div>
  );
};

export default GoogleCallback;
