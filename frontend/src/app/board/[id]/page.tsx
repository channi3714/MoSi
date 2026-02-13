/**
 * 게시판 페이지 (/board/[id])
 * 에브리타임의 자유게시판 등 개별 게시판 목록 페이지를 재현
 *
 * 구조:
 * - Header
 * - 게시판 제목
 * - 상단 태그 (인기 게시글 미리보기)
 * - "새 글을 작성해주세요!" 입력 바
 * - 게시글 리스트
 * - 하단 페이지네이션 + 검색
 * - 오른쪽 사이드바
 */

import Header from "@/components/layout/Header";
import RightSidebar from "@/components/layout/RightSidebar";
import PostListItem from "@/components/board/PostListItem";
import { mockFreeBoardPosts, mockBoardTags } from "@/mocks/posts";

export default function BoardPage() {
  return (
    <>
      <Header />

      <div className="max-w-[1200px] mx-auto flex gap-4 px-4 py-5">
        {/* 메인 컨텐츠 */}
        <main className="flex-1 min-w-0">
          <div className="bg-white rounded-lg overflow-hidden">
            {/* 게시판 제목 */}
            <div className="px-5 pt-5 pb-3">
              <h1 className="text-xl font-bold text-text-primary">
                자유게시판
              </h1>
            </div>

            {/* 상단 태그 (인기 게시글 미리보기) */}
            <div className="px-5 pb-3 flex gap-2 overflow-x-auto">
              {mockBoardTags.map((tag, i) => (
                <button
                  key={i}
                  className="flex-shrink-0 px-3 py-1.5 bg-gray-100 rounded-full
                             text-[12px] text-text-secondary hover:bg-gray-200
                             transition-colors truncate max-w-[200px]"
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* 새 글 작성 바 */}
            <div className="mx-5 mb-3 border border-border-light rounded-lg">
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-[13px] text-text-muted">
                  새 글을 작성해주세요!
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#999"
                  strokeWidth="2"
                >
                  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                  <path d="m15 5 4 4" />
                </svg>
              </div>
            </div>

            {/* 게시글 리스트 */}
            <div>
              {mockFreeBoardPosts.map((post) => (
                <PostListItem key={post.id} post={post} />
              ))}
            </div>

            {/* 하단: 페이지네이션 + 검색 */}
            <div className="flex items-center justify-between px-5 py-4 border-t border-border-light">
              {/* 검색 영역 */}
              <div className="flex items-center gap-2">
                <select className="text-xs border border-border-light rounded px-2 py-1.5 text-text-secondary">
                  <option>전체</option>
                  <option>제목</option>
                  <option>내용</option>
                </select>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="검색어를 입력하세요."
                    className="border border-border-light rounded px-3 py-1.5 pr-8 text-xs
                               text-text-primary placeholder-text-muted
                               focus:outline-none focus:border-primary w-[180px]"
                  />
                  <svg
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#999"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                </div>
              </div>

              {/* 다음 페이지 */}
              <button className="text-xs text-primary font-semibold hover:underline">
                다음 &gt;
              </button>
            </div>
          </div>
        </main>

        {/* 오른쪽 사이드바 */}
        <aside className="w-[250px] flex-shrink-0">
          <RightSidebar />
        </aside>
      </div>
    </>
  );
}
