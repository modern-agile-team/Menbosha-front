import DOMPurify from 'dompurify';
/**
 *
 * @param htmlData | string형식으로 구정된 html 데이터
 *
 * @returns { __html : DOMPurify.sanitize(htmlData) } | htmlData를 DOMPurify.sanitize를 통해 정제된 데이터를 반환
 */
export const sanitizedData = (htmlData: string) => ({
  __html: DOMPurify.sanitize(htmlData),
});
