/**
 * MainLayout 컴포넌트
 * 에브리타임 스타일의 3단 레이아웃을 구현
 * - 왼쪽 사이드바 (200px): 프로필, 메뉴
 * - 중앙 컨텐츠 (가변): 게시판 그리드
 * - 오른쪽 사이드바 (250px): 인기글, HOT 게시판
 *
 * children: 중앙에 표시할 메인 컨텐츠
 * leftSidebar: 왼쪽 사이드바에 표시할 컴포넌트
 * rightSidebar: 오른쪽 사이드바에 표시할 컴포넌트
 */

interface MainLayoutProps {
  children: React.ReactNode; // 중앙 메인 컨텐츠
  leftSidebar?: React.ReactNode; // 왼쪽 사이드바 (선택)
  rightSidebar?: React.ReactNode; // 오른쪽 사이드바 (선택)
}

export default function MainLayout({
  children,
  leftSidebar,
  rightSidebar,
}: MainLayoutProps) {
  return (
    <div className="max-w-[1200px] mx-auto flex gap-4 px-4 py-5">
      {/* 왼쪽 사이드바 - 고정 너비 200px */}
      {leftSidebar && (
        <aside className="w-[200px] flex-shrink-0">{leftSidebar}</aside>
      )}

      {/* 중앙 메인 컨텐츠 - 나머지 공간을 차지 */}
      <main className="flex-1 min-w-0">{children}</main>

      {/* 오른쪽 사이드바 - 고정 너비 250px */}
      {rightSidebar && (
        <aside className="w-[250px] flex-shrink-0">{rightSidebar}</aside>
      )}
    </div>
  );
}
