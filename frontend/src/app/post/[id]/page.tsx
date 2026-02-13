/**
 * 게시글 상세 페이지 (/post/[id])
 * 에브리타임의 게시글 상세 + 댓글 페이지를 재현
 *
 * 구조:
 * - Header
 * - 게시글 본문 (작성자, 날짜, 제목, 내용, 좋아요/댓글/스크랩)
 * - 공감/스크랩 버튼
 * - 댓글 리스트 (대댓글 포함)
 * - 댓글 입력 바
 * - 오른쪽 사이드바
 */

import Header from "@/components/layout/Header";
import RightSidebar from "@/components/layout/RightSidebar";
import CommentItem from "@/components/board/CommentItem";
import { mockPostFull, mockComments } from "@/mocks/posts";
import Link from "next/link";

export default function PostDetailPage() {
  const post = mockPostFull;

  return (
    <>
      <Header />

      <div className="max-w-[1200px] mx-auto flex gap-4 px-4 py-5">
        {/* 메인 컨텐츠 */}
        <main className="flex-1 min-w-0">
          <div className="bg-white rounded-lg overflow-hidden">
            {/* ===== 게시글 본문 ===== */}
            <div className="px-5 pt-5 pb-4 border-b border-border-light">
              {/* 작성자 정보 + 액션 */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {/* 아바타 */}
                  <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#bbb"
                      strokeWidth="1.5"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-text-primary">
                      {post.author}
                    </p>
                    <p className="text-[11px] text-text-muted">
                      {post.createdAt}
                    </p>
                  </div>
                </div>

                {/* 쪽지/신고 */}
                <div className="flex items-center gap-3 text-[12px] text-text-muted">
                  <button className="hover:text-primary transition-colors">
                    쪽지
                  </button>
                  <button className="hover:text-primary transition-colors">
                    신고
                  </button>
                </div>
              </div>

              {/* 제목 */}
              <h1 className="text-[17px] font-bold text-text-primary mb-3 leading-relaxed">
                {post.title}
              </h1>

              {/* 본문 */}
              <p className="text-[14px] text-text-primary leading-relaxed mb-4">
                {post.content}
              </p>

              {/* 좋아요 / 댓글 / 스크랩 카운트 */}
              <div className="flex items-center gap-3 text-[12px]">
                <span className="text-primary">👍 {post.likes}</span>
                <span className="text-sky-500">💬 {post.comments}</span>
                <span className="text-yellow-500">⭐ {post.scraps}</span>
              </div>
            </div>

            {/* ===== 공감 / 스크랩 버튼 ===== */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-border-light">
              <button
                className="flex items-center gap-1.5 px-3 py-1.5 border border-border-light
                           rounded-full text-[12px] text-text-secondary
                           hover:bg-gray-50 transition-colors"
              >
                👍 공감
              </button>
              <button
                className="flex items-center gap-1.5 px-3 py-1.5 border border-border-light
                           rounded-full text-[12px] text-text-secondary
                           hover:bg-gray-50 transition-colors"
              >
                ⭐ 스크랩
              </button>
            </div>

            {/* ===== 댓글 리스트 ===== */}
            <div>
              {mockComments.map((comment) => (
                <CommentItem key={comment.id} comment={comment} />
              ))}
            </div>

            {/* ===== 댓글 입력 바 ===== */}
            <div className="px-5 py-3 border-t border-border-light">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="댓글을 입력하세요."
                  className="flex-1 border border-border-light rounded-lg px-3 py-2.5
                             text-[13px] text-text-primary placeholder-text-muted
                             focus:outline-none focus:border-primary"
                />
                {/* 익명 체크박스 */}
                <label className="flex items-center gap-1 text-[12px] text-text-secondary flex-shrink-0">
                  <input type="checkbox" defaultChecked className="w-3.5 h-3.5" />
                  익명
                </label>
                {/* 전송 버튼 */}
                <button className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-primary-dark transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* ===== 글 목록 버튼 ===== */}
            <div className="px-5 pb-4">
              <Link
                href="/board/free"
                className="inline-flex items-center gap-1 px-3 py-2 border border-border-light
                           rounded text-[12px] text-text-secondary hover:bg-gray-50 transition-colors"
              >
                ≡ 글 목록
              </Link>
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
