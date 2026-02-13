/**
 * 마이페이지 (/mypage)
 * 에브리타임의 "내 정보" 설정 페이지를 재현
 *
 * 구조:
 * - Header
 * - 프로필 카드 (아바타, 이름, 학교/학번, 로그아웃)
 * - 설정 섹션들 (계정, 커뮤니티, 이용 안내, 기타)
 * - Footer
 */

import Header from "@/components/layout/Header";

// 설정 메뉴 데이터 구조
const SETTINGS_SECTIONS = [
  {
    title: "계정",
    items: [
      { label: "아이디", value: "user123" },
      { label: "졸업생 전환" },
      { label: "학과 설정" },
      { label: "학적 처리 내역" },
      { label: "비밀번호 변경" },
      { label: "이메일 변경" },
    ],
  },
  {
    title: "커뮤니티",
    items: [
      { label: "닉네임 설정" },
      { label: "이용 제한 내역" },
      { label: "게시판 관리" },
      { label: "커뮤니티 이용규칙" },
    ],
  },
  {
    title: "이용 안내",
    items: [
      { label: "문의하기" },
      { label: "공지사항" },
      { label: "서비스 이용약관" },
      { label: "개인정보 처리방침" },
      { label: "청소년 보호 정책" },
    ],
  },
  {
    title: "기타",
    items: [{ label: "정보 동의 설정" }, { label: "회원 탈퇴" }],
  },
];

export default function MyPage() {
  return (
    <>
      <Header />

      <div className="max-w-[680px] mx-auto px-4 py-8">
        {/* 프로필 카드 */}
        <div className="bg-white rounded-lg p-6 mb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* 아바타 */}
              <div className="w-[56px] h-[56px] rounded-full bg-gray-200 flex items-center justify-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#bbb"
                  strokeWidth="1.5"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>

              {/* 이름 + 학교 정보 */}
              <div>
                <p className="text-[15px] font-semibold text-text-primary">
                  유학생 / user123
                </p>
                <p className="text-[13px] text-text-muted mt-0.5">
                  서강대 21학번 · 재학생
                </p>
              </div>
            </div>

            {/* 로그아웃 버튼 */}
            <button className="px-3 py-1.5 bg-primary text-white text-[12px] rounded hover:bg-primary-dark transition-colors">
              로그아웃
            </button>
          </div>
        </div>

        {/* 설정 섹션들 */}
        {SETTINGS_SECTIONS.map((section) => (
          <div key={section.title} className="bg-white rounded-lg mb-3">
            {/* 섹션 제목 */}
            <h2 className="px-6 pt-5 pb-2 text-[16px] font-bold text-text-primary">
              {section.title}
            </h2>

            {/* 메뉴 항목들 */}
            <div>
              {section.items.map((item) => (
                <button
                  key={item.label}
                  className="w-full flex items-center justify-between px-6 py-3
                             text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[14px] text-text-primary">
                    {item.label}
                  </span>
                  {/* 값이 있으면 표시 (예: 아이디), 없으면 화살표 */}
                  {item.value ? (
                    <span className="text-[13px] text-text-muted">
                      {item.value}
                    </span>
                  ) : (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ccc"
                      strokeWidth="2"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="border-t border-border-light py-6">
        <div className="max-w-[680px] mx-auto px-4">
          <div className="flex items-center gap-4 text-[11px] text-text-muted">
            <span>이용약관</span>
            <span className="font-semibold">개인정보 처리방침</span>
            <span>커뮤니티이용규칙</span>
            <span>공지사항</span>
            <span>문의하기</span>
            <span>© MoSi</span>
          </div>
        </div>
      </footer>
    </>
  );
}
