import MentorBoardTemplate from '@/components/templates/mentor-template/MentorBoardTemplate';
import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React, { useEffect } from 'react';

const MentorBoard = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <MentorBoardTemplate lastPage={data.lastPage} />;
};

export default MentorBoard;

export const getServerSideProps: GetServerSideProps = async (context) => {
  axios.defaults.headers.common['Lang'] = context.locale;
  const { filterId } = context.query;
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}mentor-boards?loadOnlyPopular=false&categoryId=${Number(filterId)}&page=1&pageSize=10&orderField=id&sortOrder=DESC`,
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
