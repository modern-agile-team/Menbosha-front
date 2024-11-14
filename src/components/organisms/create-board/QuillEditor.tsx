import styles from '../contents/QuillEditor.module.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useRef, useMemo, Dispatch, SetStateAction, useState } from 'react';
import instance from '@/apis/axiosInstance';
import * as S from './styled';

export default function QuillEditor() {
  const [value, setValue] = useState('');
  const quillRef = useRef<ReactQuill>(null);

  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.addEventListener('change', async () => {
      const file = input.files?.[0];
      try {
        //업로드 시 파일 이름으로 Date설정
        const formData = new FormData();
        formData.append('image', file as File);
        const res = await instance.post(`/mentor-boards/images`, file);
        const imgUrl = res.data.imgUrl;
        const editor = quillRef.current?.getEditor();
        if (editor) {
          const range = editor.getSelection();
          if (range) {
            editor.insertEmbed(range.index, 'image', imgUrl);
            editor.setSelection(range.index + 1);
          }
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: '1' }, { header: '2' }],
          [{ size: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }, { align: [] }],
          ['image'],
        ],
        handlers: { image: imageHandler },
      },
      clipboard: {
        matchVisual: false,
      },
    }),
    [],
  );

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
    'align',
    'image',
  ];

  return (
    <S.QuillBox>
      <ReactQuill
        ref={quillRef}
        onChange={setValue}
        modules={modules}
        formats={formats}
        value={value}
        placeholder={'미리보기 글'}
        theme="snow"
      />
    </S.QuillBox>
  );
}
