import USER from '@/apis/user';
import * as S from './styled';
import { useEffect, useState } from 'react';
import { ButtonBox, TextBox } from '@/components/common/globalStyled/styled';
import {
  MentorBoardCardType,
  MentorBoardListType,
  MentorBoardParamsType,
} from '@/types/mentor';
import {
  HelpCommentParamsType,
  HelpListApiType,
  HelpListParamsType,
  HelpListType,
} from '@/types/help';
import MENTOR from '@/apis/mentor';
import HELP from '@/apis/help';
import HelpCard from '@/components/molecules/help-board-elements/HelpCard';
import MentorBoardCard from '@/components/molecules/mentor-board-elements/MentorBoardCard';

const MyRecordContents = () => {
  const [userId, setUserId] = useState(0);
  const [page, setPage] = useState({
    mentor: 1,
    help: 1,
  });
  const [firstPage, setFirstPage] = useState(1);
  const [lastPage, setLastPage] = useState({
    mentor: 0,
    help: 0,
  });
  const [mentorBoardData, setMentorBoardData] = useState<
    MentorBoardListType['mentorBoardWithUserAndImageDtos']
  >([]);
  const [helpBoardData, setHelpBoardData] = useState<
    HelpListApiType['helpMeBoardWithUserAndImagesItemDto']
  >([]);

  const MyInfo = async () => {
    const response = await USER.getMyInfo();
    setUserId(response.id);
  };

  const getMentorBoardList = async () => {
    const params: MentorBoardParamsType = {
      categoryId: 1,
      loadOnlyPopular: false,
      orderField: 'id',
      sortOrder: 'DESC',
      page: page.mentor,
      pageSize: 3,
      userId: userId,
    };
    const response = await MENTOR.MentorBoardPagination(params);
    setMentorBoardData(response.mentorBoardWithUserAndImageDtos);
    setLastPage((prev) => {
      return {
        ...prev,
        mentor: response.lastPage,
      };
    });
  };

  const getHelpBoardList = async () => {
    const params: HelpListParamsType = {
      categoryId: 1,
      loadOnlyPullingUp: false,
      orderField: 'id',
      sortOrder: 'DESC',
      page: page.help,
      pageSize: 3,
      userId: userId,
    };
    const response = await HELP.getHelpBoardPagination(params);
    setHelpBoardData(response.helpMeBoardWithUserAndImagesItemDto);
    setLastPage((prev) => {
      return {
        ...prev,
        help: response.lastPage,
      };
    });
  };

  //유저 아이디 불러오기
  useEffect(() => {
    MyInfo();
  }, []);

  //유저 아이디 불러오고, 페이지 불러오기
  useEffect(() => {
    if (userId !== 0) {
      getMentorBoardList();
      getHelpBoardList();
    }
  }, [userId]);

  //멘토쪽 페이지 변경시
  useEffect(() => {
    if (userId !== 0) {
      getMentorBoardList();
    }
  }, [page.mentor]);

  //도와주세요쪽 페이지 변경시
  useEffect(() => {
    if (userId !== 0) {
      getHelpBoardList();
    }
  }, [page.help]);

  const pagination = (page: number, lastPage: number, location: string) => {
    const pageTemp = [];
    for (let i = firstPage; i <= lastPage; i++) {
      pageTemp.push(
        <S.Btn
          i={i}
          curPage={page}
          onClick={() => setPageGroup(i, lastPage, location)}>
          {i}
        </S.Btn>,
      );
    }
    return pageTemp;
  };

  //페이지 눌렀을 때 넘기기, > < 도 포함
  const setPageGroup = (page: number, lastPage: number, location: string) => {
    if (page > lastPage) {
      setPage((prev) => {
        return {
          ...prev,
          [location]: page - 1,
        };
      });
    } else if (page < firstPage) {
      setPage((prev) => {
        return {
          ...prev,
          [location]: page + 1,
        };
      });
    } else {
      setPage((prev) => {
        return {
          ...prev,
          [location]: page,
        };
      });
    }
  };

  return (
    <S.MyRecordContentContainer>
      <div>
        <TextBox color="#fff" size={64}>
          내 활동
        </TextBox>
        <S.SubTitleBox>게시글</S.SubTitleBox>
        <S.PaginationCardBox>
          {mentorBoardData.map((data) => {
            const props: MentorBoardCardType = {
              body: data.body,
              category: data.categoryId,
              createdAt: data.createdAt,
              head: data.head,
              id: data.id,
              likes: data.likeCount,
              mentorBoardImage: data.imageUrl,
              updatedAt: data.updatedAt,
              userId: data.userId,
              userImage: data.user.userImage.imageUrl,
              userName: data.user.name,
            };
            return (
              <div>
                <MentorBoardCard {...props} />
              </div>
            );
          })}
        </S.PaginationCardBox>
        <S.PaginationCountContainer>
          <ButtonBox
            onClick={() =>
              setPageGroup(page.mentor - 1, lastPage.mentor, 'mentor')
            }>
            &lt;
          </ButtonBox>
          {pagination(page.mentor, lastPage.mentor, 'mentor')}
          <ButtonBox
            onClick={() =>
              setPageGroup(page.mentor + 1, lastPage.mentor, 'mentor')
            }>
            &gt;
          </ButtonBox>
        </S.PaginationCountContainer>
        <S.SubTitleBox>도와주세요</S.SubTitleBox>
        <S.PaginationCardBox>
          {helpBoardData.map((data) => {
            const props: HelpListType = {
              body: data.body,
              categoryId: data.categoryId,
              createdAt: data.createdAt,
              head: data.head,
              id: data.id,
              image: data.imageUrl,
              name: data.user.name,
              userId: data.userId,
              userImage: data.user.userImage.imageUrl,
            };
            return (
              <div>
                <HelpCard {...props} />
              </div>
            );
          })}
        </S.PaginationCardBox>
        <S.PaginationCountContainer>
          <ButtonBox
            onClick={() => setPageGroup(page.help - 1, lastPage.help, 'help')}>
            &lt;
          </ButtonBox>
          {pagination(page.help, lastPage.help, 'help')}
          <ButtonBox
            onClick={() => setPageGroup(page.help + 1, lastPage.help, 'help')}>
            &gt;
          </ButtonBox>
        </S.PaginationCountContainer>
      </div>
    </S.MyRecordContentContainer>
  );
};

export default MyRecordContents;
