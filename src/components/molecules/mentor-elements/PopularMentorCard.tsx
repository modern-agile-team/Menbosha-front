import * as S from './styled';
import {
  FlexBox,
  ImageBox,
  LinkBox,
  TextBox,
} from '@/components/common/globalStyled/styled';
import { PopularMentorType } from '@/types/user';
import { categoryList } from '@/components/common/category/categoryList';
import Link from 'next/link';

const PopularMentorCard = (props: PopularMentorType) => {
  return (
    <LinkBox
      color="#000"
      href={{
        pathname: `/mentor/unit/${props.userId}`,
        query: {
          id: props.userId,
        },
      }}>
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
            <TextBox size={20} color="#000" style={{ padding: '6px 0px' }}>
              {props.name}
            </TextBox>
            <TextBox
              size={12}
              color="#000"
              style={{ padding: '10px 0px 10px 0px' }}>
              {
                categoryList.find(
                  (data) => data.id === props.activityCategoryId,
                )?.category
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
        <S.CountBox>
          <TextBox size={12}>게시물 수</TextBox>
          <TextBox size={12}>후기 개수</TextBox>
        </S.CountBox>
      </S.PopularMentorCardContainer>
    </LinkBox>
  );
};

export default PopularMentorCard;
