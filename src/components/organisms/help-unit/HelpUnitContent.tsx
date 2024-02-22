import HELP from '@/apis/help';
import { BoardIdType, HelpUnitType } from '@/types/help';
import { useEffect, useRef, useState } from 'react';
import * as S from './styled';
import { useRouter } from 'next/router';
import UnitContentHead from '@/components/molecules/help-unit-elements/UnitConentHead';
import UnitContentBody from '@/components/molecules/help-unit-elements/UnitContentBody';
import { LinkBox } from '@/components/common/globalStyled/styled';
import UnitComment from '@/components/molecules/help-unit-elements/UnitComment';

const HelpUnitContent = ({ id }: BoardIdType) => {
  const [getUnitInfo, setUnitInfo] = useState<HelpUnitType>();
  const router = useRouter();

  //Unit정보 불러오는 api
  const getHelpUnitApi = async () => {
    const response = await HELP.getHelpUnit(id);
    setUnitInfo(response);
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
      <div>
        <div>
          {getUnitInfo && (
            <div>
              <UnitContentHead {...getUnitInfo} />
              <UnitContentBody
                body={getUnitInfo.body}
                helpMeBoardImages={getUnitInfo.helpMeBoardImages}
              />
            </div>
          )}
        </div>
        <UnitComment id={id} />
      </div>
    </S.ContentWrapper>
  );
};

export default HelpUnitContent;
