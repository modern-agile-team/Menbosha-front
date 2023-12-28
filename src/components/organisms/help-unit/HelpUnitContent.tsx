import HELP from '@/apis/help';
import { HelpUnitType } from '@/types/help';
import { useEffect, useState } from 'react';
import * as S from './styled';
import { ImageBox, TextBox } from '@/components/common/globalStyled/styled';
import { useRouter } from 'next/router';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface BoardIdType {
  id: number;
}

const HelpUnitContent = ({ id }: BoardIdType) => {
  const [getUnitInfo, setUnitInfo] = useState<HelpUnitType>();
  const [isStateHtml, setStatHtml] = useState(false);
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
    setStatHtml(true);
  }, []);

  const settings = {
    // centerMode: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };

  return (
    <S.ContentWrapper>
      <div onClick={() => handleBack()}>이전</div>
      <div>
        <TextBox color="#C63D2F" size={40}>
          {getUnitInfo?.head}
        </TextBox>
        <TextBox color="#FFBB5C" size={10}>
          {getUnitInfo?.createdAt.slice(0, 10)}
        </TextBox>
        <S.SliderContainer>
          <S.StyledSlider {...settings}>
            {getUnitInfo?.helpMeBoardImages.map((data) => {
              return (
                <ImageBox
                  src={data.imageUrl}
                  width="46.8vw"
                  height="40vh"
                  size="46vw 40vh"></ImageBox>
              );
            })}
          </S.StyledSlider>
        </S.SliderContainer>
        {isStateHtml && (
          <TextBox
            size={16}
            color="#fff"
            style={{ padding: '0px 0px 10px 0px' }}
            dangerouslySetInnerHTML={{ __html: getUnitInfo?.body as string }}
          />
        )}
      </div>
    </S.ContentWrapper>
  );
};

export default HelpUnitContent;
