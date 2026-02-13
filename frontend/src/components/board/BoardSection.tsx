/**
 * BoardSection 컴포넌트
 * 에브리타임의 개별 게시판 섹션 (자유게시판, 비밀게시판 등)
 *
 * 구조:
 * ┌─────────────────────────┐
 * │ 게시판이름          더보기 │  ← 헤더
 * ├─────────────────────────┤
 * │ 게시글 제목     02/13 15:22│  ← 게시글 행
 * │ 게시글 제목     02/13 14:50│
 * │ 게시글 제목     02/13 14:30│
 * └─────────────────────────┘
 *
 * Props:
 * - name: 게시판 이름 (예: "자유게시판")
 * - posts: 게시글 배열
 */

import { Post } from "@/types/board";

interface BoardSectionProps {
  name: string;
  posts: Post[];
}

export default function BoardSection({ name, posts }: BoardSectionProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      {/* 게시판 헤더 */}
      <div className="flex items-center justify-between px-4 pt-3 pb-2">
        <h3 className="text-sm font-bold text-text-primary">{name}</h3>
      </div>

      {/* 게시글 목록 */}
      <ul>
        {posts.map((post) => (
          <li
            key={post.id}
            className="flex items-center justify-between px-4 py-1.5
                       hover:bg-gray-50 cursor-pointer transition-colors"
          >
            {/* 게시글 제목 - 길면 말줄임(...) 처리 */}
            <span className="text-[13px] text-text-primary truncate mr-2">
              {post.title}
            </span>
            {/* 작성 시간 */}
            <span className="text-[11px] text-text-muted flex-shrink-0">
              {post.createdAt}
            </span>
          </li>
        ))}
      </ul>

      {/* 하단 여백 */}
      <div className="h-2" />
    </div>
  );
}
