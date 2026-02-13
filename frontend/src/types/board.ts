/**
 * 게시판 관련 TypeScript 타입 정의
 *
 * TypeScript에서 type과 interface의 차이:
 * - type: 다양한 형태의 타입을 조합할 때 사용 (union, intersection 등)
 * - interface: 객체 구조를 정의할 때 주로 사용 (extends로 확장 가능)
 * 여기서는 데이터 구조가 단순하므로 type을 사용
 */

// 게시글 1개의 구조 (메인 페이지 게시판 그리드용 - 간략 버전)
export type Post = {
  id: number;
  title: string; // 게시글 제목
  author: string; // 작성자 (익명일 수 있음)
  createdAt: string; // 작성 시간 (예: "02/13 15:22")
  likes?: number; // 좋아요 수 (선택적)
  comments?: number; // 댓글 수 (선택적)
};

// 게시글 상세 (게시판 목록 페이지용 - 본문 미리보기 포함)
export type PostDetail = {
  id: number;
  title: string;
  content: string; // 본문 내용
  author: string;
  createdAt: string;
  likes: number;
  comments: number;
  imageUrl?: string; // 첨부 이미지 (선택적)
};

// 게시글 전체 상세 (게시글 상세 페이지용 - 댓글 포함)
export type PostFull = {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  likes: number;
  comments: number;
  scraps: number;
};

// 댓글 1개
export type Comment = {
  id: number;
  content: string;
  author: string;
  isAuthor: boolean; // 글쓴이 여부 (글쓴이면 "익명(글쓴이)"로 표시)
  createdAt: string;
  likes: number;
  replies?: Comment[]; // 대댓글 (중첩 구조)
};

// 게시판 섹션 1개 (자유게시판, 비밀게시판 등)
export type BoardSection = {
  id: string; // 게시판 고유 ID (예: "free", "secret")
  name: string; // 게시판 이름 (예: "자유게시판")
  posts: Post[]; // 해당 게시판의 게시글 목록
};

// 실시간 인기 글 (오른쪽 사이드바용)
export type HotPost = {
  id: number;
  title: string;
  boardName: string; // 어느 게시판의 글인지
  likes: number;
  comments: number;
};

// 강의평 (오른쪽 사이드바용)
export type CourseReview = {
  id: number;
  courseName: string; // 과목명
  professor: string; // 교수명
  rating: number; // 별점 (1~5)
  content: string; // 한줄 평
};
