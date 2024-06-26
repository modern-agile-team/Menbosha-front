import { useEffect, useState, useCallback, useRef } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Image from 'next/image';
import * as S from './styled';
import { FlexBox, TextBox } from '@/components/common/globalStyled/styled';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import {
  CategorySelectAtom,
  SectionSelectAtom,
} from '@/recoil/atoms/CategorySelectAtom';
import { categoryList } from '@/components/common/category/categoryList';
import HELP from '@/apis/help';
import CategorySelectorBox from '@/components/molecules/create-board-elements/CategorySelector';
import SectionSelectorBox from '@/components/molecules/create-board-elements/ChoiceSection';
import MENTOR from '@/apis/mentor';

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

const CreateBody = () => {
  const [unitTitle, setUnitTitle] = useState<string>(''); //제목
  const [quillText, setQuillText] = useState<string>(''); //본문
  const category = useRecoilValue(CategorySelectAtom); //카테고리
  const [section, setSection] = useRecoilState(SectionSelectAtom);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [files, setFiles] = useState<IFileTypes[]>([]);
  const router = useRouter();
  const fileId = useRef<number>(0);
  const dragRef = useRef<HTMLLabelElement | null>(null);
  const resetSelect = useResetRecoilState(CategorySelectAtom);
  const [getHeadCount, setGetHeadCount] = useState(0); //제목 개수 상태
  const [isHeadCount, setIsHeadCount] = useState(false); //제목

  const onHeadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGetHeadCount(e.target.value.length);
    setUnitTitle(e.target.value);
  };

  //count가 맞으면 true
  useEffect(() => {
    if (getHeadCount <= 50 && getHeadCount >= 5) {
      setIsHeadCount(true);
    } else {
      setIsHeadCount(false);
    }
  }, [getHeadCount]);
  //어디에서 게시글 생성인지 불러옴
  useEffect(() => {
    let tempSection = '';
    if (String(router.query.location) === 'help') {
      tempSection = '도와주세요 게시판';
    } else if (String(router.query.location) === 'mentor') {
      tempSection = '멘토 게시판';
    } else {
      tempSection = '';
    }
    setSection(tempSection);
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
      if (
        category === '' ||
        quillText.length === 0 ||
        quillText === '<p><br></p>' ||
        quillText.length < '<p>1234567890</p>'.length ||
        section === '' ||
        isHeadCount === false
      ) {
        if (quillText.length === 0 || quillText === '<p><br></p>')
          return alert('본문내용을 입력해주세요.');
        if (quillText.length < '<p>1234567890</p>'.length)
          return alert('본문은 10자 이상 입력해야합니다.');
        if (section === '') return alert('게시판 위치를 선택해주세요.');
        if (category === '') return alert('카테고리를 선택해주세요.');
        if (!isHeadCount)
          return alert('제목은 5글자 이상 50글자 이하로 작성해주세요.');
      } else {
        const catID = categoryList.find((data) => data.category === category);
        const isData = {
          head: unitTitle,
          body: quillText,
          category: catID && catID.id,
        };
        if (section === '멘토 게시판') {
          const data = await MENTOR.createMentorBoard(isData);
          files[0] !== null &&
            (await MENTOR.createMentorBoardImage(formData, data.id));
          router.push({
            pathname: `/mentor/board`,
            query: {
              filterId: 1,
            },
          });
        }
        if (section === '도와주세요 게시판') {
          const data = await HELP.createHelpBoard(isData);
          files[0] !== null && (await HELP.createImg(formData, data.id));
          //router => 해당 글 로 페이지 이동
          router.push({
            pathname: `/help`,
            query: {
              filterId: 1,
            },
          });
        }
        resetSelect(); //게시글 카테고리 초기화
      }
    }
  };

  return (
    <S.CreateBoardWrapper>
      <S.CreateTitle>게시글 작성</S.CreateTitle>
      <S.CreateHelpContainer>
        <div>
          <S.CreateHeader>
            <div>
              <S.HeaderTextBox isCount={isHeadCount}>
                <div>제목</div>
                <div>{getHeadCount}/50</div>
              </S.HeaderTextBox>
              <S.CreateHeadValue
                type="text"
                value={unitTitle}
                placeholder="제목입력"
                onChange={onHeadHandler}></S.CreateHeadValue>
            </div>
            <div>
              <div>게시판 선택</div>
              <SectionSelectorBox />
            </div>
            <div>
              <div>카테고리</div>
              <CategorySelectorBox />
            </div>
          </S.CreateHeader>
          <S.CreateComboBoxContainer>
            <div>본문</div>
          </S.CreateComboBoxContainer>
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
        <TextBox
          color="#ff772b"
          size={20}
          style={{ margin: '48px 0px 16px 0px' }}>
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
                    +
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
        <FlexBox type="flex" col="right">
          <S.SubmitBox onClick={handleSubmit}>올리기</S.SubmitBox>
        </FlexBox>
      </S.CreateHelpContainer>
    </S.CreateBoardWrapper>
  );
};

export default CreateBody;
