/**
 * PostListItem 컴포넌트
 * 게시판 페이지에서 개별 게시글 1개를 표시하는 행
 *
 * 구조:
 * ┌─────────────────────────────────────────┐
 * │ 제목                                     │
 * │ 본문 미리보기 (1줄)                        │
 * │ 👍 0  💬 2  ·  시간  ·  익명              │
 * └─────────────────────────────────────────┘
 */

import Link from "next/link";
import { PostDetail } from "@/types/board";

interface PostListItemProps {
  post: PostDetail;
}

export default function PostListItem({ post }: PostListItemProps) {
  return (
    <Link href={`/post/${post.id}`}>
      <article className="px-5 py-4 border-b border-border-light hover:bg-gray-50 transition-colors cursor-pointer">
        <div className="flex justify-between gap-4">
          {/* 왼쪽: 텍스트 영역 */}
          <div className="flex-1 min-w-0">
            {/* 제목 */}
            <h3 className="text-[14px] font-semibold text-text-primary mb-1 truncate">
              {post.title}
            </h3>

            {/* 본문 미리보기 */}
            {post.content && (
              <p className="text-[13px] text-text-secondary mb-2 truncate">
                {post.content}
              </p>
            )}

            {/* 하단 메타 정보: 좋아요, 댓글, 시간, 작성자 */}
            <div className="flex items-center gap-1.5 text-[11px]">
              {post.likes > 0 && (
                <span className="text-primary">👍 {post.likes}</span>
              )}
              {post.comments > 0 && (
                <span className="text-sky-500">💬 {post.comments}</span>
              )}
              <span className="text-text-muted">· {post.createdAt}</span>
              <span className="text-text-muted">· {post.author}</span>
            </div>
          </div>

          {/* 오른쪽: 썸네일 이미지 (있을 경우) */}
          {post.imageUrl && (
            <div className="w-[56px] h-[56px] rounded bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
              <span className="text-[10px] text-text-muted">IMG</span>
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
