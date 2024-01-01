import HELP from '@/apis/help';
import { HelpUnitType } from '@/types/help';
import { useEffect, useRef, useState } from 'react';
import * as S from './styled';
import { useRouter } from 'next/router';
import UnitContentHead from '@/components/molecules/help-unit-elements/UnitConentHead';
import UnitContentBody from '@/components/molecules/help-unit-elements/UnitContentBody';
import { LinkBox, TextBox } from '@/components/common/globalStyled/styled';

interface BoardIdType {
  id: number;
}

const HelpUnitContent = ({ id }: BoardIdType) => {
  const [getUnitInfo, setUnitInfo] = useState<HelpUnitType>();
  const router = useRouter();

  //Unit정보 불러오는 api
  const getHelpUnitApi = async () => {
    const response = await HELP.getHelpUnit(id);
    setUnitInfo(response);
  };

  const handleBack = () => {
    router.push('/help');
  };

  //Unit의 정보 불러오는 api호출
  useEffect(() => {
    getHelpUnitApi();
  }, []);

  return (
    <S.ContentWrapper>
      <LinkBox
        href={{
          pathname: '/help',
        }}
        color="#f2f"
        scroll={false}>
        이전
      </LinkBox>
      {/* <TextBox color="#f23" onClick={handleBack}>
        이전
      </TextBox> */}
      <div>
        {getUnitInfo && (
          <UnitContentHead
            head={getUnitInfo?.head}
            createdAt={getUnitInfo?.createdAt}
            unitOwner={getUnitInfo?.unitOwner}
            user={getUnitInfo?.user}
          />
        )}
        {getUnitInfo && (
          <UnitContentBody
            body={getUnitInfo.body}
            helpMeBoardImages={getUnitInfo.helpMeBoardImages}
          />
        )}
      </div>
    </S.ContentWrapper>
  );
};

export default HelpUnitContent;
