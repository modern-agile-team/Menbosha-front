import USER from '@/apis/user';
import { FlexBox, ImageBox } from '@/components/common/globalStyled/styled';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './styled';
import { useRouter } from 'next/router';
import { IFileTypes } from '../create-board/CreateBody';

export interface ImageType {
  object: File;
  url: string;
}

const UpdateMyProfile = () => {
  const dragRef = useRef<HTMLLabelElement | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [imgFile, setImgFiles] = useState<ImageType>();
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
    if (imgFile) {
      const formData = new FormData();
      formData.append('file', imgFile.object);
      await USER.updateMyImage(formData);
    }
    router.push('/mypage/info');
  };

  const handleToggleMentor = () => {
    setUpdateInfo((prev) => {
      return {
        ...prev,
        isMentor: !updateInfo.isMentor,
      };
    });
  };

  /**이미지 추가 핸들러 */
  const onChangeFiles = useCallback(
    (e: React.ChangeEvent<HTMLInputElement> | any): void => {
      let selectFiles: File;
      let tempFiles: ImageType;
      // temp 변수를 이용하여 선택했던 파일들을 담습니다.

      // 드래그 했을 때와 안했을 때 가리키는 파일 배열을 다르게
      if (e.type === 'drop') {
        // 드래그 앤 드롭 했을때
        selectFiles = e.dataTransfer.files[0];
      } else {
        selectFiles = e.target.files[0];
        // "파일 첨부" 버튼을 눌러서 이미지를 선택했을때
      }

      (tempFiles = {
        object: selectFiles, // object 객체안에 선택했던 파일들의 정보가 담겨있습니다.
        url: URL.createObjectURL(selectFiles),
      }),
        setImgFiles(() => {
          return {
            object: tempFiles.object,
            url: tempFiles.url,
          };
        });
    },
    [imgFile],
  ); // 위에서 선언했던 files state 배열을 deps에 넣어줍니다.

  /** 이미지 삭제 핸들러 */
  const handleFilterFile = useCallback((): void => {
    setImgFiles(undefined);
  }, [imgFile]);

  useEffect(() => {
    getMyInfoApi();
  }, []);

  const handleDragIn = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer!.files) {
      setIsDragging(true);
    }
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      onChangeFiles(e);
      setIsDragging(false);
    },
    [onChangeFiles],
  );

  const initDragEvents = useCallback((): void => {
    // 앞서 말했던 4개의 이벤트에 Listener를 등록합니다. (마운트 될때)

    if (dragRef.current !== null) {
      dragRef.current.addEventListener('dragenter', handleDragIn);
      dragRef.current.addEventListener('dragleave', handleDragOut);
      dragRef.current.addEventListener('dragover', handleDragOver);
      dragRef.current.addEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = useCallback((): void => {
    // 앞서 말했던 4개의 이벤트에 Listener를 삭제합니다. (언마운트 될때)

    if (dragRef.current !== null) {
      dragRef.current.removeEventListener('dragenter', handleDragIn);
      dragRef.current.removeEventListener('dragleave', handleDragOut);
      dragRef.current.removeEventListener('dragover', handleDragOver);
      dragRef.current.removeEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  useEffect(() => {
    initDragEvents();

    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

  return (
    <div>
      <S.ContentContainer>
        <S.HeaderContentsBox>개인프로필</S.HeaderContentsBox>
        <S.HeaderContentsBox>
          {!imgFile ? (
            <S.DropDownImageBox
              htmlFor="fileUpload"
              ref={dragRef}
              drag={isDragging}>
              <div>
                <div>+</div>
                <div>파일을 드래그해서 놓아주세요.</div>
                <div>아이콘을 눌러 파일을 직접 선택하세요</div>
              </div>
            </S.DropDownImageBox>
          ) : (
            <div style={{ margin: 5 }}>
              <ImageBox
                src={imgFile.url as string}
                width="280px"
                height="350px"
                size="contain"
                onClick={handleFilterFile}
              />
              <div onClick={handleFilterFile}>X</div>
            </div>
          )}
          <input
            type="file"
            id="fileUpload"
            onChange={onChangeFiles}
            style={{ display: 'none' }}
          />
          <FlexBox type="flex">
            <div>
              <div>{updateInfo.name}</div>
            </div>
            <div>{updateInfo.rank}</div>
          </FlexBox>
        </S.HeaderContentsBox>
        <S.HeaderContentsBox>
          {/* 나중에 UI하나로 구성해서 토글형태 버튼 만들기 */}
          {updateInfo.isMentor ? (
            <div onClick={handleToggleMentor}>멘토</div>
          ) : (
            <div onClick={handleToggleMentor}>멘토아님</div>
          )}
        </S.HeaderContentsBox>
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
