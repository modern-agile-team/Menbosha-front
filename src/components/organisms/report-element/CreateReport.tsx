import REPORT from '@/apis/report';
import { CreateReportRequestType } from '@/types/chat';
import { useEffect, useState } from 'react';
import * as S from './styled';
import { FlexBox } from '@/components/common/globalStyled/styled';
import { reportList } from '@/components/common/report-list/reportList';

const CreateReport = ({ userId }: { userId: number }) => {
  const [checkArray, setCheckArray] = useState<string[]>([]);
  const [isCount, setIsCount] = useState(true);
  const [inputCount, setInputCount] = useState(0);
  const [inputContents, setInputContents] = useState('');

  const handleOnCheck = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    const name = target.className.split(' ');
    const checkName = name[name.length - 1];

    const correspondingReport = reportList.find(
      (report) => report.checkName === checkName,
    );

    if (correspondingReport) {
      let description = correspondingReport.description;
      description = description.replace(/"/g, '');
      console.log(description);

      setCheckArray((prev) => {
        if (!prev.includes(description)) {
          return [...prev, description];
        } else {
          return prev.filter((data) => data !== description);
        }
      });
    }
  };
  useEffect(() => {
    console.log(checkArray);
  }, [checkArray]);

  const handleSubmit = async () => {
    const confirmed = window.confirm('정말 신고하시겠습니까?');

    if (confirmed) {
      const requestData: CreateReportRequestType = {
        userId: userId,
        isCheck: checkArray,
        report: inputContents,
      };

      if (checkArray.length >= 1) {
        await REPORT.createUserReport(requestData);
      } else {
        alert('최소 1개 이상의 신고 체크리스트를 선택해 주세요.');
      }
    }
  };

  const onTextareaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputCount(e.target.value.length);
    setInputContents(e.target.value);
  };

  useEffect(() => {
    if (inputCount > 200 || inputCount < 10) {
      setIsCount(false);
    } else {
      setIsCount(true);
    }
  }, [inputCount]);

  return (
    <S.ReportWrapper>
      <S.CheckListContainer>
        {reportList.map((data) => {
          return (
            <>
              {!checkArray.includes(data.description) ? (
                <S.CheckBox
                  className={data.checkName}
                  isCheck={true}
                  onClick={handleOnCheck}>
                  {data.description}
                </S.CheckBox>
              ) : (
                <S.CheckBox
                  className={data.checkName}
                  isCheck={false}
                  onClick={handleOnCheck}>
                  {data.description}
                </S.CheckBox>
              )}
            </>
          );
        })}
      </S.CheckListContainer>
      <S.CheckWarning>
        * 허위 신고 및 무분별한 신고내역은 관리자의 의해 제재될 수 있습니다.
      </S.CheckWarning>
      <S.ReportInputContainer>
        <S.ReportInputTitle isCount={isCount}>
          <div>신고사유를 써 주세요.</div>
          <div>{inputCount}/200</div>
        </S.ReportInputTitle>
        <S.ReportAreaBox onChange={onTextareaHandler} />
      </S.ReportInputContainer>
      <FlexBox type="flex" col="center">
        {isCount ? (
          <S.SubmitOn onClick={handleSubmit}>신고 제출하기</S.SubmitOn>
        ) : (
          <S.SubmitOff>신고 제출하기</S.SubmitOff>
        )}
      </FlexBox>
    </S.ReportWrapper>
  );
};

export default CreateReport;
