import instance from '@/apis/axiosInstance';

const uploadToServer = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('file', file);
  const res = await instance.post(`/mentor-boards/images`, formData);
  const url = res.data.url;
  return url;
};

export default uploadToServer;
