import { AskElementsPropsType, AskElementsType } from '@/types/support';
import { useState } from 'react';
import * as S from './styled';

const SupportComboBox = (props: AskElementsPropsType) => {
  const [askShow, setAskShow] = useState(false);

  const handleAskShow = () => {
    setAskShow(!askShow);
  };

  return (
    <S.AskContentWrapper onClick={handleAskShow}>
      {!askShow ? (
        <S.BeforeTitleContainer>
          <div>{props.title}</div>
          <S.ArrowIcon show={askShow} />
        </S.BeforeTitleContainer>
      ) : (
        <S.AfterTitleContainer>
          <div>
            <div>{props.title}</div>
            <S.ArrowIcon show={askShow} />
          </div>
          <div>{props.description}</div>
        </S.AfterTitleContainer>
      )}
    </S.AskContentWrapper>
  );
};
export default SupportComboBox;
