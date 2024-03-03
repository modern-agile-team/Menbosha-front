import HELP from '@/apis/help';
import { BoardIdType, HelpUnitType } from '@/types/help';
import { useEffect, useState } from 'react';
import * as S from './styled';
import { useRouter } from 'next/router';
import UnitContentHead from '@/components/molecules/help-unit-elements/UnitConentHead';
import UnitContentBody from '@/components/molecules/help-unit-elements/UnitContentBody';
import UnitComment from '@/components/molecules/help-unit-elements/UnitComment';
import HelpUnitContentHeadSkeleton from '@/components/molecules/help-unit-elements/HelpUnitContentHeadSkeleton';
import HelpUnitContentBodySkeleton from '@/components/molecules/help-unit-elements/HelpUnitContentBodySkeleton';

const HelpUnitContent = ({ id }: BoardIdType) => {
  const [getUnitInfo, setGetUnitInfo] = useState<HelpUnitType>();
  const [load, setLoad] = useState(false);
  const router = useRouter();

  //Unit정보 불러오는 api
  const getHelpUnitApi = async () => {
    try {
      const response = await HELP.getHelpUnit(id);
      setGetUnitInfo(response);
      setLoad(true);
    } catch {}
  };

  const handleBack = () => {
    router.back();
  };

  //Unit의 정보 불러오는 api호출
  useEffect(() => {
    getHelpUnitApi();
  }, []);

  return (
    <S.ContentWrapper>
      <S.PrevImg
        onClick={handleBack}
        src="https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/prevBtn.svg"
      />
      <S.HelpUnitContentContainer>
        <>
          {getUnitInfo && load ? (
            <>
              <UnitContentHead {...getUnitInfo} />
              <UnitContentBody
                body={getUnitInfo.body}
                helpMeBoardImages={getUnitInfo.helpMeBoardImages}
              />
            </>
          ) : (
            <>
              <HelpUnitContentHeadSkeleton />
              <HelpUnitContentBodySkeleton />
            </>
          )}
        </>
        <S.HelpCommentWrapper>
          <UnitComment id={id} />
        </S.HelpCommentWrapper>
      </S.HelpUnitContentContainer>
    </S.ContentWrapper>
  );
};

export default HelpUnitContent;
