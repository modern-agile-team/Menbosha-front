export type MentorInfoType = {
  id: number;
  name: string;
  image: string;
  mainField: string;
};

export interface ChatRoomListType {
  statusCode: number;
  data: [
    {
      chatRooms: {
        _id: string;
        hostId: number;
        guestId: number;
        createdAt: string;
        chatCount: number;
        chat: {
          content: string;
          isSeen: boolean;
          createdAt: string;
        };
      };
      chatPartner: {
        id: number;
        name: string;
        userImage: string;
      };
    },
  ];
}

export interface ChatRoomType {
  statusCode: number;
  data: {
    _id: string;
    hostId: number;
    guestId: number;
    chatIds: [string];
    createdAt: string;
    deletedAt: null;
  };
}

export interface ChatType {
  statusCode: number;
  data: [
    {
      _id: string;
      chatRoomId: string;
      content: string;
      senderId: number;
      receiverId: number;
      isSeen: boolean;
      createdAt: string;
      deleteAt: string;
    },
  ];
}
