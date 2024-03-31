import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ChatRoomListAtom } from '@/recoil/atoms/ChatRoomListAtom';
import useModal from '@/hooks/useModal';
import ChatRoomOutModal from './ChatRoomOutModal';
import useReplace from '@/hooks/useReplace';
import { SelectedRoomIdAtom } from '@/recoil/atoms/SelectedRoomIdAtom';
import CHAT from '@/apis/chat';
import { ChatContentsAtom } from '@/recoil/atoms/ChatContentsAtom';

let chatPartnerName = '';

const ChatRoomListBox = () => {
  const [chatRoomList, setChatRoomList] = useRecoilState(ChatRoomListAtom);
  const [selectedRoomId, setSelectedRoomId] =
    useRecoilState(SelectedRoomIdAtom);
  const selectRoom = useReplace();
  const chatContents = useRecoilValue(ChatContentsAtom);
  const [rightClickedRoomId, setRightClickedRoomId] = useState<string>('');
  const [rightClickedPartnerName, setRightClickedPartnerName] =
    useState<string>('');
  const { isOpenModal, handleModal } = useModal();

  const handleRoomSelect = (roomId: string) => {
    const selectedRoom = chatRoomList.find(
      (data) => data.chatRooms._id === roomId,
    );
    if (selectedRoom?.chatPartners.length === 1) {
      chatPartnerName = selectedRoom.chatPartners[0].name;

      const queryURL = {
        roomId: roomId,
      };

      selectRoom(`${roomId}`, queryURL);
      setSelectedRoomId(roomId);
    } else {
      const queryURLEmpty = {
        roomId: roomId,
      };
      console.log(queryURLEmpty);

      selectRoom(`${roomId}`, queryURLEmpty);
      setSelectedRoomId(roomId);
    }
  };

  // 마우스 우클릭 시 삭제 모달 핸들러
  const handleChatRoomDelete: React.MouseEventHandler<HTMLLIElement> = (e) => {
    e.preventDefault();
    const roomId = e.currentTarget.getAttribute('data-room-id');
    const partnerName = e.currentTarget.getAttribute('data-partner-name');

    if (roomId && partnerName) {
      setRightClickedRoomId(roomId);
      setRightClickedPartnerName(partnerName);
      handleModal();
    }
  };

  // 임시 확인용
  const getChatRoomListApi2 = async () => {
    const page = 1;
    const pageSize = 100;
    const res = await CHAT.getChatRoomList2(page, pageSize);
  };

  useEffect(() => {
    getChatRoomListApi2();
  }, [chatContents]);

  return (
    <S.ListContainer>
      {chatRoomList.map((data) => {
        // console.log(data);
        const createdAtDate = new Date(data.chatRooms.chat.createdAt);
        const hours = createdAtDate.getHours();
        const minutes = createdAtDate.getMinutes().toString().padStart(2, '0');
        // 초기 채팅방 생성시엔 chat.createdAt이 number타입이 아니기 때문에
        // 조건을 부여해서 isNaN이면 랜더링 안하는 것으로 했습니다.
        const isValidTime =
          !isNaN(createdAtDate.getHours()) &&
          !isNaN(createdAtDate.getMinutes());
        const getAmPm = (hours: number): string => {
          return hours >= 12 ? '오후' : '오전';
        };

        const chatPartnerExist = data.chatPartners.length !== 0;

        return (
          <S.ChatRoomListArea
            key={data.chatRooms._id}
            data-room-id={data.chatRooms._id}
            data-partner-name={
              chatPartnerExist ? data.chatPartners[0].name : ''
            }
            {...data}
            onContextMenu={handleChatRoomDelete}
            onClick={() => handleRoomSelect(data.chatRooms._id)}
            isSelected={selectedRoomId === data.chatRooms._id}>
            {chatPartnerExist && data.chatPartners.length === 1 && (
              <S.ChatRoomInfoBox key={data.chatPartners[0].id}>
                <S.ChatListLeft>
                  <S.ChatListGuestImage
                    isSelected={selectedRoomId === data.chatRooms._id}
                    src={data.chatPartners[0].userImage}
                    alt="GuestImage"
                  />
                  <S.ChatListCenter>
                    <S.ChatListGuestName
                      isSelected={selectedRoomId === data.chatRooms._id}>
                      {data.chatPartners[0].name}
                    </S.ChatListGuestName>
                    <S.ChatListPrevText
                      isSelected={selectedRoomId === data.chatRooms._id}>
                      <span>{data.chatRooms.chat.content}</span>
                    </S.ChatListPrevText>
                  </S.ChatListCenter>
                </S.ChatListLeft>
                <S.ChatListRight
                  isSelected={selectedRoomId === data.chatRooms._id}>
                  {isValidTime && (
                    <span>{`${getAmPm(hours)} ${
                      hours % 12 || 12
                    }:${minutes}`}</span>
                  )}
                  {selectedRoomId !== data.chatRooms._id &&
                    data.chatRooms.unReadChatCount > 0 && (
                      <S.UnreadMessage>
                        <span>{data.chatRooms.unReadChatCount}</span>
                      </S.UnreadMessage>
                    )}
                </S.ChatListRight>
              </S.ChatRoomInfoBox>
            )}
            {!chatPartnerExist && (
              <S.IfChatPartnerEmptyBox
                isSelected={selectedRoomId === data.chatRooms._id}>
                <div>
                  상대방이 채팅방을 나갔습니다.
                  <br />이 방을 선택하면 채팅 내역을 확인할 수 있습니다.
                </div>
              </S.IfChatPartnerEmptyBox>
            )}
          </S.ChatRoomListArea>
        );
      })}
      {isOpenModal && (
        <>
          <ChatRoomOutModal
            show={isOpenModal}
            hide={handleModal}
            chatRoomId={rightClickedRoomId}
            partnerName={rightClickedPartnerName}
          />
        </>
      )}
    </S.ListContainer>
  );
};

export default ChatRoomListBox;
