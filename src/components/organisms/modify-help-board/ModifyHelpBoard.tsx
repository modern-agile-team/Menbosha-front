import { useEffect, useState, useCallback, useRef } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Image from 'next/image';
import * as S from './styled';
import { FlexBox, TextBox } from '@/components/common/globalStyled/styled';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { CategorySelectAtom } from '@/recoil/atoms/CategorySelectAtom';
import { categoryList } from '@/components/common/category/categoryList';
import HELP from '@/apis/help';
import CategorySelectorBox from '@/components/molecules/create-board-elements/CategorySelector';
import SectionSelectorBox from '@/components/molecules/create-board-elements/ChoiceSection';
import { ModifyHelpUnitType } from '@/types/help';

const QuillWrapper = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
];

export interface IFileTypes {
  id?: number; // 파일들의 고유값 id
  object?: File;
  url?: string;
}

const ModifyHelpBoard = (props: ModifyHelpUnitType) => {
  const [unitTitle, setUnitTitle] = useState<string>(''); //제목
  const [quillText, setQuillText] = useState<string>(''); //본문
  const [category, setCategory] = useRecoilState(CategorySelectAtom); //카테고리
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [files, setFiles] = useState<IFileTypes[]>([]);
  const router = useRouter();
  const fileId = useRef<number>(0);
  const dragRef = useRef<HTMLLabelElement | null>(null);
  const [delImg, setDelImg] = useState<string[]>([]);
  const resetSelect = useResetRecoilState(CategorySelectAtom);

  /**수정 전 값 불러오기 */
  const getModifyInfo = () => {
    const temp = categoryList.find((data) => data.id === props.categoryId)
      ?.category;
    let tempFiles: IFileTypes[] = files;
    setUnitTitle(props.head as string);
    setQuillText(props.body as string);
    setCategory(temp as string);
    for (const file of props.image) {
      tempFiles = [
        ...tempFiles,
        {
          id: fileId.current++, // fileId의 값을 1씩 늘려주면서 각 파일의 고유값
          object: file as File,
          url: file.imageUrl,
        },
      ];
    }
    setFiles(tempFiles);
  };

  useEffect(() => {
    getModifyInfo();
  }, []);

  /**이미지 추가 핸들러 */
  const onChangeFiles = useCallback(
    (e: React.ChangeEvent<HTMLInputElement> | any): void => {
      let selectFiles: File[] = [];
      let tempFiles: IFileTypes[] = files;
      // temp 변수를 이용하여 선택했던 파일들을 담습니다.

      // 드래그 했을 때와 안했을 때 가리키는 파일 배열을 다르게
      if (e.type === 'drop') {
        // 드래그 앤 드롭 했을때
        selectFiles = e.dataTransfer.files;
      } else {
        selectFiles = e.target.files;
        // "파일 첨부" 버튼을 눌러서 이미지를 선택했을때
      }

      for (const file of selectFiles) {
        tempFiles = [
          ...tempFiles,
          {
            id: fileId.current++, // fileId의 값을 1씩 늘려주면서 각 파일의 고유값
            object: file, // object 객체안에 선택했던 파일들의 정보가 담겨있습니다.
            url: URL.createObjectURL(file),
          },
        ];
      }

      setFiles(tempFiles);
    },
    [files],
  ); // 위에서 선언했던 files state 배열을 deps에 넣어줍니다.

  /** 이미지 삭제 핸들러 */
  const handleFilterFile = useCallback(
    (id: number): void => {
      setFiles(files.filter((file: IFileTypes) => file.id !== id));
      files
        .filter((data) => data.id === id)
        .map((data) => {
          if (data.url) {
            setDelImg((prev) => [...prev, data.url as string]);
          }
        });
    },
    [files],
  );

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

  const handleSubmit = async () => {
    const formData = new FormData();
    files.map((data) => {
      formData.append('files', data.object as File);
    });
    if (confirm('업로드하시겠습니까?')) {
      if (category === '' || unitTitle === '' || quillText === '') {
        if (category === '') alert('카테고리를 선택해주세요.');
        if (unitTitle === '') alert('제목을 입력해주세요.');
        if (quillText === '') alert('본문내용을 입력해주세요.');
      } else {
        const catID = categoryList.find((data) => data.category === category)
          ?.id;
        console.log(typeof catID);
        const isData = {
          id: props.id,
          head: unitTitle,
          body: quillText,
          categoryId: catID as number,
        };
        const data = await HELP.ModifyHelpUnit(isData);
        if (files[0] !== null) {
          await HELP.modifyImg(formData, data.id, delImg);
        }
        //router => 해당 글 로 페이지 이동
        router.push({
          pathname: `/help`,
        });
        resetSelect(); //게시글 카테고리 초기화
      }
    }
  };

  return (
    <S.CreateHelpContainer>
      <S.CreateTitle>게시글 수정하기</S.CreateTitle>
      <div>
        <S.CreateHeader>
          <TextBox color="#000" size={20} style={{ width: '100%' }}>
            제목
          </TextBox>
          <S.CreateHeadValue
            type="text"
            value={unitTitle}
            placeholder="제목입력"
            onChange={(e: any) => {
              setUnitTitle(e.target.value);
            }}></S.CreateHeadValue>
        </S.CreateHeader>
        <FlexBox type="flex">
          <TextBox color="#000" size={20}>
            본문
          </TextBox>
          <FlexBox type="flex" style={{ marginLeft: 'auto' }}>
            <SectionSelectorBox />
            <CategorySelectorBox />
          </FlexBox>
        </FlexBox>
        <S.QuillBox>
          <QuillWrapper
            value={quillText}
            modules={modules}
            formats={formats}
            placeholder="글을 작성해 주세요."
            onChange={(e: any) => setQuillText(e)}
            style={{
              backgroundColor: '#fff',
              color: '#000',
              height: '100%',
              minHeight: 400,
              borderRadius: 15,
            }}
          />
        </S.QuillBox>
      </div>
      <TextBox color="#000" size={20} style={{ margin: '48px 0px 16px 0px' }}>
        사진{' '}
        <TextBox color="#f00" size={11}>
          이미지는 3개까지만 업로드 가능합니다.
        </TextBox>
      </TextBox>
      <FlexBox type="flex"></FlexBox>
      <div
        style={{
          display: 'flex',
        }}>
        <S.ImageUploadBox>
          <div>
            <FlexBox type="flex">
              {files.length > 0 &&
                files.map((file: IFileTypes) => {
                  const { id, url } = file;
                  return (
                    <div key={id} style={{ margin: 5 }}>
                      <Image
                        src={url as string}
                        alt="업로드 사진"
                        width={200}
                        height={180}
                        onClick={() => handleFilterFile(id as number)}
                      />
                    </div>
                  );
                })}
              {files.length > 2 ? (
                <div></div>
              ) : (
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
              )}
            </FlexBox>
            <input
              type="file"
              id="fileUpload"
              onChange={onChangeFiles}
              style={{ display: 'none' }}
            />
          </div>
        </S.ImageUploadBox>
      </div>
      <S.SubmitBox onClick={handleSubmit}>올리기</S.SubmitBox>
    </S.CreateHelpContainer>
  );
};

export default ModifyHelpBoard;
