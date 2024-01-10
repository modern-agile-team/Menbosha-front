/** 멘토 리스트 타입 - 추후 변경 */
export type MentorInfoType = {
  id: number;
  name: string;
  image: string;
  mainField: string;
};

/** 채팅룸 전체조회 api 타입 */
export interface ChatRoomListApiType {
  statusCode: number;
  contents: {
    totalCount: number;
    currentPage: number;
    pageSize: number;
    nextPage: number;
    hasNext: boolean;
    lastPage: number;
    chatRooms: {
      _id: string;
      originalMembers: Array;
      chatMembers: Array;
      chatRoomType: Array;
      createdAt: string;
      updatedAt: string;
      unReadChatCount: number;
      chat: {
        content: string;
        seenUsers: Array;
        createdAt: string;
      };
    };
    chatPartner: {
      id: number;
      name: string;
      userImage: string;
    }[];
  }[];
}

/** 채팅룸 전체조회 실제 사용 데이터 타입 - contents */
export interface ChatRoomListType {
  chatRooms: {
    totalCount: number;
    currentPage: number;
    pageSize: number;
    nextPage: number;
    hasNext: boolean;
    lastPage: number;
    _id: string;
    originalMembers: Array;
    chatMembers: Array;
    chatRoomType: Array;
    createdAt: string;
    updatedAt: string;
    unReadChatCount: number;
    chat: {
      content: string;
      seenUsers: Array;
      createdAt: string;
    };
  };
  chatPartner: {
    id: number;
    name: string;
    userImage: string;
  }[];
}

/** 채팅룸 Partner 데이터 타입 */
export interface ChatPartnerType {
  id: number;
  name: string;
  userImage: string;
}

/**  채팅룸 단일조회 api 타입 */
export interface ChatRoomType {
  statusCode: number;
  content: {
    _id: string;
    chatMembers: Array;
    chats: Array;
    chatRoomType: Array;
    createdAt: string;
    updatedAt: string;
    deletedAt: null;
  };
}

/** 채팅 내역 전체조회 api 타입 */
export interface ChatType {
  statusCode: number;
  content: {
    _id: string;
    chatMembers: Array;
    chats: Array;
    chatRoomType: Array;
    createdAt: string;
    updatedAt: string;
    deletedAt: null;
    totalCount: number;
    currentPage: number;
    pageSize: number;
    nextPage: number;
    hasNext: boolean;
    lastPage: number;
  }[];
}
