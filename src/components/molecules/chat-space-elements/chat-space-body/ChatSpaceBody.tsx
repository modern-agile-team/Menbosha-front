import React from 'react';
import * as S from './styled';
import TimeStamp from '../time-stamp/TimeStamp';
import Image from 'next/image';

const ChatSpaceBody = () => {
  const hostId = 1;
  const currentUserId = 2 as number;
  const isHost = currentUserId === hostId;

  // 모킹 데이터 만들기 전에 퍼블리싱 구현이 잘 되어 있는지 확인하는 용도입니다!!
  // 모킹 데이터까지 만들면 pr이 너무 늘고, 제 개인적으로 퍼블리싱이 완료된 후에
  // 데이터를 넣는 것을 더 선호해서 일단 return단에 전부 우겨넣었습니다.
  // 이 부분은 스무스하게 넘기셔도 괜찮습니다 ㅎㅎ
  return (
    <S.ChatSpaceBodyContainer>
      <S.ChatBubbleGuestContainer isHost={true}>
        <S.ChatGuestImage>
          <Image src="/UserIcon.svg" alt="GuestImage" width="24" height="24" />
        </S.ChatGuestImage>
        <S.ChatBubbleGuestCenter>
          <S.ChatGuestName>원동건 님</S.ChatGuestName>
          <S.ChatBubble isHost={true}>
            <span>안녕 재진아</span>
          </S.ChatBubble>
        </S.ChatBubbleGuestCenter>
        <S.ChatTimeBox>16:40</S.ChatTimeBox>
      </S.ChatBubbleGuestContainer>
      <S.ChatBubbleHostContainer isHost={false}>
        <S.ChatTimeBox>16:42</S.ChatTimeBox>
        <S.ChatBubble isHost={false}>
          <span>
            네형 네형네형네형네형네형네형네형네형네형네형네형네형네형네형
          </span>
        </S.ChatBubble>
      </S.ChatBubbleHostContainer>
      <TimeStamp />
      <S.ChatBubbleGuestContainer isHost={true}>
        <S.ChatGuestImage>
          <Image src="/UserIcon.svg" alt="GuestImage" width="24" height="24" />
        </S.ChatGuestImage>
        <S.ChatBubbleGuestCenter>
          <S.ChatGuestName>원동건 님</S.ChatGuestName>
          <S.ChatBubble isHost={true}>
            <span>배고파으어어으ㅓ으ㅓ으응</span>
          </S.ChatBubble>
        </S.ChatBubbleGuestCenter>
        {/* <S.ChatTimeBox>12:20</S.ChatTimeBox> */}
      </S.ChatBubbleGuestContainer>
      <S.ChatBubbleGuestContainer isHost={true}>
        <S.ChatGuestImage>
          <Image src="/UserIcon.svg" alt="GuestImage" width="24" height="24" />
        </S.ChatGuestImage>
        <S.ChatBubbleGuestCenter>
          <S.ChatGuestName>원동건 님</S.ChatGuestName>
          <S.ChatBubble isHost={true}>
            <span>밥먹자으아ㅡ아으ㅏ으ㅓ어ㅡ아ㅡ아으ㅏ</span>
          </S.ChatBubble>
        </S.ChatBubbleGuestCenter>
        <S.ChatTimeBox>12:20</S.ChatTimeBox>
      </S.ChatBubbleGuestContainer>
      <S.ChatBubbleHostContainer isHost={false}>
        {/* <S.ChatTimeBox>16:40</S.ChatTimeBox> */}
        <S.ChatBubble isHost={false}>
          <span>정신 차려요 형...</span>
        </S.ChatBubble>
      </S.ChatBubbleHostContainer>
      <S.ChatBubbleHostContainer isHost={false}>
        {/* <S.ChatTimeBox>16:40</S.ChatTimeBox> */}
        <S.ChatBubble isHost={false}>
          <span>뭐 드실래요??</span>
        </S.ChatBubble>
      </S.ChatBubbleHostContainer>
      <S.ChatBubbleHostContainer isHost={false}>
        {/* <S.ChatTimeBox>16:40</S.ChatTimeBox> */}
        <S.ChatBubble isHost={false}>
          <span>장미 식당??</span>
        </S.ChatBubble>
      </S.ChatBubbleHostContainer>
      <S.ChatBubbleHostContainer isHost={false}>
        {/* <S.ChatTimeBox>16:40</S.ChatTimeBox> */}
        <S.ChatBubble isHost={false}>
          <span>국밥???</span>
        </S.ChatBubble>
      </S.ChatBubbleHostContainer>
      <S.ChatBubbleHostContainer isHost={false}>
        <S.ChatTimeBox>12:34</S.ChatTimeBox>
        <S.ChatBubble isHost={false}>
          <span>아니면 그냥 준혁이 먹어버리죠???????</span>
        </S.ChatBubble>
      </S.ChatBubbleHostContainer>
      <S.ChatBubbleGuestContainer isHost={true}>
        <S.ChatGuestImage>
          <Image src="/UserIcon.svg" alt="GuestImage" width="24" height="24" />
        </S.ChatGuestImage>
        <S.ChatBubbleGuestCenter>
          <S.ChatGuestName>원동건 님</S.ChatGuestName>
          <S.ChatBubble isHost={true}>
            <span>좋은 생각이다</span>
          </S.ChatBubble>
        </S.ChatBubbleGuestCenter>
        {/* <S.ChatTimeBox>16:40</S.ChatTimeBox> */}
      </S.ChatBubbleGuestContainer>
      <S.ChatBubbleGuestContainer isHost={true}>
        <S.ChatGuestImage>
          <Image src="/UserIcon.svg" alt="GuestImage" width="24" height="24" />
        </S.ChatGuestImage>
        <S.ChatBubbleGuestCenter>
          <S.ChatGuestName>원동건 님</S.ChatGuestName>
          <S.ChatBubble isHost={true}>
            <span>물 올려??</span>
          </S.ChatBubble>
        </S.ChatBubbleGuestCenter>
        {/* <S.ChatTimeBox>16:40</S.ChatTimeBox> */}
      </S.ChatBubbleGuestContainer>
      <S.ChatBubbleGuestContainer isHost={true}>
        <S.ChatGuestImage>
          <Image src="/UserIcon.svg" alt="GuestImage" width="24" height="24" />
        </S.ChatGuestImage>
        <S.ChatBubbleGuestCenter>
          <S.ChatGuestName>원동건 님</S.ChatGuestName>
          <S.ChatBubble isHost={true}>
            <span>일단 옷부터 벗겨</span>
          </S.ChatBubble>
        </S.ChatBubbleGuestCenter>
        <S.ChatTimeBox>12:49</S.ChatTimeBox>
      </S.ChatBubbleGuestContainer>
    </S.ChatSpaceBodyContainer>
  );
};

export default ChatSpaceBody;
