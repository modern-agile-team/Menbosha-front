import HELPCOMMENT from '@/apis/helpComment';
import { BoardIdType, HelpCommentType } from '@/types/help';
import { useEffect, useState } from 'react';

const UnitComment = ({ id }: BoardIdType) => {
  const [commentData, setCommentData] = useState<HelpCommentType[]>([]);

  /**도와줄게요 댓글 생성 */
  const handleCreateCommentApi = async () => {
    if (confirm('도움을 줄까요?')) {
      await HELPCOMMENT.createHelpComment(id);
    }
  };

  /**도와줄게요 댓글 삭제 */
  const handleDeleteCommentApi = async (commentId: number) => {
    if (confirm('도움을 철회하시겠습니까?')) {
      await HELPCOMMENT.deleteHelpComment(commentId);
    }
  };

  /**도와줄게요 댓글 호출 */
  const getCommentApi = async () => {
    const response = await HELPCOMMENT.getHelpComment(id);
    setCommentData(response);
  };

  useEffect(() => {
    getCommentApi();
  }, []);

  return (
    <div>
      <div onClick={handleCreateCommentApi}>생성</div>
      {commentData.map((data) => {
        return (
          <div>
            <div>{data.user.name}</div>
            {data.commentOwner && (
              <div onClick={() => handleDeleteCommentApi(data.id)}>
                도와주세요 철회
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default UnitComment;
