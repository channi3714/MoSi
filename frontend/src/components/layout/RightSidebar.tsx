/**
 * RightSidebar 컴포넌트
 * 에브리타임 오른쪽 사이드바를 재현
 *
 * 구성:
 * 1. 검색 바
 * 2. 실시간 인기 글 목록
 * 3. HOT 게시판 / BEST 게시판 탭
 * 4. 최근 강의평
 */

import { mockHotPosts, mockBestPosts, mockCourseReviews } from "@/mocks/boards";

export default function RightSidebar() {
  return (
    <div className="flex flex-col gap-3">
      {/* 1. 검색 바 */}
      <div className="bg-white rounded-lg p-3">
        <div className="relative">
          <input
            type="text"
            placeholder="전체 게시판의 글을 검색하세요!"
            className="w-full border border-border-light rounded-md py-2 px-3 pr-8
                       text-xs text-text-primary placeholder-text-muted
                       focus:outline-none focus:border-primary"
          />
          {/* 검색 아이콘 */}
          <svg
            className="absolute right-2.5 top-1/2 -translate-y-1/2"
            width="14"
            height="14"
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

      {/* 2. 실시간 인기 글 */}
      <div className="bg-white rounded-lg p-4">
        <h3 className="text-sm font-bold text-primary mb-3">실시간 인기 글</h3>
        <ul className="flex flex-col gap-2">
          {mockHotPosts.map((post) => (
            <li
              key={post.id}
              className="cursor-pointer hover:bg-gray-50 rounded p-1 -mx-1 transition-colors"
            >
              {/* 게시글 제목 */}
              <p className="text-[13px] text-text-primary truncate">
                {post.title}
              </p>
              {/* 게시판 이름 + 좋아요/댓글 */}
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[11px] text-text-muted">
                  {post.boardName}
                </span>
                <span className="text-[11px] text-primary">
                  👍 {post.likes}
                </span>
                <span className="text-[11px] text-text-muted">
                  💬 {post.comments}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* 3. HOT 게시판 */}
      <div className="bg-white rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-text-primary">HOT 게시판</h3>
          <button className="text-[11px] text-text-muted hover:text-primary transition-colors">
            더 보기
          </button>
        </div>
        <ul className="flex flex-col gap-1.5">
          {mockBestPosts.map((post) => (
            <li
              key={post.id}
              className="flex items-center justify-between cursor-pointer
                         hover:bg-gray-50 rounded px-1 py-1 -mx-1 transition-colors"
            >
              <span className="text-[13px] text-text-primary truncate mr-2">
                {post.title}
              </span>
              <span className="text-[11px] text-text-muted flex-shrink-0">
                02/13 10:50
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* 4. BEST 게시판 */}
      <div className="bg-white rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-text-primary">BEST 게시판</h3>
          <button className="text-[11px] text-text-muted hover:text-primary transition-colors">
            더 보기
          </button>
        </div>
        <ul className="flex flex-col gap-1.5">
          {mockBestPosts.map((post) => (
            <li
              key={post.id}
              className="flex items-center justify-between cursor-pointer
                         hover:bg-gray-50 rounded px-1 py-1 -mx-1 transition-colors"
            >
              <span className="text-[13px] text-text-primary truncate mr-2">
                {post.title}
              </span>
              <span className="text-[11px] text-text-muted flex-shrink-0">
                02/12 04:15
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* 5. 최근 강의평 */}
      <div className="bg-white rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-text-primary">최근 강의평</h3>
          <button className="text-[11px] text-text-muted hover:text-primary transition-colors">
            더 보기
          </button>
        </div>
        <ul className="flex flex-col gap-3">
          {mockCourseReviews.map((review) => (
            <li
              key={review.id}
              className="cursor-pointer hover:bg-gray-50 rounded p-1 -mx-1 transition-colors"
            >
              {/* 별점 표시 */}
              <div className="flex gap-0.5 mb-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`text-xs ${
                      i < review.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              {/* 과목명 : 교수명 */}
              <p className="text-[12px] font-semibold text-text-primary truncate">
                {review.courseName} : {review.professor}
              </p>
              {/* 한줄평 */}
              <p className="text-[11px] text-text-muted mt-0.5 truncate">
                {review.content}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
