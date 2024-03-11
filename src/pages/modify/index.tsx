import ModifyHelpTemplate from '@/components/templates/modify-template/ModifyHelpTemplate';
import ModifyMentorTemplate from '@/components/templates/modify-template/ModifyMentorTemplate';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const ModifyHelpUnit = () => {
  const router = useRouter();
  const [modifyLocation, setModifyLocation] = useState('');

  useEffect(() => {
    const temp = router.isReady && JSON.parse(router.query.data as string);
    setModifyLocation(temp.location);
  }, []);

  return (
    <div>
      {modifyLocation === 'mentor' ? (
        <ModifyMentorTemplate />
      ) : (
        <ModifyHelpTemplate />
      )}
    </div>
  );
};

export default ModifyHelpUnit;
