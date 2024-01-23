import { SideViewerAtom } from '@/recoil/atoms/SideViewerAtom';
import { useRecoilState } from 'recoil';
import * as S from './styled';
import {
  FlexBox,
  ImageBox,
  TextBox,
} from '@/components/common/globalStyled/styled';
import { MentorCardType, PopularMentorType } from '@/types/user';
import { categoryList } from '@/components/common/category/categoryList';

const PopularMentorCard = (props: PopularMentorType) => {
  const [sideViewer, setSideViewer] = useRecoilState(SideViewerAtom);

  return (
    <S.PopularMentorCardContainer>
      <ImageBox
        width="232px"
        height="232px"
        size="cover"
        style={{ borderRadius: 10, margin: 12 }}
      />
      <S.ProfileContentBox>
        <S.RankBox>
          <div></div>
          <div>랭크</div>
          <div>몇 점</div>
        </S.RankBox>
        <S.NameBox>
          <TextBox size={16} color="#000" style={{ padding: '13px 0px' }}>
            {props.name}
          </TextBox>
          <TextBox
            size={12}
            color="#000"
            style={{ padding: '10px 0px 10px 0px' }}>
            {props.mainField}
            {
              categoryList.find((data) => data.id === props.activityCategoryId)
                ?.category
            }
          </TextBox>
          <TextBox
            size={12}
            color="#000"
            style={{ padding: '0px 0px 10px 0px' }}>
            {props.introduce}
          </TextBox>
        </S.NameBox>
      </S.ProfileContentBox>
    </S.PopularMentorCardContainer>
  );
};

export default PopularMentorCard;
