import HelpTemplate from '@/components/templates/help-template/HelpTemplate';
import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React from 'react';

const Mentee = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div style={{ margin: '0px 0px 10vh 0px' }}>
      <HelpTemplate lastPage={data.lastPage} />
    </div>
  );
};

export default Mentee;

export const getServerSideProps: GetServerSideProps = async (context) => {
  axios.defaults.headers.common['Lang'] = context.locale;
  const { filterId } = context.query;
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}help-me-boards?loadOnlyPullingUp=false&categoryId=${Number(filterId)}&page=1&pageSize=10&orderField=id&sortOrder=DESC`,
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
