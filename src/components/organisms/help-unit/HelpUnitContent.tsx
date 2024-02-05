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

  const handlePullingUp = async () => {
    if (confirm('끌올시키시겠습니까?')) {
      await HELP.pullingUp(id);
    }
    sessionStorage.setItem(
      '__next_scroll_back',
      JSON.stringify({
        x: 0,
        y: 0,
      }),
    );
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
      <div>
        <div onClick={handlePullingUp}>끌올시키기</div>
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
