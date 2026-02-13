/**
 * LeftSidebar 컴포넌트
 * 에브리타임 왼쪽 사이드바를 재현
 * - 프로필 카드: 아바타, 닉네임, 학교 정보, 내 정보/로그아웃 버튼
 * - 메뉴 리스트: 내가 쓴 글, 댓글 단 글, 내 스크랩
 * - 하단 광고 배너 이미지 (플레이스홀더)
 */

// 사이드바 메뉴 항목
const MENU_ITEMS = [
  { icon: "📝", label: "내가 쓴 글" },
  { icon: "💬", label: "댓글 단 글" },
  { icon: "⭐", label: "내 스크랩" },
];

export default function LeftSidebar() {
  return (
    <div className="flex flex-col gap-3">
      {/* 프로필 카드 */}
      <div className="bg-white rounded-lg p-5">
        {/* 아바타 + 닉네임 */}
        <div className="flex flex-col items-center mb-4">
          {/* 프로필 아바타 (원형 플레이스홀더) */}
          <div className="w-[72px] h-[72px] rounded-full bg-gray-200 flex items-center justify-center mb-3">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#bbb"
              strokeWidth="1.5"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>

          {/* 닉네임 */}
          <span className="text-sm font-semibold text-text-primary">
            유학생123
          </span>

          {/* 학교 + 학번 */}
          <span className="text-xs text-text-muted mt-1">오전반</span>
          <span className="text-xs text-text-muted">user123</span>
        </div>

        {/* 내 정보 / 로그아웃 버튼 */}
        <div className="flex gap-2">
          <button className="flex-1 text-xs border border-border-light rounded py-1.5 text-text-secondary hover:bg-gray-50 transition-colors">
            내 정보
          </button>
          <button className="flex-1 text-xs border border-border-light rounded py-1.5 text-text-secondary hover:bg-gray-50 transition-colors">
            로그아웃
          </button>
        </div>
      </div>

      {/* 메뉴 리스트 */}
      <div className="bg-white rounded-lg py-2">
        {MENU_ITEMS.map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-text-secondary
                       hover:bg-gray-50 transition-colors text-left"
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {/* 광고 배너 플레이스홀더 */}
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 h-[200px] flex items-center justify-center">
          <span className="text-xs text-text-muted">광고 배너 영역</span>
        </div>
      </div>

      <div className="bg-white rounded-lg overflow-hidden">
        <div className="bg-gradient-to-br from-pink-50 to-pink-100 h-[200px] flex items-center justify-center">
          <span className="text-xs text-text-muted">광고 배너 영역</span>
        </div>
      </div>
    </div>
  );
}
