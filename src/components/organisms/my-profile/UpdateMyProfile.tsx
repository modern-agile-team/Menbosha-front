import USER from '@/apis/user';
import { FlexBox, ImageBox } from '@/components/common/globalStyled/styled';
import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import * as S from './styled';
import { useRouter } from 'next/router';
import { IFileTypes } from '../create-board/CreateBody';
import Link from 'next/link';
import { categoryList } from '@/components/common/category/categoryList';

export interface ImageType {
  object: File;
  url: string;
}

const UpdateMyProfile = () => {
  const dragRef = useRef<HTMLLabelElement | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [imgFile, setImgFiles] = useState<ImageType>();
  const router = useRouter();
  const [hopeCategory, setHopeCategory] = useState(0);
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

  const handleInputValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
    setHopeCategory(response.activityCategoryId);
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
    if (confirm('저장하시겠습니까?')) {
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
    }
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

  //드레그 했을 시 동작
  useEffect(() => {
    initDragEvents();

    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

  //버튼 클릭시마다 타입을 바꿔줍니다
  const onChangeMode = (type: boolean) => {
    if (!type) {
      setUpdateInfo((prev) => {
        return {
          ...prev,
          isMentor: true,
        };
      });
    } else {
      setUpdateInfo((prev) => {
        return {
          ...prev,
          isMentor: false,
        };
      });
    }
  };

  //카테고리 값 변경
  const handleHopeCategory = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const value = target.innerHTML;
    const temp = categoryList.find((data) => data.category === value)?.id;
    if (temp) {
      setHopeCategory(temp);
    }
    if (temp === hopeCategory) {
      setHopeCategory(1);
    }
  };

  return (
    <>
      <S.UpdateProfileTitleBox>
        <div>프로필 수정</div>
      </S.UpdateProfileTitleBox>
      <S.UpdateProfileContainer>
        <div></div>
        <div>프로필 사진</div>
        <div></div>
        <div>
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
            <div>
              <img src={imgFile.url as string} onClick={handleFilterFile} />
            </div>
          )}
          <input
            type="file"
            id="fileUpload"
            onChange={onChangeFiles}
            style={{ display: 'none' }}
          />
        </div>
        <div>
          <S.ToggleWrapper
            value={updateInfo.isMentor}
            onClick={() => onChangeMode(updateInfo.isMentor)}>
            <span />
            <S.ToggleButton type="button">멘토</S.ToggleButton>
            <S.ToggleButton type="button">멘티</S.ToggleButton>
          </S.ToggleWrapper>
        </div>
        <div>
          <div>희망 카테고리</div>
          <S.HopeCategoryContainer>
            {categoryList.map((data) => {
              return (
                <div>
                  {hopeCategory === data.id ? (
                    <S.CategoryBox
                      isCategory={true}
                      onClick={handleHopeCategory}>
                      {data.category}
                    </S.CategoryBox>
                  ) : (
                    <S.CategoryBox
                      isCategory={false}
                      onClick={handleHopeCategory}>
                      {data.category}
                    </S.CategoryBox>
                  )}
                </div>
              );
            })}
          </S.HopeCategoryContainer>
        </div>
        <div>
          <div>소개</div>
          <textarea
            name="shortIntro"
            onChange={handleInputValue}
            value={updateInfo.shortIntro}
            placeholder="소개를 짧게 입력해 주세요.">
            {updateInfo?.shortIntro}
          </textarea>
        </div>
        <div>
          <div>주요경력</div>
          <textarea
            name="career"
            onChange={handleInputValue}
            value={updateInfo.career}
            placeholder="주요 경력을 입력해 주세요.">
            {updateInfo?.career}
          </textarea>
        </div>
        <div>
          <div>관심카테고리</div>
          <textarea
            name="customCategory"
            onChange={handleInputValue}
            value={updateInfo.customCategory}
            placeholder="세부 카테고리를 자유롭게 입력해주세요.
          예) 프로그래밍, IT, UX, UI">
            {updateInfo?.customCategory}
          </textarea>
        </div>
        <div>
          <div>세부사항</div>
          <textarea
            name="detail"
            onChange={handleInputValue}
            value={updateInfo.detail}
            placeholder="자신을 어필해 주세요.">
            {updateInfo?.detail}
          </textarea>
        </div>
        <div>
          <div>포트폴리오</div>
          <textarea
            name="portfolio"
            onChange={handleInputValue}
            value={updateInfo.portfolio}
            placeholder="링크를 입력해 주세요.">
            {updateInfo?.portfolio}
          </textarea>
        </div>
        <div>
          <div>SNS</div>
          <textarea
            name="sns"
            onChange={handleInputValue}
            value={updateInfo.sns}
            placeholder="링크를 입력해 주세요.">
            {updateInfo?.sns}
          </textarea>
        </div>
        <div>
          <div>휴대폰인증</div>
          <div>아직 구현되지 않았습니다.</div>
        </div>
        <div></div>
        <div>
          <div onClick={handleUpdateProfile}>저장</div>
        </div>
      </S.UpdateProfileContainer>
    </>
  );
};

export default UpdateMyProfile;
