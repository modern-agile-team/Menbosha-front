import * as S from './styled';

/**
 * id : 고유 아이디
 * title : 각 항의 이름
 * sub_list : 각 조항들의 세부 조항
 * table_description: 테이블 형태의 값이 있다면 추가 (display : grid로 구성됨)
 * table_count : table_description이 있다며, 몇 번 테이블을 반복할 건지 추가
 * description: 각 항의 대표 설명
 */
const privacy_policy_list = [
  {
    id: 0,
    title: '',
    sub_list: [],
    table_description: [],
    table_count: 0,
    description:
      '멘보샤(이하 “회사”라 함)이 취급하는 모든 개인정보는 관련법령에 근거하거나 정보주체로부터 동의를 받고 수집‧보유 및 처리되고 있습니다. 본 개인정보 처리방침은 2024년 03월 08일부터 시행됩니다.회사는 법령의 규정에 따라 수집․보유 및 처리하는 개인정보를 공공업무의 적절한 수행과 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하여, 적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다. 이에 「개인정보 보호법」 제30조에 따라 정보주체에게 개인정보 처리에 관한 절차 및 기준을 안내하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.',
  },
  {
    id: 1,
    title: '제1조 [개인정보 처리목적]',
    sub_list: [
      '① 홈페이지 회원 가입 및 관리',
      '카카오, 네이버, 구글 소셜로그인에 따른 회원 가입 의사 확인, 회원 자격 유지, 회원 자격 관리, 서비스 부정 이용 및 비인가 사용 방지 등을 목적으로 개인정보를 처리합니다.',
      '② 서비스 제공',
      '멘토 매칭 및 게시글 작성, 게시글 확인 등 컨텐츠 제공을 위한 개인 식별, 서비스 제공, 서비스 이용 중에 발생하는 정보의 전달, 회원 간의 상호 연락을 목적으로 개인정보를 처리합니다.',
      '③ 서비스 개발 활용',
      '맞춤 서비스 제공, 서비스 안내 및 이용권유, 서비스 개선 및 신규 서비스 개발을 위한 통계 및 접속빈도 파악을 위해 활용됩니다.',
    ],
    table_description: [],
    table_count: 0,
    description: '',
  },
  {
    id: 2,
    title: '제2조 [개인정보 처리 및 보유기간]',
    sub_list: [
      '개인정보는 회원가입 후 회원탈퇴 이전까지 보관됩니다.',
      '개인정보는 회원탈퇴 30일 후 즉시 파기됩니다.',
    ],
    table_description: [
      '처리 정보',
      '처리목적',
      '이메일, 이름(닉네임)',
      ' 멘토프로필 페이지에서 이용자가 확인하고 채팅을 할 수 있게 만드는 목적',
      '고유식별번호',
      'db내 회원 정보 판별을 위해 사용',
    ],
    table_count: 2,
    description: '',
  },
  {
    id: 3,
    title: '제3조 [개인정보 제 3자에 대한 제공]',
    sub_list: [
      '① 회사는 정보 주체의 개인정보를 본 개인정보 처리방침 제1조에서 명시한 범위 내에서만 처리하며, 정보 주체의 동의, 법률의 특별한 규정 등 『개인정보 보호법』 제17조(개인정보의 제공)에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.',
      '② 회사는 다음과 같이 개인정보를 제3자에게 제공합니다.',
      'ⓐ 제공받는자 : 사이트에 접속하는 모든 이용자',
      'ⓑ 제공목적 :멘토의 정보확인, 및 채팅을 통한 멘토/멘티 실시를 위한 프로필 제공',
      'ⓒ 제공정보 : 이름(닉네임), 이메일',
      '③『개인정보 보호법』 제18조에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우에도 개인정보가 제공될 수 있습니다.',
    ],
    table_description: [],
    table_count: 0,
    description: '',
  },
  {
    id: 4,
    title: '제4조 [개인정보의 위탁처리]',
    sub_list: [],
    table_description: [
      '수탁업체',
      '위탁업무',
      '개인정보의 보유 및 이용기간',
      '(주)네이버',
      '서비스 제공을 위한, 이메일, 이름(닉네임), 고유식별번호 수집',
      '회원탈퇴시',
      '(주)카카오',
      '서비스 제공을 위한, 이메일, 이름(닉네임), 고유식별번호 수집',
      '회원탈퇴시',
      '구글',
      '서비스 제공을 위한, 이메일, 이름(닉네임), 고유식별번호 수집',
      '회원탈퇴시',
    ],
    table_count: 3,
    description: '',
  },
  {
    id: 5,
    title: '제5조 [정보 주체의 권리, 의무 및 행사방법]',
    sub_list: [
      '① 정보 주체는 “회사”의 멘보샤 홈페이지(menbosha.kr)에서 언제든지 다음 각호의 개인정보 보호 관련 권리를 행사할 수 있습니다.',
      'ⓐ 개인정보 조회, 수정 및 삭제: 멘보샤 홈페이지 우측 상단 [본인프로필아이콘 > 프로필]에서 조회, 수정 및 삭제 가능',
      'ⓑ 회원 탈퇴: 멘보샤 홈페이지 상단 [고객지원>계정탈퇴>계정삭제]에서 회원 탈퇴 가능',
    ],
    table_description: [],
    table_count: 0,
    description: '',
  },
  {
    id: 6,
    title: '제6조 [처리하는 개인정보 항목]',
    sub_list: [
      '① 개인 회원',
      'ⓐ 필수 항목: 성명, 이메일(아이디), 비밀번호',
      'ⓑ 선택 항목: 생년월일, 소속 기업, 전화번호, 한 줄 소개, 홈페이지, 활동 지역, 페이스북 등 외부 서비스와의 연동을 위해 이용자가 설정한 계정 정보, 본인확인값(CI, DI), 마케팅 정보 수신 동의(이메일)',
      '② 인터넷 서비스 이용과정에서 아래 개인정보 항목이 자동으로 생성되어 수집될 수 있습니다.',
      'ⓐ 쿠키, 서비스 이용 기록, 불량 이용 기록 등',
    ],
    table_description: [],
    table_count: 0,
    description:
      '회사는 멘보샤 회원 및 서비스 분류에 따라 다음의 개인정보 항목을 수집, 이용, 보유, 파기하고 있습니다.',
  },
  {
    id: 7,
    title: '제7조 [개인정보 자동 수집 장치의 설치/운영 및 거부에 관한 사항]',
    sub_list: [
      '① 개인화되고 맞춤화 된 서비스를 제공하기 위해서 회사는 멘보샤 서비스 사용 정보를 저장하고 수시로 불러오는 "쿠키(cookie)"를 사용합니다. 쿠키는 웹사이트를 운영하는데 이용되는 서버가 사용자의 브라우저에 보내는 조그마한 데이터 꾸러미로 회원님 컴퓨터의 하드디스크에 저장됩니다. “회사”가 쿠키를 통해 수집하는 정보는 회원의 고유번호(User ID)에 한하며, 그 외의 다른 정보는 수집하지 않습니다. “회사”가 쿠키(cookie)를 통해 수집한 회원의 고유번호는 다음의 목적을 위해 사용될 수 있습니다.',
      'ⓐ 쿠키의 사용 목적',
      '- 로그인 세션 연장하기 위해 사용됩니다.',
      '② “회사“는 서비스 세션(session)을 통하여 이용자의 정보를 얻고 있습니다. 세션이란, 이용자가 “서비스” 사이트를 방문할 때 “서비스”의 서버 로부터 이용자의 컴퓨터에 보내진 시스템 파일로서 이용자의 연결 유지를 위하여 잠시 이용자의 컴퓨터에 머무는 파일입니다. 이러한 세션은 현재 연결의 유지에만 사용되며 브라우저를 종료할 경우 삭제됩니다.',
    ],
    table_description: [],
    table_count: 0,
    description: '',
  },
  {
    id: 8,
    title: '제8조 [개인정보의 파기]',
    sub_list: [
      '① 회사는 개인정보 보유 기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.',
    ],
    table_description: [],
    table_count: 0,
    description: '',
  },
  {
    id: 9,
    title: '제9조 [개인정보의 안전성 확보 조치]',
    sub_list: [
      '개인정보는 직접적으로 이용하지 않고 토큰 암호화 방식을 사용하여 최소한의 정보를 가지고 안전하게 저장 및 전송합니다.',
    ],
    table_description: [],
    table_count: 0,
    description:
      '“회사”는 이용자의 개인정보가 분실, 도난, 유출, 위∙변조 또는 훼손되지 않도록 안전성 확보를 위하여 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「개인정보보호법」 등 정보통신서비스 제공자가 준수하여야 할 관련 법령에 따라 기술적∙관리적 보호조치를 적정하게 취하고 있습니다.',
  },
  {
    id: 10,
    title: '제10조 [개인정보 보호 책임자 및 개인정보 침해 문의]',
    sub_list: [
      '① 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보 주체의 불만 처리 및 피해구제 등을 위해 아래와 같이 개인정보 보호 담당 부서를 지정하고 있습니다. 고객의 개인정보와 관련한 문의 사항이 있으면 아래의 개인정보 관리 책임자에게 연락 주시기 바랍니다.',
      'ⓐ 부서명: back-end팀 ',
      'ⓑ 담당자 : 박준혁(부회장)',
      'ⓒ 이메일: menbosha.kr@gmail.com',
      '② 기타 개인정보 침해에 대한 피해 구제, 상담은 아래의 기관에 문의하실 수 있습니다.',
      'ⓐ 개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)',
      'ⓑ 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)',
      'ⓒ 대검찰청 사이버수사과 : (국번없이) 1301 (www.spo.go.kr)',
      'ⓓ 경찰청 사이버수사국 : (국번없이) 182 (cyberbureau.police.go.kr)',
    ],
    table_description: [],
    table_count: 0,
    description:
      '회사와 이용자 간에 발생한 서비스 이용에 관한 분쟁에 대하여는 대한민국 법을 적용하며, 본 분쟁으로 인한 소는 민사소송법상의 관할을 가지는 대한민국의 법원에 제기합니다.',
  },
  {
    id: 11,
    title: '제11조 [개인정보 처리방침의 변경]',
    sub_list: [],
    table_description: [],
    table_count: 0,
    description:
      '“회사”의 개인정보 처리방침은 정부의 법률 및 지침의 변경과 당사의 약관 및 내부 정책에 따라 변경될 수 있으며 이를 개정하는 경우, “회사”는 변경사항에 대해 『개인정보 보호법』 제30조 및 『개인정보 보호법 시행령』 제31조에 따라 개정 내용을 “회사” 홈페이지 또는 전자우편을 통해 공개하겠습니다.',
  },
];

const PrivacyPolicyContents = () => {
  return (
    <S.TermsConditionsContainer>
      <div>개인정보 이용약관</div>
      <S.TermConditionsWrapper>
        {privacy_policy_list.map((data) => {
          return (
            <S.TermsConditionElementsBox>
              <div>{data.title}</div>
              <div>{data.description}</div>
              <div>
                {data.sub_list.length !== 0 &&
                  data.sub_list.map((subData) => {
                    return <div>{subData}</div>;
                  })}
              </div>
              <div>
                {data.table_description.length !== 0 && (
                  <S.DescriptionTable count={data.table_count}>
                    {data.table_description.map((data) => {
                      return <div>{data}</div>;
                    })}
                  </S.DescriptionTable>
                )}
              </div>
            </S.TermsConditionElementsBox>
          );
        })}
      </S.TermConditionsWrapper>
      <S.SupplementaryProvision>
        <div>부칙</div>
        <div>공고일자 : 2024년 3월 8일</div>
        <div>시행일자 : 2024년 3월 8일</div>
      </S.SupplementaryProvision>
    </S.TermsConditionsContainer>
  );
};

export default PrivacyPolicyContents;
