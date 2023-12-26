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
import CategorySelectorBox from '@/components/common/category/CategorySelector';
import SectionSelectorBox from '@/components/molecules/create-board-elements/ChoiceSection';

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

const CreateHelpBody = () => {
  const [unitTitle, setUnitTitle] = useState<string>(''); //제목
  const [quillText, setQuillText] = useState<string>(''); //본문
  const [category, setCategory] = useRecoilState(CategorySelectAtom); //카테고리
  const [files, setFiles] = useState<IFileTypes[]>([]);
  const router = useRouter();
  const fileId = useRef<number>(0);
  const resetSelect = useResetRecoilState(CategorySelectAtom);

  /**이미지 추가 핸들러 */
  const onChangeFiles = useCallback(
    (e: React.ChangeEvent<HTMLInputElement> | any): void => {
      let selectFiles: File[] = [];
      let tempFiles: IFileTypes[] = files;
      // temp 변수를 이용하여 선택했던 파일들을 담습니다.

      // 드래그 했을 때와 안했을 때 가리키는 파일 배열을 다르게
      if (e.type === 'drop') {
        // 드래그 앤 드롭 했을때
        selectFiles = e.dataTransfer.files; //나중에 로직 추가
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
        const catID = categoryList.find((data) => data.category === category);
        const isData = {
          head: unitTitle,
          body: quillText,
          category: catID && catID.id,
        };
        const data = await HELP.createHelpBoard(isData);
        if (files[0] !== null) {
          await HELP.createImg(formData, data.id);
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
      <div>
        <S.CreateHeader>
          <TextBox color="#C63D2F" size={25} style={{ width: '80%' }}>
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
          <TextBox color="#C63D2F" size={25}>
            본문
          </TextBox>
          <FlexBox type="flex" style={{ marginLeft: 'auto' }}>
            <SectionSelectorBox />
            <CategorySelectorBox />
          </FlexBox>
        </FlexBox>
        <QuillWrapper
          value={quillText}
          theme="snow"
          modules={modules}
          formats={formats}
          placeholder="글을 작성해 주세요."
          onChange={(e: any) => setQuillText(e)}
          style={{
            height: 400,
            padding: '0px 0px 40px 0px',
            backgroundColor: '#e25e3e',
            color: '#fff',
          }}
        />
      </div>
      <S.Test>
        <TextBox color="#C63D2F" size={25}>
          사진
        </TextBox>
        <div>
          <input type="file" id="fileUpload" onChange={onChangeFiles} />
        </div>
        <div>
          {files.length > 0 &&
            files.map((file: IFileTypes) => {
              const { id, url } = file;
              return (
                <div key={id}>
                  <div onClick={() => handleFilterFile(id as number)}>X</div>
                  <Image
                    src={url as string}
                    alt="업로드 사진"
                    width={100}
                    height={100}
                  />
                </div>
              );
            })}
        </div>
        <S.SubmitBox onClick={handleSubmit}>올리기</S.SubmitBox>
      </S.Test>
    </S.CreateHelpContainer>
  );
};

export default CreateHelpBody;
