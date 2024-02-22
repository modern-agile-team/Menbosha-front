import MentorTemplate from '@/components/templates/mentor-template/MentorTemplate';
import { MentorListType, MentorPaginationParamsType } from '@/types/mentor';
import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useEffect, useState } from 'react';

const Mentor = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [getData, setData] = useState<MentorListType>();

  useEffect(() => {
    setData(data);
  }, [data]);

  return <MentorTemplate lastPage={getData?.lastPage as number} />;
};

export default Mentor;

export const getServerSideProps: GetServerSideProps = async (context) => {
  axios.defaults.headers.common['Lang'] = context.locale;
  const { filterId } = context.query;
  try {
    const params: MentorPaginationParamsType = {
      activityCategoryId: Number(filterId),
      page: 1,
      pageSize: 10,
      orderField: 'id',
      sortOrder: 'DESC',
    };
    // const response = await MENTORS.getMentorPagination(params);
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}mentors?activityCategoryId=${Number(filterId)}&page=1&pageSize=10&orderField=id&sortOrder=DESC`,
    );
    return {
      props: {
        data: res.data.contents,
      },
    };
  } catch (error: any) {
    return {
      props: {
        data: error.message,
      },
    };
  }
};
