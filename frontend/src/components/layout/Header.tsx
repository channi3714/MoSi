/**
 * Header 컴포넌트
 * 에브리타임 상단 네비게이션 바를 재현한 컴포넌트
 * - 왼쪽: 로고 (MoSi)
 * - 가운데: 메뉴 탭 (게시판, 시간표, 강의실 등)
 * - 오른쪽: 알림/프로필 아이콘
 */

// 네비게이션 메뉴 항목 목록
const NAV_ITEMS = [
  "게시판",
  "시간표",
  "강의실",
  "학점계산기",
  "친구",
  "쪽지",
  "캠퍼스픽",
];

export default function Header() {
  return (
    <header className="bg-white border-b border-border-light sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[56px] px-4">
        {/* 로고 영역 */}
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold text-xl tracking-tight">
            MoSi
          </span>
          <span className="text-text-muted text-xs hidden sm:inline">
            모든 시간
          </span>
        </div>

        {/* 네비게이션 메뉴 */}
        <nav className="flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className="px-3 py-2 text-sm text-text-secondary hover:text-primary
                         rounded transition-colors cursor-pointer"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* 오른쪽 아이콘 영역 (알림, 프로필) */}
        <div className="flex items-center gap-3">
          {/* 알림 아이콘 (SVG로 간단한 종 모양) */}
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#666"
              strokeWidth="2"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </button>
          {/* 프로필 아이콘 */}
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#666"
              strokeWidth="2"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
