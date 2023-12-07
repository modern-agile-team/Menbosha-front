import { useCallback, useState } from 'react';

const useModal = () => {
  const [isOpenModal, setOpenModal] = useState(false);

  const handleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return {
    isOpenModal,
    handleModal,
  };
};

export default useModal;
