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
import ReactQuill from 'react-quill';
import MENTORS from '@/apis/mentors';

const QuillWrapper = dynamic(() => import('./QuillEditor'), {
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
    [{ align: [] }, 'link', 'image'],
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
  const [files, setFiles] = useState<IFileTypes[]>([]);
  const router = useRouter();
  const resetSelect = useResetRecoilState(CategorySelectAtom);
  const [getHeadCount, setGetHeadCount] = useState(0); //제목 개수 상태
  const [isHeadCount, setIsHeadCount] = useState(false); //제목
  const quillRef = useRef(null);

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
          <QuillWrapper />
        </div>
        <FlexBox type="flex" col="right">
          <S.SubmitBox onClick={handleSubmit}>올리기</S.SubmitBox>
        </FlexBox>
      </S.CreateHelpContainer>
    </S.CreateBoardWrapper>
  );
};

export default CreateBody;
