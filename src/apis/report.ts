import { AxiosResponse } from 'axios';
import instance from './axiosInstance';
import { CreateReportRequestType } from '@/types/chat';

const REPORT = {
  path: `/users`,

  /** 유저 신고하기 api [post] */
  async createUserReport(content: CreateReportRequestType): Promise<any> {
    const result: AxiosResponse = await instance.post(
      `${REPORT.path}/${content.userId}/reports`,
      {
        type: content.isCheck,
        report: content.report,
      },
    );
    return result;
  },
};

export default REPORT;
