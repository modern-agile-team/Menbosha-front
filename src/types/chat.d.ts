/** 멘토 리스트 타입 - 추후 변경 */
export type MentorInfoType = {
  id: number;
  name: string;
  userImage: {
    imageUrl: string;
  };
  userIntro: {
    introduce: string;
    mainField: string;
  };
};

/** 채팅룸 생성 request body */
export interface CreateChatRoomRequestBody {
  receiverId: number;
  chatRoomType: string;
}

/** 채팅룸 생성시 필요한 데이터 */
export interface handleChatIconClickType {
  mentorId: number;
  mentorName: string;
}

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
    chatPartners: {
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
  chatPartners: {
    id: number;
    name: string;
    userImage: string;
  }[];
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

/** 채팅내역 전체조회 api 타입 */
export interface ChatHistoryType {
  _id: string;
  chatMembers: Array;
  chats: Array;
  chatRoomType: Array;
  createdAt: string;
  updatedAt: string;
  deletedAt: null;
  chatPartners: {
    id: number;
    name: string;
    userImage: string;
  }[];
  totalCount: number;
  currentPage: number;
  pageSize: number;
  nextPage: number;
  hasNext: boolean;
  lastPage: number;
}

/** 채팅방 삭제 모달 타입 */
export interface ModalType {
  show: boolean;
  hide: () => void;
  chatRoomId: string;
  partnerName: string;
}
