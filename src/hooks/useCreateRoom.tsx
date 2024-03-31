import CHAT from '@/apis/chat';
import { ChatRoomListAtom } from '@/recoil/atoms/ChatRoomListAtom';
import { CreateChatRoomRequestBody } from '@/types/chat';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

const useChatRoomCreate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // const [chatRoom, setChatRoom] = useRecoilState(ChatRoomListAtom);

  const handleCreateChatRoom = async (
    receiverId: number,
    chatRoomType: string = 'oneOnOne', // 기본값은 1:1이므로 이렇게 세팅
  ) => {
    try {
      setIsLoading(true);

      const requestBody: CreateChatRoomRequestBody = {
        receiverId,
        chatRoomType,
      };
      const result = await CHAT.createChatRoom(requestBody);
    } catch (error: any) {
      console.error('채팅룸 생성 시 오류가 발생했습니다.:', error);
      if (error.response && error.response.status === 403) {
        alert('본인과 채팅방을 생성할 수 없습니다.');
      } else if (error.response && error.response.status === 404) {
        alert('찾을 수 없는 사용자 입니다.');
      } else {
        setError('채팅룸 생성 실패');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleCreateChatRoom,
    isLoading,
    error,
  };
};

export default useChatRoomCreate;
