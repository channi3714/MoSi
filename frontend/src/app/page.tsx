import Header from "@/components/layout/Header";
import MainLayout from "@/components/layout/MainLayout";
import LeftSidebar from "@/components/layout/LeftSidebar";
import RightSidebar from "@/components/layout/RightSidebar";
import Banner from "@/components/common/Banner";
import BoardGrid from "@/components/board/BoardGrid";
import BookCard from "@/components/common/BookCard";

/**
 * 메인 페이지 - 에브리타임 스타일 레이아웃
 *
 * 구조:
 * ┌──────────────────────────────────────────────┐
 * │                  Header                       │
 * ├────────┬───────────────────────┬──────────────┤
 * │  Left  │   Banner              │    Right     │
 * │  Side  │   BoardGrid (2열)     │    Side      │
 * │  bar   │   BookCard            │    bar       │
 * └────────┴───────────────────────┴──────────────┘
 */
export default function Home() {
  return (
    <>
      {/* 상단 네비게이션 */}
      <Header />

      {/* 3단 레이아웃 */}
      <MainLayout
        leftSidebar={<LeftSidebar />}
        rightSidebar={<RightSidebar />}
      >
        {/* 배너 */}
        <Banner />

        {/* 게시판 2열 그리드 */}
        <BoardGrid />

        {/* 하단 도서 추천 */}
        <BookCard />
      </MainLayout>
    </>
  );
}
