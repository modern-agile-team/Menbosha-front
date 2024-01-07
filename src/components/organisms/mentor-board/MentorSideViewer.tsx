import { SideViewerAtom } from '@/recoil/atoms/SideViewerAtom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './styled';
import { TextBox } from '@/components/common/globalStyled/styled';

interface SlideType {
  slide: () => void;
}

const MentorSideViewer = ({ slide }: SlideType) => {
  const [getMentoUnit, setMentoUnit] = useState<any>(null);
  const [sideViewer, setSideViewer] = useRecoilState(SideViewerAtom);

  //유저 모킹
  const getMentoUserApi = async () => {
    const res = await axios.get(`/api/mento-unit`, {
      params: {
        id: sideViewer,
      },
    });
    setMentoUnit(res.data[0]);
  };

  useEffect(() => {
    //id가 있을 때 api요청
    sideViewer && getMentoUserApi();
  }, [sideViewer]);

  return (
    <S.SideViewerWrapper>
      {getMentoUnit && (
        <div>
          <TextBox color="#C63D2F" size={40}>
            {getMentoUnit.name}
          </TextBox>
          <S.SideProfileContainer>
            <div>
              <S.ImageBox>이미지 들어올자리</S.ImageBox>
              <TextBox onClick={slide} color="#FFBB5C">
                이전
              </TextBox>
            </div>
            <div>
              <S.ProfileViewBox>
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
                    {getMentoUnit.career}
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
                    {getMentoUnit.mainField}
                  </TextBox>
                </div>
              </S.ProfileViewBox>
              <TextBox color="#FFBB5C" size={20} style={{ padding: '28px' }}>
                소개
              </TextBox>
              <TextBox color="#fff" size={15} style={{ padding: '28px' }}>
                {getMentoUnit.introduct}
              </TextBox>
            </div>
          </S.SideProfileContainer>
        </div>
      )}
    </S.SideViewerWrapper>
  );
};

export default MentorSideViewer;
