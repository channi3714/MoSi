/**
 * CommentItem 컴포넌트
 * 게시글 상세 페이지의 댓글 1개를 표시
 * 대댓글(replies)이 있으면 들여쓰기해서 재귀적으로 렌더링
 *
 * 구조:
 * ┌────────────────────────────────────────┐
 * │ 🧑 익명1              대댓글 공감 쪽지 신고 │
 * │ 댓글 내용 텍스트                          │
 * │ 02/13 16:40                             │
 * │  ┌──────────────────────────────────┐   │
 * │  │ 🧑 익명(글쓴이)        공감 쪽지 신고 │   │  ← 대댓글
 * │  │ 알려주셔서 감사합니다!!              │   │
 * │  │ 02/13 16:57                      │   │
 * │  └──────────────────────────────────┘   │
 * └────────────────────────────────────────┘
 */

import { Comment } from "@/types/board";

interface CommentItemProps {
  comment: Comment;
  isReply?: boolean; // 대댓글이면 true (들여쓰기 적용)
}

export default function CommentItem({
  comment,
  isReply = false,
}: CommentItemProps) {
  return (
    <div
      className={`${
        isReply
          ? "ml-8 border-l-2 border-border-light pl-4 bg-gray-50"
          : "border-b border-border-light"
      }`}
    >
      <div className="px-5 py-3">
        {/* 상단: 작성자 + 액션 버튼 */}
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-2">
            {/* 아바타 */}
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                comment.isAuthor ? "bg-primary/10" : "bg-gray-200"
              }`}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke={comment.isAuthor ? "#c62917" : "#bbb"}
                strokeWidth="2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            {/* 닉네임 - 글쓴이면 초록색 */}
            <span
              className={`text-[13px] font-semibold ${
                comment.isAuthor ? "text-green-600" : "text-text-primary"
              }`}
            >
              {comment.author}
            </span>
          </div>

          {/* 액션 버튼 */}
          <div className="flex items-center gap-2 text-[11px] text-text-muted">
            {!isReply && (
              <button className="hover:text-primary transition-colors">
                대댓글
              </button>
            )}
            <button className="hover:text-primary transition-colors">
              공감
            </button>
            <button className="hover:text-primary transition-colors">
              쪽지
            </button>
            <button className="hover:text-primary transition-colors">
              신고
            </button>
          </div>
        </div>

        {/* 댓글 내용 */}
        <p className="text-[13px] text-text-primary mb-1">{comment.content}</p>

        {/* 작성 시간 */}
        <span className="text-[11px] text-text-muted">{comment.createdAt}</span>
      </div>

      {/* 대댓글 (재귀 렌더링) */}
      {comment.replies?.map((reply) => (
        <CommentItem key={reply.id} comment={reply} isReply />
      ))}
    </div>
  );
}
