import CHAT from '@/apis/chatApi/chat';
import { ChatRoomListAtom } from '@/recoil/atoms/ChatRoomListAtom';
import { CreateChatRoomRequestBody } from '@/types/chat';
import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

const useChatRoomCreate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // const [createChatRoom, setCreateChatRoom] = useState<any | null>(null);
  const [chatRoom, setChatRoom] = useRecoilState(ChatRoomListAtom);

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
      setChatRoom(result.data.content);
      console.log('채팅룸 생성 성공:', result.data.content);
    } catch (error) {
      console.error('채팅룸 생성 시 오류가 발생했습니다.:', error);
      setError('채팅룸 생성 실패');
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
