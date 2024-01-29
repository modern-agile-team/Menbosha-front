import USER from '@/apis/user';
import { FlexBox, ImageBox } from '@/components/common/globalStyled/styled';
import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useRouter } from 'next/router';

const UpdateMyProfile = () => {
  const router = useRouter();
  const [updateInfo, setUpdateInfo] = useState({
    name: '',
    image: '',
    isMentor: false,
    hopeCategoryId: 0,
    activityCategoryId: 0,
    career: '',
    customCategory: '',
    detail: '',
    portfolio: '',
    shortIntro: '',
    sns: '',
    rank: 0,
  });

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setUpdateInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const getMyInfoApi = async () => {
    const response = await USER.getMyInfo();
    setUpdateInfo(() => {
      return {
        name: response.name,
        image: response.image,
        isMentor: response.isMentor,
        hopeCategoryId: response.hopeCategoryId,
        activityCategoryId: response.activityCategoryId,
        career: response.intro.career,
        customCategory: response.intro.customCategory,
        detail: response.intro.detail,
        portfolio: response.intro.portfolio,
        shortIntro: response.intro.shortIntro,
        sns: response.intro.sns,
        rank: response.rank,
      };
    });
  };

  const handleUpdateProfile = async () => {
    const temp = {
      isMentor: updateInfo.isMentor,
      hopeCategoryId: updateInfo.hopeCategoryId,
      activityCategoryId: updateInfo.activityCategoryId,
      career: updateInfo.career,
      customCategory: updateInfo.customCategory,
      detail: updateInfo.detail,
      portfolio: updateInfo.portfolio,
      shortIntro: updateInfo.shortIntro,
      sns: updateInfo.sns,
    };
    await USER.updateMyProfile(temp);
    router.push('/mypage/info');
  };

  useEffect(() => {
    getMyInfoApi();
  }, []);
  return (
    <div>
      <S.ContentContainer>
        <S.HeaderContentsBox>개인프로필</S.HeaderContentsBox>
        <S.HeaderContentsBox>
          <ImageBox
            src={updateInfo.image}
            width="280px"
            height="350px"
            size="contain"></ImageBox>
          <FlexBox type="flex">
            <div>
              <div>{updateInfo.name}</div>
              {updateInfo.isMentor ? <div>멘토</div> : <div>멘토아님</div>}
            </div>
            <div>{updateInfo.rank}</div>
          </FlexBox>
        </S.HeaderContentsBox>
        <S.HeaderContentsBox>설정</S.HeaderContentsBox>
      </S.ContentContainer>
      <S.ContentContainer>
        <S.BodyContentsBox>
          <div>소개</div>
          <input
            name="shortIntro"
            type="text"
            onChange={handleInputValue}
            value={updateInfo.shortIntro}></input>
        </S.BodyContentsBox>
        <S.BodyContentsBox>
          <div>주요경력</div>
          <input
            name="career"
            type="text"
            onChangeCapture={handleInputValue}
            value={updateInfo.career}></input>
        </S.BodyContentsBox>
        <S.BodyContentsBox>
          <div>관심카테고리</div>
          <input
            name="customCategory"
            type="text"
            onChange={handleInputValue}
            value={updateInfo.customCategory}></input>
        </S.BodyContentsBox>
      </S.ContentContainer>
      <S.ContentContainer>
        <S.DetailBox>
          <div>세부사항</div>
          <input
            name="detail"
            type="text"
            onChange={handleInputValue}
            value={updateInfo.detail}></input>
        </S.DetailBox>
      </S.ContentContainer>
      <S.ContentContainer>
        <S.ShareBox>
          <div>포트폴리오</div>
          <input
            name="portfolio"
            type="text"
            onChange={handleInputValue}
            value={updateInfo.portfolio}></input>
        </S.ShareBox>
        <S.ShareBox>
          <div>SNS</div>
          <input
            name="sns"
            type="text"
            onChange={handleInputValue}
            value={updateInfo.sns}></input>
        </S.ShareBox>
      </S.ContentContainer>
      <div onClick={handleUpdateProfile}>변경</div>
    </div>
  );
};

export default UpdateMyProfile;
