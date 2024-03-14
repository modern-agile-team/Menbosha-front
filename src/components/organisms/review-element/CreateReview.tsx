import { checkList } from '@/components/common/check-list/checkList';
import * as S from './styled';
import { useEffect, useState } from 'react';
import { FlexBox } from '@/components/common/globalStyled/styled';
import MENTORS from '@/apis/mentors';
import { MentorCreateReviewRequestType } from '@/types/review';
import { useRouter } from 'next/router';
import axios from 'axios';

const CreateReview = ({ mentorId }: { mentorId: number }) => {
  const [checkArray, setCheckArray] = useState<string[]>([]);
  const [isCount, setIsCount] = useState(true);
  const [inputCount, setInputCount] = useState(0);
  const [inputContents, setInputContents] = useState('');
  const router = useRouter();

  const handleOnCheck = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    const name = target.className.split(' ');
    setCheckArray((prev) => [...prev, name[name.length - 1]]);
    //다시 클릭시 해제
    if (checkArray.includes(name[name.length - 1])) {
      const deleteArray = checkArray.filter(
        (data) => data !== name[name.length - 1],
      );
      setCheckArray(deleteArray);
    }
  };

  const handleSubmit = async () => {
    const requestData: MentorCreateReviewRequestType = {
      mentorId: mentorId,
      isCheck: checkArray,
      review: inputContents,
    };
    if (checkArray.length <= 3 && checkArray.length >= 1) {
      try {
        await MENTORS.createMentorReview(requestData);
        router.push({
          pathname: `/userpage/${mentorId}`,
          query: {
            id: mentorId,
          },
        });
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          err.response.data.message ===
            'A review for this mentor has already been submitted. Please try again tomorrow.' &&
            alert('같은 사람에게 리뷰는 하루에 한 번만 가능합니다.');
        }
      }
    } else {
      alert('후기 체크리스트는 최소 1개, 최대 3개 까지 선택 가능합니다.');
    }
  };

  const onTextareaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputCount(e.target.value.length);
    setInputContents(e.target.value);
  };

  //후기 글자 수 카운트
  useEffect(() => {
    if (inputCount > 200 || inputCount < 10) {
      setIsCount(false);
    } else {
      setIsCount(true);
    }
  }, [inputCount]);

  return (
    <S.ReviewWrapper>
      <S.CheckListContainer>
        {checkList.map((data) => {
          return (
            <>
              {!checkArray.includes(data.checkName) ? (
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
        * 후기 체크리스트는 3개 까지 선택할 수 있습니다.
      </S.CheckWarning>
      <S.ReviewInputContainer>
        <S.ReviewInputTitle isCount={isCount}>
          <div>후기를 써 주세요</div>
          <div>{inputCount}/200</div>
        </S.ReviewInputTitle>
        <S.ReviewAreaBox onChange={onTextareaHandler}></S.ReviewAreaBox>
      </S.ReviewInputContainer>
      <FlexBox type="flex" col="center">
        {isCount ? (
          <S.SubmitOn onClick={handleSubmit}>제출하기</S.SubmitOn>
        ) : (
          <S.SubmitOff>제출하기</S.SubmitOff>
        )}
      </FlexBox>
    </S.ReviewWrapper>
  );
};

export default CreateReview;
