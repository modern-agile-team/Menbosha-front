import HELP from '@/apis/help';
import { FlexBox, TextBox } from '@/components/common/globalStyled/styled';
import { HelpUnitType } from '@/types/help';
import { useEffect, useState } from 'react';
import * as S from './styled';

interface BoardIdType {
  id: number;
}

const HelpUnitContent = ({ id }: BoardIdType) => {
  const [getUnitInfo, setUnitInfo] = useState<HelpUnitType>();

  //Unit정보 불러오는 api
  const getHelpUnitApi = async () => {
    const response = await HELP.getHelpUnit(id);
    setUnitInfo(response);
  };

  //Unit의 정보 불러오는 api호출
  useEffect(() => {
    getHelpUnitApi();
  }, []);

  useEffect(() => {
    console.log(getUnitInfo);
  });
  return (
    <S.ContentWrapper>
      {getUnitInfo && (
        <div>
          <TextBox color="#C63D2F" size={40}>
            {getUnitInfo.user.name}
          </TextBox>
          <FlexBox type="flex">
            <div>
              <S.ImageBox>이미지 들어올자리</S.ImageBox>
              <TextBox color="#FFBB5C">이전</TextBox>
            </div>
            <div>
              <FlexBox type="flex">
                <div>
                  <TextBox
                    color="#FFBB5C"
                    size={20}
                    style={{ padding: '28px' }}>
                    주요경력
                  </TextBox>
                  <TextBox
                    color="#fff"
                    size={15}
                    style={{
                      display: 'flex',
                      padding: '28px',
                      width: 280,
                      flexWrap: 'wrap',
                    }}>
                    {}
                  </TextBox>
                </div>
                <div>
                  <TextBox
                    color="#FFBB5C"
                    size={20}
                    style={{ padding: '28px' }}>
                    멘토링분야
                  </TextBox>
                  <TextBox color="#fff" size={15} style={{ padding: '28px' }}>
                    {}
                  </TextBox>
                </div>
              </FlexBox>
              <TextBox color="#FFBB5C" size={20} style={{ padding: '28px' }}>
                소개
              </TextBox>
              <TextBox color="#fff" size={15} style={{ padding: '28px' }}>
                {}
              </TextBox>
            </div>
          </FlexBox>
        </div>
      )}
    </S.ContentWrapper>
  );
};

export default HelpUnitContent;
