/**
 * 로그인 페이지 (/login)
 * 에브리타임 로그인 화면을 재현
 *
 * 구조 (세로 중앙 정렬):
 * - "함께하는 유학생활" 텍스트
 * - MoSi 로고
 * - 아이디 입력
 * - 비밀번호 입력
 * - 로그인 버튼 (빨간색)
 * - 로그인 유지 체크박스 + 아이디/비밀번호 찾기
 * - 회원가입 링크
 * - Footer
 */

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* 메인 영역 - 수직 중앙 정렬 */}
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-[400px] px-6">
          {/* 슬로건 */}
          <p className="text-center text-[14px] text-text-secondary mb-3">
            함께하는 유학생활
          </p>

          {/* 로고 */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-primary tracking-tight">
              MoSi
            </h1>
            <p className="text-sm text-text-muted mt-1">모든 시간</p>
          </div>

          {/* 로그인 폼 */}
          <div className="flex flex-col gap-3 mb-4">
            {/* 아이디 */}
            <input
              type="text"
              placeholder="아이디"
              className="w-full px-4 py-3.5 bg-gray-100 rounded-md text-[14px]
                         text-text-primary placeholder-text-muted
                         focus:outline-none focus:ring-2 focus:ring-primary/20
                         border-none"
            />

            {/* 비밀번호 */}
            <input
              type="password"
              placeholder="비밀번호"
              className="w-full px-4 py-3.5 bg-gray-100 rounded-md text-[14px]
                         text-text-primary placeholder-text-muted
                         focus:outline-none focus:ring-2 focus:ring-primary/20
                         border-none"
            />
          </div>

          {/* 로그인 버튼 */}
          <button
            className="w-full py-3.5 bg-primary text-white text-[15px] font-semibold
                       rounded-md hover:bg-primary-dark transition-colors mb-4"
          >
            MoSi 로그인
          </button>

          {/* 로그인 유지 + 아이디/비밀번호 찾기 */}
          <div className="flex items-center justify-between mb-8">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-primary" />
              <span className="text-[13px] text-text-muted">로그인 유지</span>
            </label>
            <button className="text-[13px] text-text-muted hover:text-primary transition-colors">
              아이디/비밀번호 찾기
            </button>
          </div>

          {/* 회원가입 */}
          <div className="text-center">
            <Link
              href="/signup"
              className="text-[14px] text-text-secondary underline underline-offset-4
                         hover:text-primary transition-colors"
            >
              회원가입
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6">
        <div className="flex items-center justify-center gap-4 text-[11px] text-text-muted">
          <span>이용약관</span>
          <span className="font-semibold">개인정보처리방침</span>
          <span>문의하기</span>
          <span>© MoSi</span>
        </div>
      </footer>
    </div>
  );
}
