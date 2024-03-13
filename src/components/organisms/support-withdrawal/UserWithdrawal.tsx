import AUTH from '@/apis/oauth';
import { LoginStateAtom } from '@/recoil/atoms/LoginStateAtom';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import * as S from './styled';
import USER from '@/apis/user';
import { MyProfileType } from '@/types/user';
import { TextBox } from '@/components/common/globalStyled/styled';

const UserWithdrawal = () => {
  const [provider, setProvider] = useState('');
  const [approve, setApprove] = useState(false);
  const [myInfo, setMyInfo] = useState<MyProfileType>();
  const setLoginState = useSetRecoilState(LoginStateAtom);
  const router = useRouter();

  const handleWithdrawal = async () => {
    if (approve) {
      try {
        await AUTH.unlinkMemberApi(provider);
        window.sessionStorage.removeItem('accessToken');
        window.sessionStorage.removeItem('refreshToken');
        window.sessionStorage.removeItem('provider');
        setLoginState(false);
        alert('회원탈퇴 되었습니다.');
        router.push(`/`);
      } catch {
        alert('회원탈퇴 중 에러가 발생했습니다.');
      }
    } else {
      alert('체크박스에 체크가 필요합니다.');
    }
  };

  const handleCheckBox = () => {
    setApprove(!approve);
  };

  const getMyProfile = async () => {
    const response = await USER.getMyInfo();
    setMyInfo(response);
  };

  useEffect(() => {
    const provider = window.sessionStorage.getItem('provider');
    provider && setProvider(provider);
    getMyProfile();
  }, []);

  return (
    <S.WithdrawalContainer>
      <div>회원탈퇴</div>
      <div>
        <S.ExplainTitleContainer>
          <S.CheckIcon></S.CheckIcon>
          <S.ExplainTitleBox>
            <div>
              {myInfo &&
                `사용자 ${myInfo.name}님 탈퇴한 경우 아이디 및 활동 내용
            복구가 불가능합니다.`}
            </div>
            <div>{`회원을 탈퇴한 경우 아이디 및 활동 내용 복구가 불가하오니 신중하게 선택하시길 바랍니다.`}</div>
            <S.ExplainBodyBox>
              <S.ExplainTextBox>
                <div>활동내역</div>
                <div>회원이 업로드한 이미지 및 첨부파일, 회원이 남길 글</div>
              </S.ExplainTextBox>
              <S.ExplainTextBox>
                <div>프로필 정보</div>
                <div>
                  사용하신 아이디 탈퇴한 경우 아이디 및 활동 내용 복구가
                  불가오하오니 신중하게 선택하시길 바랍니다.
                </div>
              </S.ExplainTextBox>
            </S.ExplainBodyBox>
          </S.ExplainTitleBox>
        </S.ExplainTitleContainer>
        <S.ExplainTitleContainer>
          <S.CheckIcon></S.CheckIcon>
          <S.ExplainTitleBox>
            <div>
              {`탈퇴 후 서비스 이용기록 및 회원정보가 모두 삭제 됩니다. `}
            </div>
            <div>{`회원정보, 게시판  기록 후기, 멘토 멘티 관련 정보 등 개인형 서비스 이용 기록은 모두 삭제되며, 삭제 기록은 복구가 불가능합니다.`}</div>
            <S.ExplainBodyBox>
              <S.ExplainTextBox>
                <div>개인형 서비스</div>
                <div>
                  회원정보 및 게시판 기록 후기 멘토 후기 기록이 복구가 불가능
                  합니다.
                </div>
              </S.ExplainTextBox>
            </S.ExplainBodyBox>
          </S.ExplainTitleBox>
        </S.ExplainTitleContainer>
        <div>
          <TextBox
            size={16}
            color="rgba(0,0,0,0.75)"
            style={{ textAlign: 'center' }}>
            {myInfo &&
              `탈퇴 후 ${myInfo.name} 으로 다시 가입 할 수 있으나 기존 데이터를 복구를 하실 수 없습니다. 멘보샤의 다양한 서비스 등 사용기록 등 데이터들이 사라집니다.`}
          </TextBox>
          <S.NotificationBox>
            <input type="checkbox" onChange={handleCheckBox} />
            <div>안내사항을 모두 숙지하였으며, 이에 동의합니다.</div>
          </S.NotificationBox>
          <S.ConfirmationButton>
            <div onClick={handleWithdrawal}>확인</div>
          </S.ConfirmationButton>
        </div>
      </div>
    </S.WithdrawalContainer>
  );
};

export default UserWithdrawal;
